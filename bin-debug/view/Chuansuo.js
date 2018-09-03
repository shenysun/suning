var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Chuansuo = (function (_super) {
    __extends(Chuansuo, _super);
    function Chuansuo() {
        var _this = _super.call(this) || this;
        _this.chuanArr = [];
        _this.init();
        return _this;
    }
    Chuansuo.prototype.init = function () {
        this.chuanMap = new egret.Bitmap();
        var _loop_1 = function (i) {
            var self_1 = this_1;
            this_1.chuanArr.push(GameConst.getTextureByName("chuansuo" + i + "_jpg"));
            setTimeout(function () {
                self_1.chuanMap.texture = self_1.chuanArr[i];
            }, 150 * i);
        };
        var this_1 = this;
        for (var i = 1; i <= 15; i++) {
            _loop_1(i);
        }
        this.chuanMap.width = GameConst.stageW;
        this.chuanMap.height = GameConst.stageH;
        this.addChild(this.chuanMap);
    };
    return Chuansuo;
}(egret.DisplayObjectContainer));
__reflect(Chuansuo.prototype, "Chuansuo");
