cc.Class({
  extends: cc.Component,

  properties: {
    soundGame: {
      default: null,
      type: cc.AudioClip,
    },
   
  },

  onLoad() {
    let manager = cc.director.getCollisionManager();
    manager.enabled = true;
    cc.audioEngine.playEffect(this.soundGame, false);
  },
});
