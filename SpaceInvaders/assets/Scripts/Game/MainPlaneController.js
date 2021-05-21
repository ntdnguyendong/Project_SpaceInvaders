const Emitter = require("Emitter")

cc.Class({
    extends: require('ActorController'),
    
    properties: {
        bulletMain: {
            default : null,
            type : cc.Node,
        },
        spriteDie : {
            default : null,
            type : cc.SpriteFrame,
        },
    },

    onLoad() {
        cc.Canvas.instance.node.on("mousemove", this.getPositionMouse, this);
    },

    start() { },

    update(dt) {
        this.planeMovement();
        cc.log(this.hp);
    },

    getPositionMouse(event) {
        this._posMouse = event.getLocation();
    },

    planeMovement() {
        let screenSize = cc.Canvas.instance.node.getContentSize();
        if (this._posMouse != null) {
            this.node.position = cc.v2(
                this._posMouse.x - screenSize.width / 2,
                this._posMouse.y - screenSize.height / 2
            );
        }
    },

    dieMovement(){
        cc.Canvas.instance.node.off("mousemove", this.getPositionMouse, this);
        Emitter.instance.emit("isDie");
        this.node.children[1].active = false;
        cc.audioEngine.playEffect(this.soundEneDie, false);
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteDie;
        cc.tween(this.node)
                .by(1,{scale : 1, opacity : 0})
                .by(1.5,{scale : 1.5, opacity : -100})
                .by(2,{scale : 2, opacity : -255})
                .call(()=>{
                    this.node.destroy();
                    cc.log(this.node.opacity)
                })
                .start()
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'Enemies' || other.node.group === 'Enemy Bullet') {
            if(--this.hp < 1){
              this.dieMovement();
            }
        }
    }
});
