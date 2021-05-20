cc.Class({
   extends: require('ActorController'),

    properties: {
        speed : {
            default : cc.Vec2.ZERO
        },
        soundEneDie : {
            default : null,
            type : cc.AudioClip,
        },
    },

    ctor(){
        this.maxHp = 3;
        this.hp =3;
    },

    onLoad () {
        this._super();
    },

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
            cc.log(this.hp)
            if(--this.hp < 1){
                cc.log(this.hp)
                cc.audioEngine.playEffect(this.soundEneDie, false);
                this.node.destroy();
            }
        }
    }
});
