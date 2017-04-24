class Game {
	constructor (){
		this.FPS = 30;
		this.canvas = new Canvas( 480, 320 , 'body');
		this.player = new Player(this.canvas);
		this.startRunLoop();
	}

	startRunLoop(){
		let _this = this;
		setInterval(function() {
			_this.draw();
			_this.player.move();
		}, 1000/_this.FPS);
	}

	draw(){
		this.canvas.refresh();
   		this.player.draw();
	}

}

let ourGame = new Game();