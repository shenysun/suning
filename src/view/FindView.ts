class FindView extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}
	private BG: egret.Bitmap
	private p3_jq: egret.Bitmap;
	private init() {
		this.createBG();
		
		// this.createDNA();
		this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
		this.createLunPao();
		this.createBottom();
	}
	private frameTest: number = 0;
	private frameTest_1: number = 0;
	private enterFrame() {
		this.frameTest ++;
		this.frameTest_1 ++;
		if(this.frameTest >= 80) {
			this.frameTest = 0;
			this.createDNA();
		}
		if(this.frameTest_1 >= 50) {
			this.frameTest_1 = 0;
			this.quanRotation();
		}
		
	}

	private createBG() {
		this.BG = GameConst.getBitmapByName( "p3_bg_jpg");
		this.BG.anchorOffsetX = this.BG.width / 2;
		this.BG.anchorOffsetY = this.BG.height / 2;
		this.BG.x = this.BG.width / 2;
		this.BG.y = this.BG.height / 2;
		this.addChild(this.BG);
		//find
		let p3_txt2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_txt2_png", "page_6_json", GameConst.stageW / 2, 150);
		this.addChild(p3_txt2);
		//打开
		let p3_txt3: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_txt3_png", "page_6_json", GameConst.stageW / 2, 300);
		this.addChild(p3_txt3);
		//背景遮罩
		let p3_guan1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_guan1_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 + 250);
		this.addChild(p3_guan1);
		//机器
		this.p3_jq = GameConst.getBitmapByNameAndSetPos( "p3_jq_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 - 50);
		this.addChild(this.p3_jq);
		//开始揭秘
		let p3_txt1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_txt1_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 + 270);
		this.addChild(p3_txt1);
		console.log(p3_txt1);
		
	}
	private createDNA() {
		//DNA
		let map :egret.Bitmap = new egret.Bitmap;
		let self = this;
		for(let i: number = 0; i < 26; i++) {
			setTimeout(function() {
				map = GameConst.getBitmapByNameAndSetPos( `dna1_${i}_png`, "page_6_json", GameConst.stageW / 2, GameConst.stageH / 2 - 40);
				self.addChild(map);
			}, 50 * i);
			// this.removeChild(dna);
		}
	}

	private createLunPao() {
		let p3_lun: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_lun_png", "page_6_json", GameConst.stageW / 2 - 200, GameConst.stageH / 2 - 150);
		this.addChild(p3_lun);
		let tw = egret.Tween.get(p3_lun, {loop: true});
		tw.to( {rotation: 360}, 1000);
		//气泡
		for(let i: number = 0; i < 30; i++) {
			let p3_len: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_len_png", "page_6_json", GameConst.stageW / 2 - 150 + Math.random() * 3, GameConst.stageH / 2 - 180 + Math.random() * 3);
			this.addChild(p3_len);

			let tw_pao = egret.Tween.get(p3_len, {loop: true});
			tw_pao.to( {alpha: 0, x: p3_len.x - 30, y: p3_len.y - 80}, 600);
		}

		//气泡
		for(let i: number = 0; i < 30; i++) {
			let p3_len: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_len_png", "page_6_json", GameConst.stageW / 2 - 150 + Math.random() * 4, GameConst.stageH / 2 - 180 + Math.random() * 4);
			this.addChild(p3_len);

			let tw_pao = egret.Tween.get(p3_len, {loop: true});
			tw_pao.to( {alpha: 0, x: p3_len.x - 40, y: p3_len.y - 70}, 800);
		}
		
		//气泡
		for(let i: number = 0; i < 30; i++) {
			let p3_len: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_len_png", "page_6_json", GameConst.stageW / 2 - 150 + Math.random() * 4, GameConst.stageH / 2 - 180 + Math.random() * 4);
			this.addChild(p3_len);

			let tw_pao = egret.Tween.get(p3_len, {loop: true});
			tw_pao.to( {alpha: 0, x: p3_len.x - 50, y: p3_len.y - 90}, 1000);
		}
		
	}

	/**生成下面的 */
	private createBottom() {
		let p3_bottom_png: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_bottom_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH - 150);
		this.addChild(p3_bottom_png);
		//quan
		let p3_quan: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p3_quan_png", "page_6_json", GameConst.stageW / 2, GameConst.stageH - 150);
		this.addChild(p3_quan);
		let tw_p3_quan = egret.Tween.get( p3_quan, {loop: true});
		tw_p3_quan.to( {rotation: p3_quan.rotation + 90, scaleX: 1.1, scaleY: 1.1}, 700).to( {scaleX: 1, scaleY: 1}, 700)

		p3_quan.touchEnabled = true;
		p3_quan.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.click, this);
		
	}

	private click() {
		console.log("下一页");
		let tw_bg = egret.Tween.get(this.BG);
		tw_bg.to( {scaleX: 1.3, scaleY: 1.3}, 500);

		let tw = egret.Tween.get(this.p3_jq);
		tw.to( {scaleX: 1.3, scaleY: 1.3}, 500);
	}


	private quanRotation() {
		//旋转
		let self = this;
		let circle: egret.Bitmap = new egret.Bitmap();
		this.addChild(circle);
		for( let i: number = 0; i <= 14; i ++) {
			setTimeout(function() {
				circle.texture = GameConst.getTextureFromSheet(  `circle1_${i}_png`, "page_6_json");
				circle.anchorOffsetX = circle.width / 2;
				circle.anchorOffsetY = circle.height / 2;
				circle.x = GameConst.stageW / 2;
				circle.y = GameConst.stageH - 150;
		    }, 50 * i);
		}
		
	}
}