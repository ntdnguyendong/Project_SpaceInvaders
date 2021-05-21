cc.Class({
    extends: cc.Component,

    properties: {
        bulletPrefab :{
            default : null,
            type : cc.Prefab,
        },
        interval: {
            default : null,
            serializable : false,
        }   
    },

    onEnable() {
        let randomInterval = this.interval += this.getRandom(5, 10);
        this.schedule(this.fire, randomInterval);
    },

    onDisable() {
        this.unschedule(this.fire);
    },

    fire(){
        let bulletPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.add(bulletPos);
    },

    add(bulletPos) {
        let bulletEne = cc.instantiate(this.bulletPrefab);
        bulletEne.active = true;
        bulletPos.subSelf(cc.Canvas.instance.node.position);
        bulletEne.position = bulletPos;
        bulletEne.parent = cc.Canvas.instance.node;
    },

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
      },
});
