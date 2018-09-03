class GameConst {
	/**舞台宽度 */
	public static stageW:number;
	/**舞台高度 */
	public static stageH:number;
	/**舞台 */
	public static stage;
	/**通过名字获取纹理集图片资源 */
	public static getBitmapFromSheet(name:string, sheetName:string):egret.Bitmap {
		let result:egret.Bitmap = new egret.Bitmap(RES.getRes(`${sheetName}.${name}`));
		return result;
	}
	/**通过名字获取位图 */
	public static getBitmapByName(name:string): egret.Bitmap {
		let result:egret.Bitmap = new egret.Bitmap(RES.getRes(name));
		return result;
	}
	/**通过名字获取位图 */
	public static getTextureByName(name:string): egret.Texture {
		let result:egret.Texture = RES.getRes(name);
		return result;
	}
	/**通过名字获取纹理集精灵*/
	public static getTextureFromSheet(name:string, sheetName:string): egret.Texture {
		let result:egret.Texture = RES.getRes(`${sheetName}.${name}`);
		return result;
	}
	/**通过名字获取图片并设置锚点和设置位置 */
	public static getBitmapByNameAndSetPos(name:string, sheetName:string, posX:number, posY:number) {
		let result:egret.Bitmap = new egret.Bitmap(RES.getRes(`${sheetName}.${name}`));
		result.anchorOffsetX = result.width / 2;
		result.anchorOffsetY = result.height / 2;
		result.x = posX;
		result.y = posY;
		
		return result;
	}

	/**问题或者答案附近灯光闪烁 
	 * @param result 对象
	 * @param isChangePos 是否改变位置
	 * @param posX 结束x
	 * @param posY 结束y
	 * @param isLight 是否先亮后暗
	*/
	public static starAlpha(result: egret.Bitmap, isLight: boolean, isChangePos: boolean, posX?: number, posY?: number, ) {

		if(isChangePos) {
			let tw_pos = egret.Tween.get(result);
			tw_pos.wait(500).to( {x: posX, y: posY}, 1000);
		}
		setTimeout(function() {
			let tw = egret.Tween.get( result, {loop: true});
			if (isLight) {
				result.alpha = 0.5;
				tw.to( { alpha: 1}, 500).to( {alpha: 0.5}, 500);
			}
			else {
				tw.to( { alpha: 0.5}, 500).to( { alpha: 1}, 500);
			}
		}, 1200);
		
	}

	
	
}