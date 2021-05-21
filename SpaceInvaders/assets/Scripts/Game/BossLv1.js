const Emitter = require("Emitter")
cc.Class({
    extends: require('EnemyController'),

    properties: {
       
    },

    // onLoad () {},

    start () {

    },

    update (dt) {
        this.bossMovement(dt);
    },

    bossMovement(dt){
        const RADIUS = 45;
        let deltaSpeed = this.speed.mul(dt);
        this.node.position = this.node.position.addSelf(deltaSpeed);

        let screenSize = cc.Canvas.instance.node.getContentSize();
        let right = screenSize.width >> 1;
        let left = -right;

        let posX = this.node.position.x;
        if ((posX - RADIUS) < left || ((posX + RADIUS)) > right) {
            this.speed.negSelf();
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'Main Bullet') {
            if(--this.hp < 1){
                Emitter.instance.emit("isBossDie");
                cc.audioEngine.playEffect(this.soundEneDie, false);
                this.node.destroy();
            }
        }
    }
});
