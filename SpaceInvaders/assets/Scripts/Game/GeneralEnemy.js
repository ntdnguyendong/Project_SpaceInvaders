cc.Class({
    extends: require('ActorController'),

    properties: {
        soundEneDie : {
            default : null,
            type : cc.AudioClip,
        },
        posX : {
            default : 20,
            serializable : true,
        },
    },

    onLoad () {
        this.movementEnemy()
    },

    start () {

    },

    update (dt) {
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'Main Bullet') {
            if(--this.hp < 1){
                cc.audioEngine.playEffect(this.soundEneDie, false);
                this.node.destroy();
            }
        }
    },

    movementEnemy(){
        let anim = cc.tween()
                .by(.5,{position : cc.v2(this.posX,0)})
                .by(1,{position : cc.v2(-this.posX*2,0)})
                .by(.5,{position : cc.v2(this.posX,0)})
            cc.tween(this.node).then(anim).repeatForever().start();
    },
});
