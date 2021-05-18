cc.Class({
    extends: cc.Component,

    properties: {
        bgAnim_1: cc.Node,
        bgAnim_2: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.bgAnim_1.y = 0;
        this.bgAnim_2.y = this.bgAnim_1.y + this.bgAnim_1.height;
    },

    start() {

    },

    update(dt) {
        this.bgAnim_1.y -= 2;
        this.bgAnim_2.y -= 2;
        if (this.bgAnim_1.y <= -this.bgAnim_1.height)
            this.bgAnim_1.y = this.bgAnim_2.y + this.bgAnim_1.height;
        if (this.bgAnim_2.y <= -this.bgAnim_2.height)
            this.bgAnim_2.y = this.bgAnim_1.y + this.bgAnim_2.height;

    },
});