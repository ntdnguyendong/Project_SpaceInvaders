cc.Class({
    extends: require('ActorController'),
    
    properties: {
        bulletMain: {
            default : null,
            type : cc.Node,
        }
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

    onCollisionEnter(other, self) {
        if (other.node.group === 'Enemies' || other.node.group === 'Enemy Bullet') {
            if(--this.hp < 1){
                cc.audioEngine.playEffect(this.soundEneDie, false);
                this.node.destroy();
            }
        }
    }
});
