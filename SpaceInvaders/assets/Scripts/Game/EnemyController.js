cc.Class({
   extends: require('ActorController'),

    properties: {
        speed : {
            default : cc.Vec2.ZERO,
            serializable : true,
        },
        soundEneDie : {
            default : null,
            type : cc.AudioClip,
        },
    },
    
    onLoad () {},

    start () {

    },

    update (dt) {
        let deltaSpeed = this.speed.mul(dt*2);
        this.node.position = this.node.position.addSelf(deltaSpeed);
    },

    lateUpdate(dt){
        this.detectBoundary();
    },

    detectBoundary() {
        const RADIUS = 0;
        let screen = cc.Canvas.instance.node.getContentSize();
        let bottom = -screen.height >> 1;

        let currentPos = this.node.position;
        if (currentPos.y - RADIUS < bottom) {
            this.node.destroy();
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'Main Bullet') {
            if(--this.hp < 1){
                cc.audioEngine.playEffect(this.soundEneDie, false);
                this.node.destroy();
            }
        }
    }
});
