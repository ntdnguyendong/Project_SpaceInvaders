cc.Class({
    extends: require('ActorController'),

    properties: {
        soundEneDie : {
            default : null,
            type : cc.AudioClip,
        },
    },

    ctor(){
        this.hp = 10;
    },

    onLoad () {
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
                .to(.5,{position : cc.v2(this.node.position.x + 10,this.node.y)})
                .to(.5,{position : cc.v2(this.node.position.x - 10,this.node.y)})
            cc.tween(this.node).then(anim).repeatForever().start();
    },
});
