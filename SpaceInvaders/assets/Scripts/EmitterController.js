
cc.Class({
    extends: cc.Component,
    onLoad () {
        Emitter.instance = new Emitter();
    },
});
