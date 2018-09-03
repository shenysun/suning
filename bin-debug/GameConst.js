var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConst = (function () {
    function GameConst() {
    }
    /**通过名字获取纹理集图片资源 */
    GameConst.getBitmapFromSheet = function (name, sheetName) {
        var result = new egret.Bitmap(RES.getRes(sheetName + "." + name));
        return result;
    };
    /**通过名字获取位图 */
    GameConst.getBitmapByName = function (name) {
        var result = new egret.Bitmap(RES.getRes(name));
        return result;
    };
    /**通过名字获取位图 */
    GameConst.getTextureByName = function (name) {
        var result = RES.getRes(name);
        return result;
    };
    /**通过名字获取纹理集精灵*/
    GameConst.getTextureFromSheet = function (name, sheetName) {
        var result = RES.getRes(sheetName + "." + name);
        return result;
    };
    /**通过名字获取图片并设置锚点和设置位置 */
    GameConst.getBitmapByNameAndSetPos = function (name, sheetName, posX, posY) {
        var result = new egret.Bitmap(RES.getRes(sheetName + "." + name));
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        result.x = posX;
        result.y = posY;
        return result;
    };
    /**问题或者答案附近灯光闪烁
     * @param result 对象
     * @param isChangePos 是否改变位置
     * @param posX 结束x
     * @param posY 结束y
     * @param isLight 是否先亮后暗
    */
    GameConst.starAlpha = function (result, isLight, isChangePos, posX, posY) {
        if (isChangePos) {
            var tw_pos = egret.Tween.get(result);
            tw_pos.wait(500).to({ x: posX, y: posY }, 1000);
        }
        setTimeout(function () {
            var tw = egret.Tween.get(result, { loop: true });
            if (isLight) {
                result.alpha = 0.5;
                tw.to({ alpha: 1 }, 500).to({ alpha: 0.5 }, 500);
            }
            else {
                tw.to({ alpha: 0.5 }, 500).to({ alpha: 1 }, 500);
            }
        }, 1200);
    };
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
