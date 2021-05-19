cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        },

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    onEnable(){
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'enemys') {
            G.bullets.remove(this);     
        }
    }

    // update (dt) {},
});