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

  onLoad() {},

  start() {},

  // update (dt) {},

  createBullet() {},
  
});
