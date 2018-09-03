class TopicOne extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}
	/**答案A */
	private p2_2_text1: egret.Bitmap;
	/**B */ 
	private p2_2_text2: egret.Bitmap;
	/**C */
	private p2_2_text3: egret.Bitmap;
	/**背景 */
	private init() {
		//背景
		let BG:egret.Bitmap = GameConst.getBitmapByName( "bg_1_jpg");
		this.addChild(BG);
		//右上角的齿轮
		this.createGear();
		/**问题呀 */
		this.createQuest();
		/**狮头 */
		this.createLion();
		//
		this.createAnswer();

		this.createBottom();
	}
	/**右上角齿轮 */
	private createGear() {
		let top_zhuan:egret.Bitmap = GameConst.getBitmapByNameAndSetPos("top_zhuan_png", "page2_1_json", GameConst.stageW, 0);
		top_zhuan.anchorOffsetY = top_zhuan.height / (12 / 5);
		this.addChild(top_zhuan);
		egret.startTick( function() {
			top_zhuan.rotation += 1;
			return true;
		}, this)
	}

	/**生成问题和附近的光特效 */
	private createQuest() {
		let p2_2_title:egret.Bitmap = GameConst.getBitmapByNameAndSetPos("p2_2_title_png", "page2_1_json", GameConst.stageW / 2, 200);
		this.addChild(p2_2_title);
		let t_g_1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_1_png", "page2_1_json", GameConst.stageW / 2 - p2_2_title.width / 2 - 20, 200);
		let t_g_3: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_3_png", "page2_1_json", GameConst.stageW / 2 + p2_2_title.width / 2, 200);
		let t_g_2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_2_png", "page2_1_json", GameConst.stageW / 2, 200 - p2_2_title.height / 2);
		let t_g_4: egret.Bitmap = GameConst.getBitmapByNameAndSetPos("t_g_4_png", "page2_1_json", GameConst.stageW / 2, 200 + p2_2_title.height / 2 + 20);
		t_g_1.y = -200;
		t_g_3.y = 450;
		t_g_2.x = -300;
		t_g_4.x = GameConst.stageW + 300;
		this.addChild(t_g_1);
		this.addChild(t_g_2);
		this.addChild(t_g_3);
		this.addChild(t_g_4);
		GameConst.starAlpha(t_g_1, false, true, GameConst.stageW / 2 - p2_2_title.width / 2 - 20, 200);
		GameConst.starAlpha(t_g_2, false, true, GameConst.stageW / 2, 200 - p2_2_title.height / 2,);
		GameConst.starAlpha(t_g_3, true, true, GameConst.stageW / 2 + p2_2_title.width / 2, 200);
		GameConst.starAlpha(t_g_4, true, true, GameConst.stageW / 2, 200 + p2_2_title.height / 2 + 20,);
	}
	/**狮头 */
	private createLion() {
		//狮子
		let p2_2_prop: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_2_prop_png", "page2_1_json", GameConst.stageW / 2, GameConst.stageH / 2 + 50);
		this.addChild(p2_2_prop);
		let p2_2_prop_1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_2_prop_png", "page2_1_json", GameConst.stageW / 2, GameConst.stageH / 2 + 50);
		this.addChild(p2_2_prop_1);
		//line
		let p2_2_prop_line: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_2_prop_line_png", "page2_1_json", GameConst.stageW / 2, GameConst.stageH / 2 + 50);
		this.addChild(p2_2_prop_line);
		//light
		let p2_2_prop_light: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_2_prop_light_png", "page2_1_json", GameConst.stageW / 2, GameConst.stageH / 2 + 50);
		this.addChild(p2_2_prop_light);

		// p2_2_prop.anchorOffsetY = p2_2_prop.height;

		//闪烁的
		GameConst.starAlpha(p2_2_prop_light, false, false);
		let self = this;
		let hei: number = p2_2_prop.y;
		egret.startTick( function() {
			hei -= 20;
			if(hei <= -2000) {
				hei = p2_2_prop.y;
			}
			mask(hei);
			return true;
		}, this)
		function mask(posY) {
			let shape: egret.Shape = new egret.Shape();
			shape.graphics.clear();
			shape.graphics.beginFill(0xff0000);
			shape.graphics.drawRect( p2_2_prop.x + p2_2_prop.width, posY + p2_2_prop.height, p2_2_prop.width * 2, p2_2_prop.height / 6);
			shape.skewX = 45;
			self.addChild(shape);
			p2_2_prop.mask = shape;
		}

	}


	/**三个答案 */
	private createAnswer() {
		//A
		this.p2_2_text1 = GameConst.getBitmapByNameAndSetPos( "p2_2_text1_png", "page2_1_json", GameConst.stageW / 2 + 120, 360);
		this.addChild(this.p2_2_text1); 
		let p2_2_text1_frame1 :egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_2_text1_frame1_png", "page2_1_json", GameConst.stageW / 2 + 120 - this.p2_2_text1.width / 2, 380);
		this.addChild(p2_2_text1_frame1);
		//B
		this.p2_2_text2 = GameConst.getBitmapByNameAndSetPos( "p2_2_text2_png", "page2_1_json", GameConst.stageW / 2 - 150, 870);
		this.addChild(this.p2_2_text2);
		let p2_2_text2_frame1 :egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_2_text2_frame1_png", "page2_1_json", GameConst.stageW / 2 - 150 + this.p2_2_text2.width / 2, 850);
		this.addChild(p2_2_text2_frame1);
		//C
		this.p2_2_text3 = GameConst.getBitmapByNameAndSetPos( "p2_2_text3_png", "page2_1_json", GameConst.stageW / 2 + 180, 890);
		this.addChild(this.p2_2_text3);
		let p2_2_text3_frame1 :egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_2_text3_frame1_png", "page2_1_json", GameConst.stageW / 2 + 160 - this.p2_2_text3.width / 2, 860);
		this.addChild(p2_2_text3_frame1);

		GameConst.starAlpha(p2_2_text1_frame1, false, false);
		GameConst.starAlpha(p2_2_text2_frame1, true, false);
		GameConst.starAlpha(p2_2_text3_frame1, false, false);

		GameConst.starAlpha(this.p2_2_text1, false, false);
		GameConst.starAlpha(this.p2_2_text2, true, false);
		GameConst.starAlpha(this.p2_2_text3, false, false);

		//三个答案加进数组
		let Ansbtns: Array<egret.Bitmap> = [];
		Ansbtns.push(this.p2_2_text1, this.p2_2_text2, this.p2_2_text3);
		//遍历
		for (let i :number = 0; i < Ansbtns.length; i++) {
			Ansbtns[i].touchEnabled = true;
			Ansbtns[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAnsClick, this);
		}
	}

	private createBottom() {
		let t_bottom_png: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "t_bottom_png", "page2_1_json", GameConst.stageW / 2, GameConst.stageH - 180);
		this.addChild(t_bottom_png);
		let tw = egret.Tween.get(t_bottom_png, {loop: true}) ;
		tw.wait(300).to( {y: GameConst.stageH - 185}, 1000).to( {y: GameConst.stageH - 180}, 800);
	}

	/**点击事件 */
	private onAnsClick(e: egret.TouchEvent) {
		let thing = e.target;
		console.log("选择了:"+ e.target);
		GameConst.stage.removeChild(this);
		GameConst.stage.addChild(new TopicTwo());
	}
}