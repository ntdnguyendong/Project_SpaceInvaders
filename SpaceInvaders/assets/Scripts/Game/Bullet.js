let _singleton = require('SingleTon')
cc.Class({
    extends: cc.Component,

    properties: {
        speed : {
            default : cc.Vec2.ZERO,
        },
        soundBullet : {
            default : null,
            type : cc.AudioClip,
        },
    },

    // onLoad () {},

    onEnable(){
        cc.audioEngine.playEffect(this.soundBullet, false);
    },

    start () {

    },

    // update (dt) {},
    
    onCollisionEnter(other, self) {
        if (other.node.group === 'Enemies') {
            _singleton._instance.bulletPool.remove(this);     
        }
    }
});
