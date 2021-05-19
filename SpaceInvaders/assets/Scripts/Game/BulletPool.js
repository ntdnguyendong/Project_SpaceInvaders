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

    // update (dt) {},

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
});
