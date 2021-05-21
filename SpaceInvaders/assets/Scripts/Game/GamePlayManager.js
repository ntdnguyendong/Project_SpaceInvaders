const Emitter = require("Emitter")
cc.Class({
  extends: cc.Component,

  properties: {
    soundGame: {
      default: null,
      type: cc.AudioClip,
    },
    soundLose: {
      default: null,
      type: cc.AudioClip,
    },
    gameLayout : cc.Node,
    loseLayout : cc.Node,
    winLayout : cc.Node,
    
    _isWin : true,
  },

  onLoad() {
    Emitter.instance = new Emitter();
    
    Emitter.instance.registerEvent("returnHome", this.returnHome.bind(this))
    Emitter.instance.registerEvent("isDie", this.isDie.bind(this))
    Emitter.instance.registerEvent("isBossDie", this.isBossDie.bind(this))
    
    let managerCollision = cc.director.getCollisionManager();
    managerCollision.enabled = true;
    if(this._isWin) cc.audioEngine.playEffect(this.soundGame, false);
  },

  returnHome(){
    cc.director.loadScene("MenuScene");
  },

  isDie(){
    this._isWin = false;
    cc.log(this._isWin);
    cc.audioEngine.playEffect(this.soundLose, false);
    this.gameLayout.active = false;
    this.loseLayout.active = true;
  },

  isBossDie(){
    this.gameLayout.active = false;
    this.winLayout.active = true;
  }

});
