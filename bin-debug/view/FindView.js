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
var FindView = (function (_super) {
    __extends(FindView, _super);
    function FindView() {
        var _this = _super.call(this) || this;
        _this.frameTest = 0;
        _this.frameTest_1 = 0;
        _this.init();
        return _this;
    }
    FindView.prototype.init = function () {
        this.createBG();
        // this.createDNA();
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        this.createLunPao();
        this.createBottom();
    };
    FindView.prototype.enterFrame = function () {
        this.frameTest++;
        this.frameTest_1++;
        if (this.frameTest >= 80) {
            this.frameTest = 0;
            this.createDNA();
        }
        if (this.frameTest_1 >= 50) {
            this.frameTest_1 = 0;
            this.quanRotation();
        }
    };
    FindView.prototype.createBG = function () {
        this.BG = GameConst.getBitmapByName("p3_bg_jpg");
        this.BG.anchorOffsetX = this.BG.width / 2;
        this.BG.anchorOffsetY = this.BG.height / 2;
        this.BG.x = this.BG.width / 2;
        this.BG.y = this.BG.height / 2;
        this.addChild(this.BG);
        //find
        var p3_txt2 = GameConst.getBitmapByNameAndSetPos("p3_txt2_png", "page_6_json", GameConst.stageW / 2, 150);
        this.addChild(p3_txt2);
        //打开
        var p3_txt3 = GameConst.getBitmapByNameAndSetPos("p3_txt3_png", "page_6_json", GameConst.stageW / 2, 300);
        this.addChild(p3_txt3);
        //背景遮罩
        var p3_guan1 = GameConst.getBitmapByNameAndSetPos("p3_guan1_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 + 250);
        this.addChild(p3_guan1);
        //机器
        this.p3_jq = GameConst.getBitmapByNameAndSetPos("p3_jq_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 - 50);
        this.addChild(this.p3_jq);
        //开始揭秘
        var p3_txt1 = GameConst.getBitmapByNameAndSetPos("p3_txt1_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 + 270);
        this.addChild(p3_txt1);
        console.log(p3_txt1);
    };
    FindView.prototype.createDNA = function () {
        //DNA
        var map = new egret.Bitmap;
        var self = this;
        var _loop_1 = function (i) {
            setTimeout(function () {
                map = GameConst.getBitmapByNameAndSetPos("dna1_" + i + "_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 - 40);
                self.addChild(map);
            }, 50 * i);
            // this.removeChild(dna);
        };
        for (var i = 0; i < 26; i++) {
            _loop_1(i);
        }
    };
    FindView.prototype.createLunPao = function () {
        var p3_lun = GameConst.getBitmapByNameAndSetPos("p3_lun_png", "page_6_json", GameConst.stageW / 2 - 200, GameConst.stageH / 2 - 150);
        this.addChild(p3_lun);
        var tw = egret.Tween.get(p3_lun, { loop: true });
        tw.to({ rotation: 360 }, 1000);
        //气泡
        for (var i = 0; i < 30; i++) {
            var p3_len = GameConst.getBitmapByNameAndSetPos("p3_len_png", "page_6_json", GameConst.stageW / 2 - 150 + Math.random() * 3, GameConst.stageH / 2 - 180 + Math.random() * 3);
            this.addChild(p3_len);
            var tw_pao = egret.Tween.get(p3_len, { loop: true });
            tw_pao.to({ alpha: 0, x: p3_len.x - 30, y: p3_len.y - 80 }, 600);
        }
        //气泡
        for (var i = 0; i < 30; i++) {
            var p3_len = GameConst.getBitmapByNameAndSetPos("p3_len_png", "page_6_json", GameConst.stageW / 2 - 150 + Math.random() * 4, GameConst.stageH / 2 - 180 + Math.random() * 4);
            this.addChild(p3_len);
            var tw_pao = egret.Tween.get(p3_len, { loop: true });
            tw_pao.to({ alpha: 0, x: p3_len.x - 40, y: p3_len.y - 70 }, 800);
        }
        //气泡
        for (var i = 0; i < 30; i++) {
            var p3_len = GameConst.getBitmapByNameAndSetPos("p3_len_png", "page_6_json", GameConst.stageW / 2 - 150 + Math.random() * 4, GameConst.stageH / 2 - 180 + Math.random() * 4);
            this.addChild(p3_len);
            var tw_pao = egret.Tween.get(p3_len, { loop: true });
            tw_pao.to({ alpha: 0, x: p3_len.x - 50, y: p3_len.y - 90 }, 1000);
        }
    };
    /**生成下面的 */
    FindView.prototype.createBottom = function () {
        var p3_bottom_png = GameConst.getBitmapByNameAndSetPos("p3_bottom_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH - 150);
        this.addChild(p3_bottom_png);
        //quan
        var p3_quan = GameConst.getBitmapByNameAndSetPos("p3_quan_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH - 150);
        this.addChild(p3_quan);
        var tw_p3_quan = egret.Tween.get(p3_quan, { loop: true });
        tw_p3_quan.to({ rotation: p3_quan.rotation + 90, scaleX: 1.1, scaleY: 1.1 }, 700).to({ scaleX: 1, scaleY: 1 }, 700);
        p3_quan.touchEnabled = true;
        p3_quan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
    };
    FindView.prototype.click = function () {
        console.log("下一页");
        var tw_bg = egret.Tween.get(this.BG);
        tw_bg.to({ scaleX: 1.3, scaleY: 1.3 }, 500);
        var tw = egret.Tween.get(this.p3_jq);
        tw.to({ scaleX: 1.3, scaleY: 1.3 }, 500);
    };
    FindView.prototype.quanRotation = function () {
        //旋转
        var self = this;
        var circle = new egret.Bitmap();
        this.addChild(circle);
        var _loop_2 = function (i) {
            setTimeout(function () {
                circle.texture = GameConst.getTextureFromSheet("circle1_" + i + "_png", "page_6_json");
                circle.anchorOffsetX = circle.width / 2;
                circle.anchorOffsetY = circle.height / 2;
                circle.x = GameConst.stageW / 2;
                circle.y = GameConst.stageH - 150;
            }, 50 * i);
        };
        for (var i = 0; i <= 14; i++) {
            _loop_2(i);
        }
    };
    return FindView;
}(egret.DisplayObjectContainer));
__reflect(FindView.prototype, "FindView");
