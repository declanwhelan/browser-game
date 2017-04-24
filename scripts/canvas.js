class Canvas{
	constructor( width, height , appendElement){
		this.width = width;
		this.height = height;
		this.canvasElement = $("<canvas width='" + this.width +
                      "' height='" + this.height + "'></canvas>");
		this.canvas = this.canvasElement.get(0).getContext("2d");
		this.canvasElement.appendTo(appendElement);
	}

	getCanvas(){
		return this.canvas;
	}
	refresh(){
		this.clear();
		this.drawBackground();
		this.drawGround();
	}

	clear(){
		this.canvas.clearRect(0, 0, this.width, this.height);
	}

	drawBackground(){
		this.canvas.fillStyle = "#ff0000";
  		this.canvas.fillRect(0, 0, this.width, this.height );
	}

	drawGround(){
		this.canvas.fillStyle = "#00ff00";
  		this.canvas.fillRect(0, this.height-10, this.width, this.height );
	}

}