cc.Class({
    extends: cc.Component,

    properties: {
       imgNameGame : cc.Node,
       playBtn : cc.Button,
    },

    onLoad () {
        this.imgName();
        this.playBtn.node.on('click', this.changeScene, this);
    },

    start () {

    },

    // update (dt) {},

    imgName(){
        let anim = cc.tween()
            .to(1, {scale : 0.5, opacity : 100})
            .to(2, {scale : 1.5, opacity : 255})
        cc.tween(this.imgNameGame).then(anim).repeatForever().start()
    },

    changeScene(){
        cc.director.loadScene("GamePlayScene");
    },
});
