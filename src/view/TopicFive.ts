class TopicFive extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}
	/**A */
	private p2_5_text1: egret.Bitmap;
	/**B */
	private p2_5_text2: egret.Bitmap;
	/**C */
	private p2_5_text3: egret.Bitmap;
	private init() {
		this.createBG();
		this.createQuest();
		this.createMusic();
		this.createAns();
	}
	private createBG() {
		let BG: egret.Bitmap = GameConst.getBitmapByName( "bg_5_jpg");
		this.addChild(BG);
		let bg_5_bottom: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "bg_5_bottom_png", "page2_5_json", GameConst.stageW / 2 , GameConst.stageH / 2);
		this.addChild(bg_5_bottom);
	}
	/**生成问题和附近的光特效 */
	private createQuest() {
		let p2_5_title:egret.Bitmap = GameConst.getBitmapByNameAndSetPos("p2_5_title_png", "page2_5_json", GameConst.stageW / 2, 200);
		this.addChild(p2_5_title);
		let t_g_1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_1_png", "page2_1_json", GameConst.stageW / 2 - p2_5_title.width / 2 - 20, 200);
		let t_g_3: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_3_png", "page2_1_json", GameConst.stageW / 2 + p2_5_title.width / 2, 200);
		let t_g_2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_2_png", "page2_1_json", GameConst.stageW / 2, 200 - p2_5_title.height / 2);
		let t_g_4: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_4_png", "page2_1_json", GameConst.stageW / 2, 200 + p2_5_title.height / 2 + 20);
		t_g_1.y = -200;
		t_g_3.y = 450;
		t_g_2.x = -300;
		t_g_4.x = GameConst.stageW + 300;
		this.addChild(t_g_1);
		this.addChild(t_g_2);
		this.addChild(t_g_3);
		this.addChild(t_g_4);
		GameConst.starAlpha(t_g_1, false, true, GameConst.stageW / 2 - p2_5_title.width / 2 - 20, 200);
		GameConst.starAlpha(t_g_2, false, true, GameConst.stageW / 2, 200 - p2_5_title.height / 2,);
		GameConst.starAlpha(t_g_3, true, true, GameConst.stageW / 2 + p2_5_title.width / 2, 200);
		GameConst.starAlpha(t_g_4, true, true, GameConst.stageW / 2, 200 + p2_5_title.height / 2 + 20,);
	}

	/**生成答案框 */
	private createAns() {
		//A
		let p2_4_text1_frame1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_5_text1_frame1_png", "page2_5_json", GameConst.stageW / 2, GameConst.stageH / 2 - 180);
		this.addChild(p2_4_text1_frame1);
		this.p2_5_text1 = GameConst.getBitmapByNameAndSetPos( "p2_5_text1_png", "page2_5_json", GameConst.stageW / 2 - 110, GameConst.stageH / 2 - 200);
		this.addChild(this.p2_5_text1);
		//B
		let p2_4_text1_frame2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_5_text2_frame1_png", "page2_5_json", GameConst.stageW / 2 - 50, GameConst.stageH / 2 + 20);
		this.addChild(p2_4_text1_frame2);
		this.p2_5_text2 = GameConst.getBitmapByNameAndSetPos( "p2_5_text2_png", "page2_5_json", GameConst.stageW / 2 - 160, GameConst.stageH / 2);
		this.addChild(this.p2_5_text2);
		//C
		let p2_4_text3_frame1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_5_text3_frame1_png", "page2_5_json", GameConst.stageW / 2 + 20, GameConst.stageH / 2 + 210);
		this.addChild(p2_4_text3_frame1);
		this.p2_5_text3 = GameConst.getBitmapByNameAndSetPos( "p2_5_text3_png", "page2_5_json", GameConst.stageW / 2 + 150, GameConst.stageH / 2 + 190);
		this.addChild(this.p2_5_text3);

		//所有答案的数组
		let ansArr: Array<egret.Bitmap> = [];
		ansArr.push (this.p2_5_text1, this.p2_5_text2, this.p2_5_text3);
		for( let i:number = 0; i < ansArr.length; i++) {
			ansArr[i].touchEnabled = true;
			ansArr[i].addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.onAnsClick, this);
		}
	}
	/**生成音乐 */
	private createMusic() {
		let p2_5_prop: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_5_prop_png", "page2_5_json", GameConst.stageW / 2, GameConst.stageH / 2);
		this.addChild(p2_5_prop);
		let tw_prop = egret.Tween.get(p2_5_prop, {loop: true});
		tw_prop.to( {y: GameConst.stageH / 2 + 10}, 1000).to( {y: GameConst.stageH / 2}, 1000);
	}

	private onAnsClick() {
		console.log("下一页");
		GameConst.stage.removeChild(this);
		GameConst.stage.addChild(new FindView());
	}
}