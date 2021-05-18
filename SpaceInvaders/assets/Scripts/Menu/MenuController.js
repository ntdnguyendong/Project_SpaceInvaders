cc.Class({
    extends: cc.Component,

    properties: {
        labelNameGame : cc.Node,
    },

    onLoad () {
        this.labelName();
    },

    start () {

    },

    // update (dt) {},

    labelName(){
        let anim = cc.tween()
            .to(2, {scale : 0.5})
            .to(2, {scale : 1.2})
        cc.tween(this.labelNameGame).then(anim).repeatForever().start()
    },
});
