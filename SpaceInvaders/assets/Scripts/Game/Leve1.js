const Emitter = require("Emitter")
cc.Class({
    extends: cc.Component,

    properties: {
        prefabEnemy: cc.Prefab,
        prefabEnemy1: cc.Prefab,
        prefabEnemy2: cc.Prefab,
        bossEnemy : cc.Prefab,
        spaceWay : cc.Node,
        waveLable : cc.Label,

        _jsonMap : null,
        _map: null,
        _mapColl: null,
        _mapRow: null,
        _numberOfEnemies: 0,
        _numberOfEnemiesDead : 0,
        _waveID : 1,
    },

    start () {
        Emitter.instance.registerEvent("countEnemies", this.controlWave.bind(this))
        cc.loader.loadRes("Level.json", this.renderMap.bind(this));
    },
    
    renderMap(err, obj){
        if (err){
            cc.log(err);
            return;
        }
        this._waveID = 1;
        this._jsonMap = obj;
        this._map = this._jsonMap.json.Level1.wave1.map;
        this._mapCol = this._jsonMap.json.Level1.wave1.collumn;
        this._mapRow = this._jsonMap.json.Level1.wave1.row;
        this._numberOfEnemies = this._jsonMap.json.Level1.wave1.numberOfEnemies;
        this.waveLable.node.active = true;
        this.waveLable.node.scale = 0;
        cc.tween(this.waveLable.node)
            .to(1,{scale :1})
            .to(1,{scale :.5, opacity : 150})
            .to(1,{scale :1, opacity : 100})
            .to(1,{scale :.5, opacity : 50})
            .to(1,{scale :0})
            .call(()=>{
                this.waveLable.node.active = false;
            })
            .call(()=>{
                this.renderWave(this._map, this._mapCol, this._mapRow);
            })
            .start();
    },

    renderWave(map, collumn, row){
        let index = 0;
        let canvasWid = cc.Canvas.instance.node.getContentSize().width;
        let canvasHei = cc.Canvas.instance.node.getContentSize().height;
        for (let i = 0; i <= row-1; i++){
             for (let j = 0; j <= collumn-1; j++){
                if (map[index]=== 1){
                    let enemy = cc.instantiate(this.prefabEnemy);
                    enemy.parent = this.spaceWay;
                    enemy.position = cc.v2((canvasWid/collumn) * j- 330, (-(canvasHei/(2*row))*i)+600);
                }
                else if (map[index]=== 2){
                    let enemy = cc.instantiate(this.prefabEnemy1);
                    enemy.parent = this.spaceWay;
                    enemy.position = cc.v2((canvasWid/collumn) * j- 330, (-(canvasHei/(2*row))*i)+600);
                }
                else if (map[index]=== 3){
                    let enemy = cc.instantiate(this.prefabEnemy2);
                    enemy.parent = this.spaceWay;
                    enemy.position = cc.v2((canvasWid/collumn) * j- 330, (-(canvasHei/(2*row))*i)+600);
                }
                else if (map[index]=== 4){
                    let enemy = cc.instantiate(this.bossEnemy);
                    enemy.parent = this.spaceWay;
                    enemy.position = cc.v2((canvasWid/collumn) * j- 330, (-(canvasHei/(2*row))*i)+600);
                }
                index++;
            }   
        }
    },

    controlWave(){
        this._numberOfEnemiesDead++;
        if(this._numberOfEnemies === this._numberOfEnemiesDead){
            this._waveID ++;
            this.waveList();
            this._numberOfEnemiesDead = 0;
        }
    },

    waveList(){
        if(this._waveID === 2){
            this._map = this._jsonMap.json.Level1.wave2.map;
            this._mapCol = this._jsonMap.json.Level1.wave2.collumn;
            this._mapRow = this._jsonMap.json.Level1.wave2.row;
            this._numberOfEnemies = this._jsonMap.json.Level1.wave2.numberOfEnemies;
        }
        else if(this._waveID === 3){
            this._map = this._jsonMap.json.Level1.wave3.map;
            this._mapCol = this._jsonMap.json.Level1.wave3.collumn;
            this._mapRow = this._jsonMap.json.Level1.wave3.row;
            this._numberOfEnemies = this._jsonMap.json.Level1.wave3.numberOfEnemies;
        }
        
        this.waveLable.node.active = true;
        this.waveLable.string = "Wave " + this._waveID
        this.waveLable.node.scale = 0;
        cc.tween(this.waveLable.node)
            .to(1,{scale :1})
            .to(1,{scale :.5, opacity : 150})
            .to(1,{scale :1, opacity : 100})
            .to(1,{scale :.5, opacity : 50})
            .to(1,{scale :0})
            .call(()=>{
                this.waveLable.node.active = false;
            })
            .call(()=>{
                this.renderWave(this._map, this._mapCol, this._mapRow);
            })
            .start();        
    },
});
