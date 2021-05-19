let _singleton = require('SingleTon')
let bullet = require('Bullet');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        _singleton._instance.bulletPool = this;
        this.pool = new cc.NodePool('Bullet');
        this.bulletPool = [];
    },

    start() {

    },

    update (dt) {
        let screenSize = cc.Canvas.instance.node.getContentSize();
        let topScreen = screenSize.height >> 1;
        let bottomScreeen = -topScreen;
        let rightScreen = screenSize.width >> 1;
        let leftScreen = -rightScreen;

        for(let i = 0; i < this.bulletPool.length; i++){
            let bullet = this.bulletPool[i];
            let bulletPos = bullet.node.position;
            bulletPos.addSelf(bullet.speed.mul(dt * 2));

            let outScreen = bulletPos.x < leftScreen || bulletPos.x > rightScreen || bulletPos.y < bottomScreeen || bulletPos.y > topScreen;
            if(outScreen){
                this.remove(bullet);
                continue;
            }
            bullet.node.position = bulletPos
        }
    },

    add(prefab, position) {
        let bulletNode = this.pool.get();
        if(!bulletNode) bulletNode = cc.instantiate(prefab);

        bulletNode.active = true;
        let bullet = bulletNode.getComponent('Bullet');
        this.bulletPool.push(bullet);
        position.subSelf(this.node.parent.position);
        bullet.node.position = position;

        bullet.node.parent = this.node;
    },

    remove(bullet){
        bullet.node.active = false;
        cc.js.array.remove(this.bulletPool, bullet);
        this.pool.put(bullet.node);
    }
});
