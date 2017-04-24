class Player {

  constructor(canvas){
    this.color =  "#00A";
    this.x = 0;
    this.y = 0;
    this.width = 32;
    this.height = 32;
    this.canvas = canvas;
    this.gravityAffected = true;
  }

  draw(){
    this.move();
    let canvas = this.canvas.getCanvas();
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }

  bottomPosition(){
    return this.y + this.height;
  }

  isOnGround(){
    return this.bottomPosition() === this.canvas.height
  }

  applyGravity(){
    if (this.gravityAffected && !this.isOnGround() )
    {
      this.y += 8;
    }

  }

  move(){
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
}