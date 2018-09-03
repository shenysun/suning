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
var TopicFour = (function (_super) {
    __extends(TopicFour, _super);
    function TopicFour() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    TopicFour.prototype.init = function () {
        this.createBG();
        this.createQuest();
        this.createIcon();
        this.createAns();
    };
    TopicFour.prototype.createBG = function () {
        var BG = GameConst.getBitmapByName("bg_4_jpg");
        this.addChild(BG);
        var bg_4_bottom = GameConst.getBitmapByNameAndSetPos("bg_4_bottom_png", "page2_4_json", GameConst.stageW / 2 + 100, GameConst.stageH - 350);
        this.addChild(bg_4_bottom);
    };
    /**生成问题和附近的光特效 */
    TopicFour.prototype.createQuest = function () {
        var p2_4_title = GameConst.getBitmapByNameAndSetPos("p2_4_title_png", "page2_4_json", GameConst.stageW / 2, 200);
        this.addChild(p2_4_title);
        var t_g_1 = GameConst.getBitmapByNameAndSetPos("t_g_1_png", "page2_1_json", GameConst.stageW / 2 - p2_4_title.width / 2 - 20, 200);
        var t_g_3 = GameConst.getBitmapByNameAndSetPos("t_g_3_png", "page2_1_json", GameConst.stageW / 2 + p2_4_title.width / 2, 200);
        var t_g_2 = GameConst.getBitmapByNameAndSetPos("t_g_2_png", "page2_1_json", GameConst.stageW / 2, 200 - p2_4_title.height / 2);
        var t_g_4 = GameConst.getBitmapByNameAndSetPos("t_g_4_png", "page2_1_json", GameConst.stageW / 2, 200 + p2_4_title.height / 2 + 20);
        t_g_1.y = -200;
        t_g_3.y = 450;
        t_g_2.x = -300;
        t_g_4.x = GameConst.stageW + 300;
        this.addChild(t_g_1);
        this.addChild(t_g_2);
        this.addChild(t_g_3);
        this.addChild(t_g_4);
        GameConst.starAlpha(t_g_1, false, true, GameConst.stageW / 2 - p2_4_title.width / 2 - 20, 200);
        GameConst.starAlpha(t_g_2, false, true, GameConst.stageW / 2, 200 - p2_4_title.height / 2);
        GameConst.starAlpha(t_g_3, true, true, GameConst.stageW / 2 + p2_4_title.width / 2, 200);
        GameConst.starAlpha(t_g_4, true, true, GameConst.stageW / 2, 200 + p2_4_title.height / 2 + 20);
    };
    /**生成icon */
    TopicFour.prototype.createIcon = function () {
        var p2_4_icon = GameConst.getBitmapByNameAndSetPos("p2_4_icon_png", "page2_4_json", GameConst.stageW / 2 - 50, GameConst.stageH / 2 + 100);
        p2_4_icon.alpha = 0;
        this.addChild(p2_4_icon);
        var p2_4_icon_change = GameConst.getBitmapByNameAndSetPos("p2_4_icon_png", "page2_4_json", GameConst.stageW / 2 - 50, GameConst.stageH / 2 + 100);
        this.addChild(p2_4_icon_change);
        //light
        var p2_4_icon_light = GameConst.getBitmapByNameAndSetPos("p2_4_icon_light_png", "page2_4_json", GameConst.stageW / 2 - 50, GameConst.stageH / 2 + 100);
        this.addChild(p2_4_icon_light);
        GameConst.starAlpha(p2_4_icon_light, false, false);
        this.iconTween(p2_4_icon);
        this.iconTween(p2_4_icon_light);
        var self = this;
        var hei = p2_4_icon_change.y;
        //加遮罩
        egret.startTick(function () {
            hei -= 10;
            if (hei <= 0) {
                hei = p2_4_icon_change.y;
            }
            mask(hei);
            return true;
        }, this);
        function mask(heiY) {
            var shape = new egret.Shape;
            shape.graphics.clear();
            shape.graphics.beginFill(0xff0000);
            shape.graphics.drawRect(GameConst.stageW / 2 - 50 - p2_4_icon_change.width / 2, heiY + p2_4_icon_change.height / 2, p2_4_icon_change.width, p2_4_icon_change.height / 5);
            shape.graphics.endFill();
            self.addChild(shape);
            p2_4_icon_change.mask = shape;
        }
    };
    /**奖杯的Tween动画 */
    TopicFour.prototype.iconTween = function (result) {
        var tw_p2_4_icon = egret.Tween.get(result);
        tw_p2_4_icon.to({ alpha: 1, scaleX: 1, scaleY: 1 }, 1000);
        setTimeout(function () {
            var tw_icon = egret.Tween.get(result, { loop: true });
            tw_icon.to({ y: GameConst.stageH / 2 + 110 }, 500).to({ y: GameConst.stageH / 2 + 100 }, 500);
        }, 1000);
    };
    /**生成答案框 */
    TopicFour.prototype.createAns = function () {
        //A
        var p2_4_text1_frame1 = GameConst.getBitmapByNameAndSetPos("p2_4_text1_frame1_png", "page2_4_json", GameConst.stageW / 2 + 10, GameConst.stageH / 2 - 20);
        this.addChild(p2_4_text1_frame1);
        this.p2_4_text1 = GameConst.getBitmapByNameAndSetPos("p2_4_text1_png", "page2_4_json", GameConst.stageW / 2 + 110, GameConst.stageH / 2 - 50);
        this.addChild(this.p2_4_text1);
        //B
        var p2_4_text1_frame2 = GameConst.getBitmapByNameAndSetPos("p2_4_text2_frame1_png", "page2_4_json", GameConst.stageW / 2 + 60, GameConst.stageH / 2 + 80);
        this.addChild(p2_4_text1_frame2);
        this.p2_4_text2 = GameConst.getBitmapByNameAndSetPos("p2_4_text2_png", "page2_4_json", GameConst.stageW / 2 + 200, GameConst.stageH / 2 + 60);
        this.addChild(this.p2_4_text2);
        //C
        var p2_4_text3_frame1 = GameConst.getBitmapByNameAndSetPos("p2_4_text3_frame1_png", "page2_4_json", GameConst.stageW / 2 + 20, GameConst.stageH / 2 + 190);
        this.addChild(p2_4_text3_frame1);
        this.p2_4_text3 = GameConst.getBitmapByNameAndSetPos("p2_4_text3_png", "page2_4_json", GameConst.stageW / 2 + 150, GameConst.stageH / 2 + 170);
        this.addChild(this.p2_4_text3);
        //所有答案的数组
        var ansArr = [];
        ansArr.push(this.p2_4_text1, this.p2_4_text2, this.p2_4_text3);
        for (var i = 0; i < ansArr.length; i++) {
            ansArr[i].touchEnabled = true;
            ansArr[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAnsClick, this);
        }
    };
    TopicFour.prototype.onAnsClick = function () {
        console.log("下一页");
        GameConst.stage.removeChild(this);
        GameConst.stage.addChild(new TopicFive());
    };
    return TopicFour;
}(egret.DisplayObjectContainer));
__reflect(TopicFour.prototype, "TopicFour");
