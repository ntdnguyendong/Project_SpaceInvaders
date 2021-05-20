cc.Class({
    extends: cc.Component,

    properties: {
        prefabEnemy: cc.Prefab,
        prefabEnemy1: cc.Prefab,
        _obj:{
            default: null,
            type: cc.Node,
            idNumber: 0
        }
    },

    start () {
        cc.loader.loadRes("Level.json", this.renderMap.bind(this))
    },

    renderMap(err, obj){
        if (err){
            cc.log(err)
            return;
        }
        let map = obj.json.Level1.wave1.map
        let mapCol = obj.json.Level1.wave1.collumn
        let mapRow = obj.json.Level1.wave1.row
        this.renderWave(map, mapCol, mapRow)
    },

    renderWave(map, collumn, row){
        let index = 0;
        let canvasWid = cc.Canvas.instance.node.getContentSize().width
        let canvasHei = cc.Canvas.instance.node.getContentSize().height
        for (let i = 0; i <= row-1; i++){
             for (let j = 0; j <= collumn-1; j++){
                if (map[index]=== 1){
                    this._obj = cc.instantiate(this.prefabEnemy)
                    this._obj.parent = cc.Canvas.instance.node
                    this._obj.position = cc.v2((canvasWid/collumn) * j- 280, (-(canvasHei/(2*row))*i)+450)
                }
                else if (map[index]=== 2){
                    this._obj = cc.instantiate(this.prefabEnemy1)
                    this._obj.parent = cc.Canvas.instance.node
                    this._obj.position = cc.v2((canvasWid/collumn) * j- 280, (-(canvasHei/(2*row))*i)+450)
                }
                index++
            }   
        }
    }
});
