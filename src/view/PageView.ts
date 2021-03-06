class PageView extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}
	/**背景1 */
	private bg1: egret.Bitmap;
	/**背景2 */
	private bg2: egret.Bitmap;
	/**背景3 */
	private bg3: egret.Bitmap
	/**按钮面板 */
	private btnBG: egret.Bitmap;
	/**按钮线 */
	private p1_btn1_text1: egret.Bitmap;
	/**按钮字体 */
	private p1_btn1_text2: egret.Bitmap;
	/**按钮面板光 */
	private light1: egret.Bitmap;
	private light2: egret.Bitmap;
	/**指环圈 */
	private p1_btn1_text4: egret.Bitmap;
	/**不做动画指环 */
	private p1_btn1: egret.Bitmap;
	/**手指 */
	private p1_btn1_text3: egret.Bitmap;
	/**温度管道3 */
	private p1_height_3: egret.Bitmap;
	/**温度管道2 */
	private p1_height_2: egret.Bitmap;
	/**温度管道1 */
	private p1_height_1: egret.Bitmap;
	/**管道遮罩 */
	private p1_prop_light_2: egret.Bitmap;
	/**窜天光 */
	private p1_light: egret.Bitmap;
	/**窜天光的尾巴 */
	private p1_prop_light_1: egret.Bitmap;
	/**流星 */
	private p1_star: egret.Bitmap;
	/**计时器 */
	private timer:egret.Timer;
	// private 
	//资源在组page1内
	private init() {
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e:egret.TouchEvent)=>{
			console.log("x:" + e.stageX + "," + "y:" + e.stageY);
		}, this);
		//开始背景
		this.bg3 = GameConst.getBitmapByName("bg3_jpg");
		this.addChild(this.bg3);
		this.bg3.y = GameConst.stageH + 40 - this.bg3.height;
		//背景2
		this.bg2 = GameConst.getBitmapByName("bg2_jpg");
		this.addChild(this.bg2);
		this.bg2.y = this.bg3.y - this.bg2.height;
		//背景1
		this.bg1 = GameConst.getBitmapByName("bg1_jpg");
		this.addChild(this.bg1);
		
		this.bg1.y = this.bg3.y - this.bg2.height - this.bg1.height;
		
		
		//按钮
		this.btnBG = GameConst.getBitmapFromSheet("p1_btn1_png", "page1_1_json");
		this.btnBG.x = (GameConst.stageW - this.btnBG.width) / 2;
		this.btnBG.y = (GameConst.stageH - this.btnBG.height) / 2 + 10;
		this.btnBG.alpha = 0;
		// this.btnBG.touchEnabled = true;
		// this.btnBG.addEventListener(egret.TouchEvent.TOUCH_BEGIN ,this.click, this);
		this.addChild(this.btnBG);
		this.BtnTween(this.btnBG);
		//按钮字体和线
		this.p1_btn1_text1 = GameConst.getBitmapByNameAndSetPos("p1_btn1_text1_png", "page1_1_json", GameConst.stageW / 2 - 35, GameConst.stageH / 2);
		this.addChild(this.p1_btn1_text1);
		this.BtnTween(this.p1_btn1_text1);
		//字体
		this.p1_btn1_text2 = GameConst.getBitmapByNameAndSetPos("p1_btn1_text2_png", "page1_1_json", GameConst.stageW / 2 + 70, GameConst.stageH / 2);
		this.p1_btn1_text2.scaleX = this.p1_btn1_text2.scaleY = this.p1_btn1_text2.alpha = 0;
		
		this.addChild(this.p1_btn1_text2);
		this.BtnTween(this.p1_btn1_text2);

		this.light1 = GameConst.getBitmapFromSheet("p1_btn1_light1_png", "page1_1_json");
		// this.light1.x = this.btnBG.x - this.light1.width / 2;
		this.light1.x = -400;
		this.light1.y = this.btnBG.y - this.light1.height / 2 + 10;
		this.light1.scaleX = this.light1.scaleY = 2;
		this.light1.alpha = 0;
		this.addChild(this.light1);

		this.light2 = GameConst.getBitmapFromSheet("p1_btn1_light2_png", "page1_1_json");
		// this.light2.x = this.btnBG.x + this.light2.width / 2;
		this.light2.x = 1000;
		this.light2.y = this.btnBG.y + this.light2.height / 2 + 10;
		this.light2.scaleX = this.light2.scaleY = 2;
		this.light2.alpha = 0;
		this.addChild(this.light2);

		//做动画的指环圈
		this.p1_btn1_text4 = GameConst.getBitmapFromSheet("p1_btn1_text4_png", "page1_1_json")
		this.p1_btn1_text4.anchorOffsetX = this.p1_btn1_text4.width / 2;
		this.p1_btn1_text4.anchorOffsetY = this.p1_btn1_text4.height / 2;
		this.p1_btn1_text4.y = this.btnBG.y + this.btnBG.height / 2 - 10;
		this.p1_btn1_text4.x = this.btnBG.x + this.p1_btn1_text4.width + 10;
		this.p1_btn1_text4.alpha = 1;
		this.addChild(this.p1_btn1_text4);

		//不做动画的指环圈
		this.p1_btn1 = GameConst.getBitmapFromSheet("p1_btn1_text4_png", "page1_1_json")
		this.p1_btn1.anchorOffsetX = this.p1_btn1_text4.width / 2;
		this.p1_btn1.anchorOffsetY = this.p1_btn1_text4.height / 2;
		this.p1_btn1.y = this.btnBG.y + this.btnBG.height / 2 - 10;
		this.p1_btn1.x = this.btnBG.x + this.p1_btn1_text4.width + 10;
		this.addChild(this.p1_btn1);

		//手指
		this.p1_btn1_text3 = GameConst.getBitmapFromSheet("p1_btn1_text3_png", "page1_1_json");
		this.p1_btn1_text3.x = this.p1_btn1_text4.x - 15;
		this.p1_btn1_text3.y = this.p1_btn1_text4.y;
		this.addChild(this.p1_btn1_text3);

		//温度管道3
		this.p1_height_3 = GameConst.getBitmapFromSheet("p1_height_3_png", "page1_1_json");
		this.p1_height_3.x = (GameConst.stageW - this.p1_height_3.width) / 2 + 27;
		this.p1_height_3.y = GameConst.stageH - this.p1_height_3.height - 190;
		this.addChild(this.p1_height_3);

		//温度管道2
		this.p1_height_2 = GameConst.getBitmapFromSheet("p1_height_2_png", "page1_1_json");
		this.p1_height_2.x = (GameConst.stageW - this.p1_height_2.width) / 2 + 27;
		this.p1_height_2.y = GameConst.stageH - this.p1_height_3.height - 190 - this.p1_height_2.height;
		this.addChild(this.p1_height_2);

		//温度管道1
		this.p1_height_1 = GameConst.getBitmapFromSheet("p1_height_1_png", "page1_1_json");
		this.p1_height_1.x = (GameConst.stageW - this.p1_height_1.width) / 2 + 27;
		this.p1_height_1.y = GameConst.stageH - this.p1_height_3.height - 190 - this.p1_height_2.height - this.p1_height_1.height;
		this.addChild(this.p1_height_1);

		//管道的遮罩
		this.p1_prop_light_2 = GameConst.getBitmapFromSheet("p1_prop_light_2_png", "page1_2_json");
		this.addChild(this.p1_prop_light_2);
		//锚点设置在左下角
		this.p1_prop_light_2.anchorOffsetY = this.p1_prop_light_2.height;
		this.p1_prop_light_2.anchorOffsetX = this.p1_prop_light_2.width / 2;
		this.p1_prop_light_2.y = GameConst.stageH - 200;
		this.p1_prop_light_2.x = GameConst.stageW / 2;
		this.p1_prop_light_2.scaleX = this.p1_prop_light_2.scaleY = 0;

		//窜天光尾巴
		this.p1_prop_light_1 = GameConst.getBitmapFromSheet("p1_prop_light_1_png", "page1_2_json");
		this.addChildAt(this.p1_prop_light_1, 3);
		//锚点设置在左下角
		this.p1_prop_light_1.anchorOffsetX = this.p1_prop_light_1.width / 2;
		this.p1_prop_light_1.anchorOffsetY = this.p1_prop_light_1.height;
		this.p1_prop_light_1.x = GameConst.stageW / 2;
		this.p1_prop_light_1.y = GameConst.stageH - 200;
		this.p1_prop_light_1.scaleX = this.p1_prop_light_1.scaleY = 0;
		//窜天光
		this.p1_light = GameConst.getBitmapFromSheet("p1_light_png", "page1_2_json");
		this.addChild(this.p1_light);
		this.p1_light.x = (GameConst.stageW - this.p1_light.width) / 2;
		this.p1_light.y = GameConst.stageH / 2 - this.p1_light.height - 80;

		//tween动画
		this.Bg3Tween();
		this.addEventListener( egret.Event.ENTER_FRAME, this.enterFrame, this);
	}
	private t:number = 0;
	private enterFrame() {
		this.t += 0.05;
		let self = this;
		if (this.t >= 5) {
			this.t= 0;
			self.createStar();
		}
		// 

	}
	//按钮做的动画
	private BtnTween(result: egret.Bitmap) {
		let tw_btn = egret.Tween.get(result);
		tw_btn.to({ scaleX: 0.5, scaleY: 0.5}, 500).to( { alpha: 1, scaleX: 1, scaleY: 1}, 1000);
	}
	//最底下的所有Tween动画
	private Bg3Tween() {
		//随机生成流星
		// this.createStar();
		
		// let tw_btnBG = egret.Tween.get(this.btnBG);
		// tw_btnBG.to({ scaleX: 0.5, scaleY: 0.5 }, 500).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 1000);
		//light1
		let tw = egret.Tween.get(this.light1);
		tw.wait(500).to({ x: this.btnBG.x, alpha: 1, scaleX: 1, scaleY: 1 }, 1000);
		//light2
		let tw2 = egret.Tween.get(this.light2);
		tw2.wait(500).to({ x: this.btnBG.x - 100, alpha: 1, scaleX: 1, scaleY: 1 }, 1000);
		//管道遮罩伸长
		let tw_proph2 = egret.Tween.get(this.p1_prop_light_2);
		tw_proph2.wait(300).to({ scaleX: 1, scaleY: 1 }, 1200)
		//窜天光尾巴
		let tw_proph1 = egret.Tween.get(this.p1_prop_light_1);
		tw_proph1.wait(300).to({ scaleX: 1, scaleY: 1 }, 1200);
		let self = this;
		//1500ms之后执行
		setTimeout(function () {
			self.LoopTweenAlpha(self.light1, 0.3, 1, 0, 1500, 1500);
			self.LoopTweenAlpha(self.light2, 0.3, 1, 0, 1500, 1500);
			//指环圈
			let tw_text4 = egret.Tween.get(self.p1_btn1_text4, { loop: true });
			tw_text4.to({ alpha: 0, scaleX: 2.3, scaleY: 2.3 }, 500).to({ alpha: 0, scaleX: 1, scaleY: 1 }, 500);
			//手指动画
			let tw_text3 = egret.Tween.get(self.p1_btn1_text3, { loop: true });
			tw_text3.to({ x: self.p1_btn1_text3.x - 5, y: self.p1_btn1_text3.y - 10 }, 500).to({ x: self.p1_btn1_text3.x, y: self.p1_btn1_text3.y }, 500);
			//1.5s之后才可以点击按钮
			self.btnBG.touchEnabled = true;
			
		}, 1500);
		//点击按钮触发事件
		this.btnBG.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
	}
	/**
	 * LoopTweenAlpha 动画
	 * @param result 对象
	 * @param startAlpha 开始alpha
	 * @param overAlpha 结束alpha
	 * @param delay 等待执行
	 * @param everyTime 开始执行的时间
	 * @param endTime 结束执行的时间
	 */
	private LoopTweenAlpha(result: egret.Bitmap, startAlpha: number, overAlpha: number, delay: number, startTime: number, endTime:number) {
		let tw = egret.Tween.get(result, {loop: true});
		tw.wait(delay).to( {alpha: startAlpha}, startTime).to( {alpha: overAlpha}, endTime);
	}
	//点击之后过700ms消失
	private OnClickAlpha(result: egret.Bitmap) {
		let self = this;
		let tw = egret.Tween.get(result);
		tw.wait(200).to( {alpha: 0}, 500);
		
	}
	//点击触发事件
	private click() {
		this.btnBG.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
		let self = this;

		this.OnClickAlpha(this.btnBG);
		this.OnClickAlpha(this.p1_btn1_text1);
		this.OnClickAlpha(this.p1_btn1_text2);
		this.OnClickAlpha(this.p1_btn1_text3);
		this.OnClickAlpha(this.p1_btn1_text4);
		this.OnClickAlpha(this.light1);
		this.OnClickAlpha(this.light2);
		
		//窜天光尾巴
		let tw_p1_prop_light_1 = egret.Tween.get(self.p1_prop_light_1);
		tw_p1_prop_light_1.wait(200).to({ height: 1000 }, 700);
		//温度管道遮罩
		let tw_p1_prop_light_2 = egret.Tween.get(self.p1_prop_light_2);
		tw_p1_prop_light_2.wait(200).to({ height: 1000 }, 3000);
		setTimeout(function () {
			self.removeChild(self.light1);
			self.removeChild(self.light2);
			self.removeChild(self.p1_btn1_text4);
			self.removeChild(self.p1_btn1);
			self.light1 = null;
			self.light2 = null;
			self.p1_btn1_text4 = null;
			self.p1_btn1 = null;
		}, 700);
		//遮罩人物的高度
		let hei:number = 537;
		//人物
		let man:egret.Bitmap;
		egret.startTick(function (): boolean {
			//背景运动
			if (self.p1_height_1.y <= 200) {
				
				self.bg3.y += 5;
				self.p1_height_3.y += 8;
				self.p1_height_2.y += 8;
				self.p1_height_1.y += 8;
				self.bg2.y += 5;
				self.bg1.y += 5;
			}
			if (self.bg3.y == -400) {
				//生成警告
				self.CreatWarning();
			}
			
			if(self.bg3.y >= -100 && self.bg3.y <= 100) {
				if(self.bg3.y == -100) {
					//生成人物
					man = self.createMan();
				}
				hei -= 1;
				self.manMask(man, hei);
				
			}
			if(self.bg3.y == 0) {
				//生成人物上面乱七八糟
				self.createManNear();
			}
			if(self.p1_height_2.y == -315) {
				//生成传送门
				self.createDoorUp();
			}
			if(self.p1_height_2.y == 365) {
				//生成(新物种....)字体
				self.createFontUp();
			}
			if(self.p1_height_1.y == -10) {
				//生成最后的东西
				this.createLastUp();
			}
			
			return true;
		}, this);
	}

	/**生成警告并闪烁 */
	private CreatWarning() {
		//警告
		let p1_text1_png: egret.Bitmap = GameConst.getBitmapFromSheet("p1_text1_png", "page1_2_json");
		let p1_text1_1_png: egret.Bitmap = GameConst.getBitmapFromSheet("p1_text1_1_png", "page1_2_json");

		this.addChild(p1_text1_1_png);
		this.addChild(p1_text1_png);
		p1_text1_png.anchorOffsetX = p1_text1_1_png.anchorOffsetX = p1_text1_png.width / 2;
		p1_text1_png.anchorOffsetY = p1_text1_1_png.anchorOffsetY = p1_text1_png.height / 2;
		p1_text1_png.x = p1_text1_1_png.x = GameConst.stageW / 2;
		p1_text1_png.y = p1_text1_1_png.y = 200;
		p1_text1_png.alpha = p1_text1_1_png.alpha = 0.2;
		p1_text1_png.scaleX = p1_text1_png.scaleY = p1_text1_1_png.scaleX = p1_text1_1_png.scaleY = 0.5;

		let tw = egret.Tween.get(p1_text1_png, { loop: true });
		tw.to({ alpha: 0 }, 200).to({ alpha: 1 }, 200);
		//
		let tw_p1_text1_png = egret.Tween.get(p1_text1_png);
		tw_p1_text1_png.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500).to({ y: GameConst.stageH + 200 }, 2500);
		//
		let tw_p1_text1_1_png = egret.Tween.get(p1_text1_1_png);
		tw_p1_text1_1_png.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500).to({ y: GameConst.stageH + 200 }, 2500);
		//警告结束
		//生成圆弧 
		let circle:egret.Bitmap = GameConst.getBitmapFromSheet("circle0_13_png", "circle_json");
		let circle_0:egret.Bitmap = GameConst.getBitmapFromSheet("circle0_1_png", "circle_json");
		let circle0_2:egret.Bitmap = GameConst.getBitmapFromSheet("circle0_14_png", "circle_json");
		this.addChild(circle);
		this.addChild(circle_0);
		this.addChild(circle0_2)
		this.createSkew(circle);
		this.createSkew(circle_0);
		this.createSkew(circle0_2);
		
	}
	//设置斜切
	private createSkew(result: egret.Bitmap) {
		result.anchorOffsetX = result.width / 2;
		result.anchorOffsetY = result.height / 2;
		result.skewX = -80;
		result.skewY = -10;
		result.x = GameConst.stageW / 2;
		result.y = 100;

		let tw_circle = egret.Tween.get(result);
		tw_circle.wait(1000).to( {y: GameConst.stageH + 100}, 2500);
	}

	/**生成人物 */
	private createMan():egret.Bitmap {
		let self = this;
		let man:egret.Bitmap = GameConst.getBitmapFromSheet("p1_prop1_png", "page1_2_json");
		man.anchorOffsetY = man.height;
		man.x = (GameConst.stageW - man.width) / 2;
		man.y = GameConst.stageH - 650;
		setTimeout(function() {
			let tw_man = egret.Tween.get(man);
			tw_man.to( {y: 2000}, 3500);
		}, 500);
		return man;
		// this.createManNear()
	}
	//人物遮罩
	private manMask(man: egret.Bitmap, hei:number) {
		let shp2:egret.Shape = new egret.Shape();
		shp2.graphics.beginFill( 0xff0000 );
		shp2.graphics.drawRect( man.x, man.y, man.width, hei);
		shp2.graphics.endFill();
		this.addChild(shp2);
		this.addChild(man);
		man.mask = shp2;
	}
	//人物附近乱七八糟的东西
	private createManNear() {
		let p1_icon2_5 = this.AddChildByName("p1_icon2_5_png", "page1_2_json", GameConst.stageW / 2 + 70, GameConst.stageH / 2 - 350, 5);
		let p1_icon2_6 = this.AddChildByName("p1_icon2_6_png", "page1_2_json", GameConst.stageW / 2 -320, GameConst.stageH / 2 - 250, 6);
		let p1_icon1_27 = this.AddChildByName("p1_icon1_27_png", "page1_2_json", GameConst.stageW / 2 + 200, GameConst.stageH / 2 - 100, 7);
		let p1_icon1_28 = this.AddChildByName("p1_icon1_28_png", "page1_2_json", GameConst.stageW / 2 - 270, GameConst.stageH / 2, 8);
		let p1_icon2_3 = this.AddChildByName("p1_icon2_3_png", "page1_2_json", GameConst.stageW / 2 + 70, GameConst.stageH / 2 + 100, 9);
		let p1_icon2_2 = this.AddChildByName("p1_icon2_2_png", "page1_2_json", GameConst.stageW / 2 - 250, GameConst.stageH / 2 + 150, 10);
		let p1_icon2_4 = this.AddChildByName("p1_icon2_4_png", "page1_2_json", GameConst.stageW / 2 - 250, 0, 10);
		let p1_icon1_30 = this.AddChildByName("p1_icon1_30_png", "page1_2_json", GameConst.stageW / 2 + 150, 0, 10);
	}
	/*根据名字加子对象并且调整位置*/
	private AddChildByName(name:string, sheetName:string, posX:number, posY:number, layer:number = this.numChildren, isRun:boolean = true, runNoChange:boolean = false) {
		let result:egret.Bitmap = GameConst.getBitmapFromSheet(name, sheetName);
		this.addChildAt(result, layer);
		result.x = posX;
		result.y = posY;
		
		if(isRun) {
			result.alpha = 0;
			result.scaleX = result.scaleY = 0;
			let tw = egret.Tween.get(result);
			tw.wait(500).to( {alpha: 1, scaleX: 1, scaleY: 1}, 1000);
			setTimeout(function() {
				let tw_1 = egret.Tween.get(result);
				tw_1.to( {y :posY + 1500}, 4000);
			}, 1500);
		}
		else if(runNoChange) {
			let tw = egret.Tween.get(result);
			tw.wait(500).to( {y: posY + 1500}, 4000);
		}
		return result;
	}

	//生成传送门
	private createDoorUp() {
		//地球生物开始出现不可思议的突变
		let self = this;
		for(let i:number = 1; i <= 21; i++) {
			let temp:egret.Bitmap ;
			temp= self.AddChildByName(`p1_text2_${i}_png`, "page1_2_json", GameConst.stageW / 2  - 230 + (i % 9) * 10, 20, this.numChildren, false, true);
			temp.alpha = 0;
			setTimeout(function() {
				temp.alpha = 1;
			}, 80 * i);
		}
		//窜天光逐渐变成紫色
		let p1_light_2 = GameConst.getBitmapFromSheet("p1_light_2_png", "page1_2_json");
		p1_light_2.x = this.p1_light.x;
		p1_light_2.y = this.p1_light.y;
		p1_light_2.alpha = 0;
		this.addChild(p1_light_2);
		let tw_light1 = egret.Tween.get(p1_light_2);
		tw_light1.to( {alpha: 1}, 2000);
		let tw_light = egret.Tween.get(this.p1_light);
		tw_light.to( {alpha: 0}, 1500);
		
		//生成传送门
		setTimeout(function() {
			let p1_prop2 = self.AddChildByName("p1_prop2_png", "page1_2_json", GameConst.stageW / 2 - 320, 500, 5, false, true);
		}, 1200);
	}
	/**生成字体 */
	private createFontUp() {
		//19个字符
		let self = this;
		for(let i:number = 1; i <= 19; i++ ) {
			let temp:egret.Bitmap;
			temp = self.AddChildByName(`p1_text3_${i}_png`, "page1_2_json", GameConst.stageW / 2 - 270 + (i % 10) * 10, 20, this.numChildren, false, true);
			temp.alpha = 0;
			setTimeout(function() {
				temp.alpha = 1;
			}, 80 * i);
		}
	}
	/**生成页面最后 */
	private createLastUp() {
		//81度
		let p1_num7 = GameConst.getBitmapByNameAndSetPos("p1_num7_png", "page1_2_json", GameConst.stageW / 2 + 200, 600);
		p1_num7.alpha = 0;
		p1_num7.scaleX = 0;
		//三角背景
		let p1_title1 = GameConst.getBitmapByNameAndSetPos("p1_title1_png", "page1_2_json", GameConst.stageW / 2, 320);
		//扫描
		let saomiao = GameConst.getBitmapByNameAndSetPos("p1_light_1_png", "page1_2_json", GameConst.stageW / 2, 335);
		//烈燃新物种
		let p1_title2 =GameConst.getBitmapByNameAndSetPos('p1_title2_png', "page1_2_json", GameConst.stageW / 2, 340);
		let p1_title = GameConst.getBitmapByNameAndSetPos("p1_title_png", "page1_2_json", GameConst.stageW / 2, 340);
		//神准测试,一测现形
		let p1_text4_1 = GameConst.getBitmapByNameAndSetPos("p1_text4_1_png", "page1_2_json", GameConst.stageW / 2, 800);
		p1_text4_1.x = -p1_text4_1.width;
		let p1_text4_2 = GameConst.getBitmapByNameAndSetPos("p1_text4_2_png", "page1_2_json", GameConst.stageW / 2, 800);
		p1_text4_2.x = GameConst.stageW + p1_text4_2.width + 10;
		this.addChild(p1_num7);
		this.addChild(p1_title1);
		this.addChild(saomiao);
		this.addChild(p1_title2);
		this.addChild(p1_title);
		this.addChild(p1_text4_1);
		this.addChild(p1_text4_2);
		//温度81度动画
		this.LastUpTween(p1_num7, GameConst.stageW / 2 + 200);
		//两行字体动画
		this.LastUpTween(p1_text4_1);
		this.LastUpTween(p1_text4_2);
		//马上测试按钮
		let p1_btn2 = GameConst.getBitmapByNameAndSetPos('p1_btn2_png', "page1_1_json", GameConst.stageW / 2, 980);
		let p1_btn2_text = GameConst.getBitmapByNameAndSetPos("p1_btn2_text_png", "page1_1_json", GameConst.stageW / 2, 980);
		p1_btn2.alpha = p1_btn2.scaleX = p1_btn2.scaleY = p1_btn2_text.alpha = p1_btn2_text.scaleX = p1_btn2_text.scaleY = 0;
		this.addChild(p1_btn2)
		this.addChild(p1_btn2_text);
		//按钮点击事件
		p1_btn2.touchEnabled = true;
		p1_btn2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTestClick, this);
		//按钮动画
		this.LastUpTween(p1_btn2);
		this.LastUpTween(p1_btn2_text);
		//设置扫描的锚点
		saomiao.anchorOffsetX = 3/4 * saomiao.width;
		saomiao.anchorOffsetY = saomiao.height;

		egret.startTick( function() {
			saomiao.rotation += 2;
			return true;
		}, this)
		
		let self = this;
		//对燃烧新物种加遮罩
		let posX: number = p1_title.x - p1_title.width / 2;
		egret.startTick( function() {
			posX += 15;
			if(posX >= 2000) {
				posX = p1_title.x - p1_title.width / 2;
			}
			mask(posX);
			return true;
		}, this);
		function mask(posX_) {
			let shape: egret.Shape = new egret.Shape();
			shape.graphics.clear();
			shape.graphics.beginFill(0xff0000);
			shape.graphics.drawRect(posX_, p1_title.y - p1_title.height / 2 + 100, p1_title.width / 8, p1_title.height + 100);
			shape.graphics.endFill();
			shape.skewX = 45;
			self.addChild(shape);
			p1_title.mask = shape
		}

		this.createLastViolet();
	}
	//生成一个紫光,
	private createLastViolet() {
		let violet:egret.Bitmap = GameConst.getBitmapByNameAndSetPos("p1_light_2_png", "page1_2_json", GameConst.stageW / 2, GameConst.stageH);
		this.addChild(violet);
		violet.alpha = 0;
		let tw = egret.Tween.get(violet);
		tw.wait(200).to( {alpha: 1, y: 530}, 800).to( {alpha: 0});

		let p1_light_1:egret.Bitmap = GameConst.getBitmapByNameAndSetPos("p1_light1_png", "page1_2_json", GameConst.stageW / 2 + 25, 540);
		this.addChild(p1_light_1);
		p1_light_1.alpha = 1;
		this.LoopTweenAlpha(p1_light_1, 0.5, 1, 1000, 500, 500);
	}

	/**最后一个页面的动画 */
	private LastUpTween(result: egret.Bitmap, posX:number = GameConst.stageW / 2) {
		let tw = egret.Tween.get(result);
		tw.wait(400).to( {alpha: 1, x: posX, scaleX: 1, scaleY: 1}, 1000);
	}
	//按钮点击切换页面
	private onTestClick() {
		let self = this;
		this.addChild( new Chuansuo());
		let tw = egret.Tween.get(this);
		tw.to( {alpha: 0}, 2000);
		setTimeout(function() {
			GameConst.stage.removeChild(self);
			GameConst.stage.addChild(new TopicOne());
		}, 2000);
	}
	//生成流星并运动
	private createStar():void {
		let num:number = Math.floor(Math.random() * 3);
		switch(num) {
			case 0:
				this.p1_star = GameConst.getBitmapFromSheet("p1_star1_png", "page1_2_json");
				break; 
			case 1:
				this.p1_star = GameConst.getBitmapFromSheet("p1_star2_png", "page1_2_json");
				break;
			case 2:
				this.p1_star = GameConst.getBitmapFromSheet("p1_star2_png", "page1_2_json");
				break;
		}
		
		this.addChildAt(this.p1_star, 3);
		this.p1_star.x = Math.random() * GameConst.stageW;
		this.p1_star.y = GameConst.stageH; 
		this.p1_star.alpha = 0.5;
		let bg1Y = this.bg1.y;
		let self = this;
		let tw = egret.Tween.get(this.p1_star);
		tw.to( {alpha: 0.1, y: bg1Y}, 5000);
	}

}