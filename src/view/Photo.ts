declare function selectImage(selectedHandler:Function,thisRef:any): void;
declare function tmpSelectFile(thisRef:any): void;
declare function tmpCreateImage(selectedHandler:any,thisRef:any): void;
declare function myCreateObjectURL(thisRef:any): void;
declare function myResolveObjectURL(thisRef:any): void;
declare function getImageData(selectedHandler:any,thisRef:any,thisRefe:any): void;
declare function isWeixin(): void;
declare function selectImageWX(selectedHandler:Function,thisRef:any): void;

class Photo extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.init();
	}
			
	private init() {
	
		egret.log("kacha111");
		let bg = new egret.Bitmap(RES.getRes("bg1_jpg"));
		this.addChild(bg);
		bg.touchEnabled = true;
		// bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doSelect, this);
		bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, ()=>{
			var eg = document.getElementById("egret");
			var img = document.createElement("input");
			img.type = "file";
			img.accept = "image/*";
			eg.appendChild(img);
			img.click();
		}, this);

		let p2_4_title = GameConst.getBitmapByNameAndSetPos("p2_4_title_png", "page2_4_json", GameConst.stageW / 2, GameConst.stageH / 2);
		this.addChild(p2_4_title);
		p2_4_title.touchEnabled = true;
		p2_4_title.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doSelect, this);
		
	}

	private doSelect(evt:egret.TouchEvent):void {
		egret.log("kacha");
		
        selectImage(this.selectedHandler,this);
    }
    private selectedHandler(thisRef:any,imgURL:string):void {
        RES.getResByUrl(imgURL,thisRef.compFunc,thisRef,RES.ResourceItem.TYPE_IMAGE);
    }
    private compFunc(texture:egret.Texture):void {
        var imgReview:egret.Bitmap = new egret.Bitmap(texture);
        imgReview.width = 300;
        imgReview.height = 300;
        this.addChild(imgReview);
    }

}