var SingleTon = cc.Class({
    statics : {_instance : null},
    
    ctor(){
        this.bulletPool = null;
    }
});

SingleTon._instance = new SingleTon();
module.exports = SingleTon;