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
    this.schedule(this.spawnEnemyNormal, this.interval);
  },

  onDisable() {
    this.unschedule(this.spawnEnemyNormal);
  },

  start() {},

  // update (dt) {},

  spawnEnemyNormal() {
    let screen = cc.Canvas.instance.node.getContentSize();
    let enemy = cc.instantiate(this.enemy[0]);
    let enemy_1 = cc.instantiate(this.enemy[1])
    enemy.active = true;
    enemy.parent = this.node;
    enemy.position = cc.v2(this.node.position.x, screen.height)
    enemy_1.active = true;
    enemy_1.parent = this.node;
    enemy_1.position = cc.v2(this.node.position.x, screen.height)

    const RADIUS = 50;
    enemy.x = cc.misc.lerp(-screen.width / 2 + RADIUS, screen.width / 2 - RADIUS, Math.random());
    enemy_1.x = cc.misc.lerp(-screen.width / 2 + RADIUS, screen.width / 2 - RADIUS, Math.random());
  },
});
