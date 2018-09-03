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
var Photo = (function (_super) {
    __extends(Photo, _super);
    function Photo() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Photo.prototype.init = function () {
        egret.log("kacha111");
        var bg = new egret.Bitmap(RES.getRes("bg1_jpg"));
        this.addChild(bg);
        bg.touchEnabled = true;
        // bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doSelect, this);
        bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            var eg = document.getElementById("egret");
            var img = document.createElement("input");
            img.type = "file";
            img.accept = "image/*";
            eg.appendChild(img);
            img.click();
        }, this);
        var p2_4_title = GameConst.getBitmapByNameAndSetPos("p2_4_title_png", "page2_4_json", GameConst.stageW / 2, GameConst.stageH / 2);
        this.addChild(p2_4_title);
        p2_4_title.touchEnabled = true;
        p2_4_title.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doSelect, this);
    };
    Photo.prototype.doSelect = function (evt) {
        egret.log("kacha");
        selectImage(this.selectedHandler, this);
    };
    Photo.prototype.selectedHandler = function (thisRef, imgURL) {
        RES.getResByUrl(imgURL, thisRef.compFunc, thisRef, RES.ResourceItem.TYPE_IMAGE);
    };
    Photo.prototype.compFunc = function (texture) {
        var imgReview = new egret.Bitmap(texture);
        imgReview.width = 300;
        imgReview.height = 300;
        this.addChild(imgReview);
    };
    return Photo;
}(egret.DisplayObjectContainer));
__reflect(Photo.prototype, "Photo");
