class Chuansuo extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}

	private chuanMap: egret.Bitmap;
	private chuanArr: Array<egret.Texture> = [];
	private init() {
		this.chuanMap = new egret.Bitmap();
		for(let i:number = 1; i <= 15; i ++) {
			let self = this;
			this.chuanArr.push(GameConst.getTextureByName(`chuansuo${i}_jpg`));
			setTimeout(function() {
				self.chuanMap.texture = self.chuanArr[i];
			}, 150 * i);
		}
		this.chuanMap.width = GameConst.stageW;
		this.chuanMap.height = GameConst.stageH;
		this.addChild(this.chuanMap);
	}
}