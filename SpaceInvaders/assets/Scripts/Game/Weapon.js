let _singleton = require('SingleTon')
cc.Class({
  extends: cc.Component,

  properties: {
    _posMouse: cc.v2,
    bullet: {
      default: null,
      type: cc.Prefab,
    },
    interval: 0.2,
  },

  onLoad() { },

  start() { },

  // update (dt) {},

  onEnable() {
    this.schedule(this.fire, this.interval);
  },

  onDisable() {
    this.unschedule(this.fire);
  },

  createBullet() {
    let bulletPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    _singleton._instance.bulletPool.add(this.bullet, bulletPos);
  },

});
