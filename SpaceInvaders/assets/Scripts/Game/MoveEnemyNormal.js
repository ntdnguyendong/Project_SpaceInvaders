cc.Class({
  extends: cc.Component,

  properties: {
    speed : cc.Vec2.ZERO,
  },

  start() {},

  update(dt) {
    let currentPos = this.node.position;
    let deltaSpeed = this.speed.mul(dt);
    currentPos.add(deltaSpeed);
  },

});
