class TopicTwo extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}
	/**答案A */
	private p2_1_text1: egret.Bitmap;
	/**答案B */
	private p2_1_text2: egret.Bitmap;
	/**答案C */
	private p2_1_text3: egret.Bitmap;
	private init() {
		//背景
		let BG: egret.Bitmap = GameConst.getBitmapByName("bg_2_jpg");
		this.addChild(BG);
		//生成底部
		this.createBottom();
		//生成问题
		this.createQuest();

		
	}
	/**生成问题 */
	private createQuest() {
		//问题框
		let p2_1_title_frame1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_title_frame1_png", "page2_2_json", GameConst.stageW / 2, GameConst.stageH / 2 - 40);
		this.addChild(p2_1_title_frame1);
		let p2_1_title_frame2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_title_frame2_png", "page2_2_json", GameConst.stageW / 2, GameConst.stageH / 2 - 40);
		this.addChild(p2_1_title_frame2);
		//问题
		let p2_1_title: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_title_png", "page2_2_json", GameConst.stageW / 2, GameConst.stageH / 2 - 40);
		this.addChild(p2_1_title);
		this.createMoveIcon();

		// this.addChild(this.questionTween(p2_1_title_frame1, 0));
		this.questionTween(p2_1_title_frame1, 0);
		this.questionTween(p2_1_title_frame2, 0);
		
		//答案框
		this.createAns();
	}

	//问题框动画
	private questionTween(result: egret.Bitmap, angle: number) {
		let self = this;
		let a = 0;
		egret.startTick(function() {
			if(angle < 360) {
				angle += 5;
				mask(angle);
			}
			return true;
		}, this)
		// return shape;
		function mask(_angle:number) {
			let shape: egret.Shape = new egret.Shape();
			
			shape.graphics.clear();
			shape.graphics.beginFill(0xff0000);
			shape.graphics.moveTo(result.x - result.width / 2, result.y - result.height / 2);
			shape.graphics.lineTo(result.x, result.y);
			shape.graphics.drawArc(result.x, result.y,result.width / 2, 0, _angle * Math.PI / 180);
			shape.graphics.lineTo(result.x, result.y);
			shape.graphics.endFill();
			self.addChild(shape);
			result.mask = shape
		}
	}
	
	/**生成答案框 */
	private createAns() {
		//A
		let p2_1_text_frame1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_text_frame1_png", "page2_2_json", GameConst.stageW / 2 + 150, GameConst.stageH / 2 - 300);
		this.addChild(p2_1_text_frame1);
		let p2_1_line1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_line1_png", "page2_2_json", GameConst.stageW / 2 + 100, GameConst.stageH / 2 -200);
		this.addChild(p2_1_line1);
		this.p2_1_text1 = GameConst.getBitmapByNameAndSetPos( "p2_1_text1_png", "page2_2_json", GameConst.stageW / 2 + 150, GameConst.stageH / 2 - 300);
		this.addChild(this.p2_1_text1);
		//B
		let p2_1_text_frame2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_text_frame2_png", "page2_2_json", GameConst.stageW / 2 - 220, GameConst.stageH / 2 + 150);
		this.addChild(p2_1_text_frame2);
		let p2_1_line2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_line2_png", "page2_2_json", GameConst.stageW / 2 - 110, GameConst.stageH / 2 + 110);
		this.addChild(p2_1_line2);
		this.p2_1_text2 = GameConst.getBitmapByNameAndSetPos( "p2_1_text2_png", "page2_2_json", GameConst.stageW / 2 - 220, GameConst.stageH / 2 + 150);
		this.addChild(this.p2_1_text2);
		//C
		let p2_1_text_frame3: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_text_frame3_png", "page2_2_json", GameConst.stageW / 2 + 180, GameConst.stageH / 2 + 180);
		this.addChild(p2_1_text_frame3);
		let p2_1_line3: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_line3_png", "page2_2_json", GameConst.stageW / 2 + 100, GameConst.stageH / 2 + 100);
		this.addChild(p2_1_line3);
		this.p2_1_text3 = GameConst.getBitmapByNameAndSetPos( "p2_1_text3_png", "page2_2_json", GameConst.stageW / 2 + 180, GameConst.stageH / 2 + 180);
		this.addChild(this.p2_1_text3);

		//所有答案的数组
		let ansArr: Array<egret.Bitmap> = [];
		ansArr.push (this.p2_1_text1, this.p2_1_text2, this.p2_1_text3);
		for( let i:number = 0; i < ansArr.length; i++) {
			ansArr[i].touchEnabled = true;
			ansArr[i].addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.onAnsClick, this);
		}

	}
	/**生成一些会动的小物件 */
	private createMoveIcon() {
		//shang
		let p2_1_icon1: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_icon1_png", "page2_2_json", GameConst.stageW / 2 - 80, 250);
		this.addChild(p2_1_icon1);
		//xia
		let p2_1_icon2: egret.Bitmap = GameConst.getBitmapByNameAndSetPos( "p2_1_icon2_png", "page2_2_json", GameConst.stageW / 2 - 240, GameConst.stageH / 2 - 100);
		this.addChild(p2_1_icon2);
		let tw_icon1 = egret.Tween.get( p2_1_icon1, {loop: true});
		tw_icon1.wait(500).to( {y: 230}, 500).to( {y: 250}, 400);

		let tw_icon2 = egret.Tween.get(p2_1_icon2, {loop: true});
		tw_icon2.wait(500).to( {rotation: 360}, 5000).to( {rotation: 0}, 5000);
	}

	/**生成底部 */
	private createBottom() {
		let bg_2_bottom = GameConst.getBitmapByNameAndSetPos("bg_2_bottom_png", "page2_2_json", GameConst.stageW / 2, GameConst.stageH - 200);
		this.addChild(bg_2_bottom);
		let bg_2_bottom2 = GameConst.getBitmapByNameAndSetPos("bg_2_bottom2_png", "page2_2_json", GameConst.stageW / 2, GameConst.stageH - 140);
		this.addChild(bg_2_bottom2);

		let self = this;
		let widtX = bg_2_bottom2.x + bg_2_bottom2.width / 2; 

		egret.startTick( function() {
			widtX -= 8;
			if(widtX <= -500) {
				widtX = bg_2_bottom2.x + bg_2_bottom2.width / 2; 
			}
			BottomMask(widtX);
			return true;
		}, this)
		
		function BottomMask(wid) {
			let shape: egret.Shape = new egret.Shape();
			shape.graphics.clear();
			shape.graphics.beginFill(0xff0000);
			shape.graphics.drawRect(wid - 100, bg_2_bottom2.y - bg_2_bottom2.height / 2, bg_2_bottom2.width / 5 + wid / 2, bg_2_bottom2.height - 120);
			shape.graphics.endFill();
			self.addChild(shape);
			bg_2_bottom2.mask = shape;
		}

	}


	/**点击答案事件 */
	private onAnsClick(e: egret.TouchEvent) {
		console.log(e.target);
		GameConst.stage.removeChild(this);
		GameConst.stage.addChild( new TopicThree());
	}
}