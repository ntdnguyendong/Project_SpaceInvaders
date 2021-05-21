cc.Class({
    extends: cc.Component,

    properties: {
       imgNameGame : cc.Node,
       playBtn : cc.Button,
       imgDecor : cc.Node,
    },

    onLoad () {
        this.imgName();
        this.imgDecorBg();
        this.playBtn.node.on('click', this.changeScene, this);
    },

    start () {

    },

    // update (dt) {},

    imgName(){
        cc.tween(this.imgNameGame)
            .to(1, {scale : 0.5, opacity : 100})
            .to(2, {scale : 1.5, opacity : 255})
            .start();
    },

    imgDecorBg(){
        let anim = cc.tween()
            .to(1, {scale : 1.5, opacity : 100})
            .to(2, {scale : 1.2, opacity : 255})
        cc.tween(this.imgDecor).then(anim).repeatForever().start()
    },

    changeScene(){
        cc.director.loadScene("GamePlayScene");
    },
});
