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
    }
});
