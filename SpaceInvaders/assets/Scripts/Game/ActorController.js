cc.Class({
    extends: cc.Component,

    properties: {
        maxHp :{
            default : 10,
            serializable : false,
        },
        hp :{
            default : 10,
            serializable : false,
        },
    },

    onLoad () {
        this.hp = this.maxHp;
        cc.log(this.hp)
    },

    start () {

    },

    // update (dt) {},
});
