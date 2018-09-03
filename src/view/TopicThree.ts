class TopicThree extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}
	/**A */
	private p2_3_text1: egret.Bitmap;
	/**B */
	private p2_3_text2: egret.Bitmap;
	/**C */
	private p2_3_text3: egret.Bitmap;
	private init() {
		this.createBG();
		this.createQuest();
		this.createAnswer();

		this.createHead();
	}
	/**生成背景 */
	private createBG() {
		let BG: egret.Bitmap = GameConst.getBitmapByName( "bg_3_jpg");
		this.addChild(BG);
	}
	/**生成问题和附近的光特效 */
	private createQuest() {
		let p2_3_title:egret.Bitmap = GameConst.getBitmapByNameAndSetPos("p2_3_title_png", "page2_3_json", GameConst.stageW / 2, 200);
		this.addChild(p2_3_title);
		let t_g_1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_1_png", "page2_1_json", GameConst.stageW / 2 - p2_3_title.width / 2 - 20, 200);
		let t_g_3: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_3_png", "page2_1_json", GameConst.stageW / 2 + p2_3_title.width / 2, 200);
		let t_g_2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_2_png", "page2_1_json", GameConst.stageW / 2, 200 - p2_3_title.height / 2);
		let t_g_4: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_4_png", "page2_1_json", GameConst.stageW / 2, 200 + p2_3_title.height / 2 + 20);
		t_g_1.y = -200;
		t_g_3.y = 450;
		t_g_2.x = -300;
		t_g_4.x = GameConst.stageW + 300;
		this.addChild(t_g_1);
		this.addChild(t_g_2);
		this.addChild(t_g_3);
		this.addChild(t_g_4);
		GameConst.starAlpha(t_g_1, false, true, GameConst.stageW / 2 - p2_3_title.width / 2 - 20, 200);
		GameConst.starAlpha(t_g_2, false, true, GameConst.stageW / 2, 200 - p2_3_title.height / 2,);
		GameConst.starAlpha(t_g_3, true, true, GameConst.stageW / 2 + p2_3_title.width / 2, 200);
		GameConst.starAlpha(t_g_4, true, true, GameConst.stageW / 2, 200 + p2_3_title.height / 2 + 20,);
	}

	private createHead() {
		//人物
		let p2_3_prop_line: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_3_prop_line_png", "page2_3_json", GameConst.stageW / 2 - 30, GameConst.stageH / 2 + 50);
		this.addChild(p2_3_prop_line);
		p2_3_prop_line.alpha = 0;
		//人物碎片
		let p2_3_prop_light1 = GameConst.getBitmapByNameAndSetPos( "p2_3_prop_light1_png", "page2_3_json", GameConst.stageW / 2, GameConst.stageH / 2);
		this.addChild(p2_3_prop_light1);
		let p2_3_prop_light2 = GameConst.getBitmapByNameAndSetPos( "p2_3_prop_light2_png", "page2_3_json", GameConst.stageW / 2, GameConst.stageH / 2);
		this.addChild(p2_3_prop_light2);
		let p2_3_prop_light3 = GameConst.getBitmapByNameAndSetPos( "p2_3_prop_light3_png", "page2_3_json", GameConst.stageW / 2, GameConst.stageH / 2);
		this.addChild(p2_3_prop_light3);
		
		p2_3_prop_light1.alpha = 0;
		p2_3_prop_light1.scaleX = p2_3_prop_light1.scaleY = .5;
		p2_3_prop_light2.alpha = 0;
		p2_3_prop_light2.scaleX = p2_3_prop_light2.scaleY = .5;
		p2_3_prop_light3.alpha = 0;
		p2_3_prop_light3.scaleY = p2_3_prop_light3.scaleY = .5;
		// let map: egret.Bitmap = new egret.Bitmap();
		// let self = this;
		// for( let i:number = 0; i < 3; i++) {
		// 	setTimeout(function() {
		// 		map = GameConst.getBitmapByNameAndSetPos( `p2_3_prop_light${i + 1}_png`, "page2_3_json", GameConst.stageW / 2, GameConst.stageH / 2);
		// 		self.addChild(map);
		// 	}, 200 * i);
		// }
		this.changeScaleAlpha(p2_3_prop_light1, 800);
		this.changeScaleAlpha(p2_3_prop_light2, 900);
		this.changeScaleAlpha(p2_3_prop_light3, 1200);
		this.changeScaleAlpha(p2_3_prop_line, 1500);

		GameConst.starAlpha(p2_3_prop_light2, true, false);
	}

	private changeScaleAlpha(result: egret.Bitmap, delay: number) {
		let tw = egret.Tween.get(result);
		tw.to( {scaleX: 2, scaleY: 2, alpha: .5}, delay).to( {scaleX: 1, scaleY: 1, alpha: 1}, delay);

	}

	/**三个答案 */
	private createAnswer() {
		//A
		this.p2_3_text1 = GameConst.getBitmapByNameAndSetPos( "p2_3_text1_png", "page2_3_json", GameConst.stageW / 2 + 120, 360);
		this.addChild(this.p2_3_text1); 
		let p2_2_text1_frame1 :egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_3_text1_frame1_png", "page2_3_json", GameConst.stageW / 2 + 120 - this.p2_3_text1.width / 2, 380);
		this.addChild(p2_2_text1_frame1);
		//B
		this.p2_3_text2 = GameConst.getBitmapByNameAndSetPos( "p2_3_text2_png", "page2_3_json", GameConst.stageW / 2 - 150, 870);
		this.addChild(this.p2_3_text2);
		let p2_2_text2_frame1 :egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_3_text2_frame1_png", "page2_3_json", GameConst.stageW / 2 - 150 + this.p2_3_text2.width / 2, 850);
		this.addChild(p2_2_text2_frame1);
		//C
		this.p2_3_text3 = GameConst.getBitmapByNameAndSetPos( "p2_3_text3_png", "page2_3_json", GameConst.stageW / 2 + 180, 890);
		this.addChild(this.p2_3_text3);
		let p2_2_text3_frame1 :egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_3_text3_frame1_png", "page2_3_json", GameConst.stageW / 2 + 160 - this.p2_3_text3.width / 2, 860);
		this.addChild(p2_2_text3_frame1);

		GameConst.starAlpha(p2_2_text1_frame1, false, false);
		GameConst.starAlpha(p2_2_text2_frame1, true, false);
		GameConst.starAlpha(p2_2_text3_frame1, false, false);

		GameConst.starAlpha(this.p2_3_text1, false, false);
		GameConst.starAlpha(this.p2_3_text2, true, false);
		GameConst.starAlpha(this.p2_3_text3, false, false);

		//三个答案加进数组
		let Ansbtns: Array<egret.Bitmap> = [];
		Ansbtns.push(this.p2_3_text1, this.p2_3_text2, this.p2_3_text3);
		//遍历
		for (let i :number = 0; i < Ansbtns.length; i++) {
			Ansbtns[i].touchEnabled = true;
			Ansbtns[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAnsClick, this);
		}
	}

	private onAnsClick() {
		console.log("下一页");
		GameConst.stage.removeChild(this);
		GameConst.stage.addChild(new TopicFour());
	}
}