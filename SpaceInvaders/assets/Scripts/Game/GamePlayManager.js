const Emitter = require("Emitter")
cc.Class({
  extends: cc.Component,

  properties: {
    soundGame: {
      default: null,
      type: cc.AudioClip,
    },
    gameLayout : cc.Node,
    loseLayout : cc.Node,
  },

  onLoad() {
    Emitter.instance = new Emitter();
    
    Emitter.instance.registerEvent("returnHome", this.returnHome.bind(this))
    Emitter.instance.registerEvent("isDie", this.isDie.bind(this))
    Emitter.instance.registerEvent("isBossDie", this.isBossDie.bind(this))
    
    let managerCollision = cc.director.getCollisionManager();
    managerCollision.enabled = true;
    
    cc.audioEngine.playEffect(this.soundGame, false);
  },

  returnHome(){
    cc.director.loadScene("MenuScene");
  },

  isDie(){
    this.gameLayout.active = false;
    this.loseLayout.active = true;
  },

  isBossDie(){
    this.gameLayout.active = false;
    this.loseLayout.active = true;
  }

});
