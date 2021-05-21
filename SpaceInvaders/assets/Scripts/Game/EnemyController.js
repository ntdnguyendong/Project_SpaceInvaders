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
        scaleBurst : {
            default : 0.01,
            serializable : true,
        },
        spriteDie : {
            default : null,
            type : cc.SpriteFrame,
        }
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

    dieMovement(){
        let polygonCon = this.node.getComponent(cc.PolygonCollider);
        polygonCon.enabled = false;
        cc.audioEngine.playEffect(this.soundEneDie, false);
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteDie;
        cc.tween(this.node)
            .by(0.2,{scale : this.scaleBurst, opacity : 0, position : cc.Vec2.ZERO})
            .by(0.7,{scale : this.scaleBurst, opacity : -100, position : cc.Vec2.ZERO})
            .by(1,{scale : this.scaleBurst, opacity : -255, position : cc.Vec2.ZERO})
            .call(()=>{
                this.node.destroy();
            })
            .start()
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'Main Bullet') {
            if(--this.hp < 1){
                this.dieMovement();
            }
        }
    }
});
