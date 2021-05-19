cc.Class({
  extends: cc.Component,

  properties: {
    enemy: {
      default: [],
      type: cc.Prefab,
    },
    _count: 0,
    interval: 1,
  },

  // onLoad () {},

  onEnable() {
    this.schedule(this.spawnEnemy, this.interval);
  },

  onDisable() {
    this.unschedule(this.spawnEnemy);
  },

  start() {},

  // update (dt) {},

  spawnEnemy() {
    let enemy = cc.instantiate(this.enemy[0]);
    enemy.active = true;
    enemy.parent = this.node;
    let screen = cc.Canvas.instance.node.getContentSize();

    const RADIUS = 50;
    enemy.x = cc.misc.lerp(-screen.width / 2 + RADIUS, screen.width / 2 - RADIUS, Math.random());
  },
});
