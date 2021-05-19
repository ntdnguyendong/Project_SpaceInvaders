cc.Class({
    extends: cc.Component,

    properties: {

        bullet: {
            default: null,
            type: cc.Prefab
        },
        interval: 0.12
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {},

    onEnable() {
        this.schedule(this.fire, this.interval);
    },

    onDisable() {
        this.unschedule(this.fire);
    },
    fire() {
        let bulletPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        G.bullets.add(this.bullet, bulletPos);
    }

    // update (dt) {},
});