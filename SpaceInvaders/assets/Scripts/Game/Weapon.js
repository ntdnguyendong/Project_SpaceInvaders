let _singleton = require('SingleTon')
cc.Class({
  extends: cc.Component,

  properties: {
    bullet: {
      default: null,
      type: cc.Prefab,
    },
    interval: 0.2,
  },

  onEnable() {
    this.schedule(this.fire, this.interval);
  },

  onDisable() {
    this.unschedule(this.fire);
  },

  fire() {
    let bulletPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    _singleton._instance.bulletPool.add(this.bullet, bulletPos);
  },

});
