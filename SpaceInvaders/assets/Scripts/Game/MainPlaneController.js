cc.Class({
    extends: cc.Component,

    properties: {
        mainCanvas: cc.Node,
        bulletMain: {
            default : null,
            type : cc.Node,
        }
    },

    onLoad() {
        cc.Canvas.instance.node.on("mousemove", this.getPositionMouse, this);
    },

    start() { },

    update(dt) {
        this.planeMovement();
    },

    getPositionMouse(event) {
        this._posMouse = event.getLocation();
    },

    planeMovement() {
        if (this._posMouse != null) {
            this.node.position = cc.v2(
                this._posMouse.x - this.mainCanvas.width / 2,
                this._posMouse.y - this.mainCanvas.height / 2
            );
        }
    },
});
