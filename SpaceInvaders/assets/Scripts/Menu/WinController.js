const Emitter = require("Emitter")

cc.Class({
    extends: cc.Component,

    properties: {
        imgLabel: cc.Node,
        imgWin: cc.Node,
        btnHome : cc.Node,
    },

    onLoad () {
        this.imgWinMovement();
        this.imgLabelMovement();
        this.btnMovement();
    },

    imgWinMovement() {
        let anim = cc.tween()
            .by(1, { angle: 360 , opacity : 0})
            .by(1, { angle: 360 , opacity : -100})
            .by(1, {angle: 360, opacity : 100})
            .by(1, {angle: 360, opacity : 255})
        cc.tween(this.imgWin).then(anim).repeatForever().start();
    },

    imgLabelMovement(){
        let anim = cc.tween()
            .to(1, {scale : .5})
            .to(1, {scale : 1.5})
        cc.tween(this.imgLabel).then(anim).repeatForever().start();
    },

    btn1Click(){
        Emitter.instance.emit("returnHome");
    },

    btnMovement(){
        let anim = cc.tween()
            .to(1, {angle : 360})
            .to(1, {angle : 270})
            .to(1, {angle : 180})
            .to(1, {angle : 90})
        cc.tween(this.btnHome).then(anim).repeatForever().start()
    },
   
});
