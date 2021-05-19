cc.Class({
    extends: cc.Component,

    properties: {
        speed : {
            default : cc.Vec2.ZERO
        }
    },


    // onLoad () {},

    start () {

    },

    update (dt) {
        let deltaSpeed = this.speed.mul(dt);
        this.node.position = this.node.position.addSelf(deltaSpeed);
    },

    lateUpdate(dt){
        this.detectBoundary();
    },

    detectBoundary() {
        const RADIUS = 0;
        let screen = cc.Canvas.instance.node.getContentSize();
        let bottom = -screen.height >> 1;

        let currentPos = this.node.position;
        if (currentPos.y - RADIUS < bottom) {
            this.node.destroy();
        }
    },
});
