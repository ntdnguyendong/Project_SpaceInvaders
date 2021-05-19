cc.Class({
    extends: cc.Component,

    onLoad : function () {
        this.posX = this.node.x;
        this.time = 0;
    },

    update : function (dt) {
        // this.time += this.time > 1 ? 0 : dt;
        // this.node.y = cc.lerp(this.posX, 150, this.time);
        let screen = cc.Canvas.instance.node.getContentSize();

        const RADIUS = 50;
        this.node.x = cc.misc.lerp(-screen.width / 2 + RADIUS, screen.width / 2 - RADIUS, Math.random());
        thid.node.y = screen.height / 2 - RADIUS;
    }
});