"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Object = function Object(x, y, width, height) {
	_classCallCheck(this, Object);

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

var Canvas = function () {
	function Canvas(width, height, appendElement) {
		_classCallCheck(this, Canvas);

		this.width = width;
		this.height = height;
		this.canvasElement = $("<canvas width='" + this.width + "' height='" + this.height + "'></canvas>");
		this.canvas = this.canvasElement.get(0).getContext("2d");
		this.canvasElement.appendTo(appendElement);
	}

	_createClass(Canvas, [{
		key: "getCanvas",
		value: function getCanvas() {
			return this.canvas;
		}
	}, {
		key: "refresh",
		value: function refresh() {
			this.clear();
			this.drawBackground();
			this.drawGround();
		}
	}, {
		key: "clear",
		value: function clear() {
			this.canvas.clearRect(0, 0, this.width, this.height);
		}
	}, {
		key: "drawBackground",
		value: function drawBackground() {
			this.canvas.fillStyle = "#ff0000";
			this.canvas.fillRect(0, 0, this.width, this.height);
		}
	}, {
		key: "drawGround",
		value: function drawGround() {
			this.canvas.fillStyle = "#00ff00";
			this.canvas.fillRect(0, this.height - 10, this.width, this.height);
		}
	}]);

	return Canvas;
}();

var Player = function () {
	function Player(canvas) {
		_classCallCheck(this, Player);

		this.color = "#00A";
		this.x = 0;
		this.y = 0;
		this.width = 32;
		this.height = 32;
		this.canvas = canvas;
		this.gravityAffected = true;
	}

	_createClass(Player, [{
		key: "draw",
		value: function draw() {
			this.move();
			var canvas = this.canvas.getCanvas();
			canvas.fillStyle = this.color;
			canvas.fillRect(this.x, this.y, this.width, this.height);
		}
	}, {
		key: "bottomPosition",
		value: function bottomPosition() {
			return this.y + this.height;
		}
	}, {
		key: "isOnGround",
		value: function isOnGround() {
			return this.bottomPosition() === this.canvas.height;
		}
	}, {
		key: "applyGravity",
		value: function applyGravity() {
			if (this.gravityAffected && !this.isOnGround()) {
				this.y += 8;
			}
		}
	}, {
		key: "move",
		value: function move() {
			this.applyGravity();
			if (keydown.up) {
				this.y -= 4;
			}
			if (keydown.left) {
				this.x -= 4;
			}
			if (keydown.right) {
				this.x += 4;
			}
		}
	}]);

	return Player;
}();

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);

		this.FPS = 30;
		this.canvas = new Canvas(480, 320, 'body');
		this.player = new Player(this.canvas);
		this.startRunLoop();
	}

	_createClass(Game, [{
		key: "startRunLoop",
		value: function startRunLoop() {
			var _this = this;
			setInterval(function () {
				_this.draw();
				_this.player.move();
			}, 1000 / _this.FPS);
		}
	}, {
		key: "draw",
		value: function draw() {
			this.canvas.refresh();
			this.player.draw();
		}
	}]);

	return Game;
}();

var ourGame = new Game();