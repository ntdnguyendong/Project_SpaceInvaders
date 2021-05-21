const Emitter = require("Emitter")

cc.Class({
    extends: cc.Component,

    properties: {
        losePanel : cc.Node,
        btnHome : cc.Node,
        soundGame: {
            default: null,
            type: cc.AudioClip,
          },
    },

    onLoad () {
        this.loseMovement();
        this.btnMovement();
    },

    loseMovement(){
        cc.tween(this.losePanel)
            .to (1, {position : cc.v2(0,0), angle : 180, scale : 2})
            .by (1, {position : cc.v2(0,200), angle : 180, scale : -1})
            .start();
    },

    btn1Click(){
        Emitter.instance.emit("returnHome");
    },

    btnMovement(){
        let anim = cc.tween()
            .to(1, {scale : 0.5, angle : 90})
            .to(1, {scale : 1, angle : 180})
            .to(1, {scale : 0.5, angle : 270})
            .to(1, {scale : 1, angle : 360})
        cc.tween(this.btnHome).then(anim).repeatForever().start()
    },
});
