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
        spriteDie : {
            default : null,
            type : cc.SpriteFrame,
        }
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
                this.dieMovement();
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

    dieMovement(){
        cc.audioEngine.playEffect(this.soundEneDie, false);
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteDie;
        cc.tween(this.node)
                .by(0.2,{scale : .1, opacity : 0})
                .by(0.7,{scale : .1, opacity : -100})
                .by(1,{scale : .1, opacity : -255})
                .call(()=>{
                    this.node.destroy();
                })
                .start()
    },
});
