cc.Class({
    extends: require('Bullet'),

    properties: {
        bulletScale : {
            default : 0.01,
            serializable : true,
        },
    },


    // onLoad () {},

    start () {

    },

    onEnable() {
        cc.audioEngine.playEffect(this.soundBullet, false);
        let sprite = this.node.getComponent(cc.Sprite);
        sprite.node.angle += 180;
    },

    update (dt) {
       this.bulletMovement(dt)
    },

    bulletMovement(dt){
        let curScale = this.node.scale;
        curScale += this.bulletScale;
        this.node.setScale(curScale);

        let bulletPos = this.node.position;
        bulletPos.addSelf(this.speed.mul(dt));

        let screenSize = cc.Canvas.instance.node.getContentSize();
        let top = screenSize.height >> 1;
        let bottom = -top;
        let right = screenSize.width >> 1;
        let left = -right;

        let outScreen = bulletPos.x < left || bulletPos.x > right || bulletPos.y < bottom - 200|| bulletPos.y > top;
        if (outScreen) {
            this.node.destroy();
            return;
        }

        this.node.position = bulletPos;
    }
});
