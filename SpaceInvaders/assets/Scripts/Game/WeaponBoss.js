cc.Class({
    extends: cc.Component,

    properties: {
        bulletPrefab: {
            default: null,
            type: cc.Prefab,
        },
        interval: {
            default : 1.5,
            serializable : true,
        }   
    },

    onEnable() {
        this.schedule(this.fire, this.interval);
      },
    
    onDisable() {
        this.unschedule(this.fire);
    },

    fire(){
        let bulletPos_1 = this.node.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        let bulletPos_2 = this.node.convertToWorldSpaceAR(new cc.Vec2(-50, -50));
        let bulletPos_3 = this.node.convertToWorldSpaceAR(new cc.Vec2(50, -50));
        
        this.add(bulletPos_1);
        this.add(bulletPos_2);
        this.add(bulletPos_3);
    },

    add(bulletPos){
        let bulletBoss = cc.instantiate(this.bulletPrefab);
        bulletBoss.active = true;
        bulletPos.subSelf(cc.Canvas.instance.node.position);
        bulletBoss.position = bulletPos;
        bulletBoss.parent = cc.Canvas.instance.node;
    }
});
