class Brick{
  constructor(x, y, width, height,colour) {
    var options = {
        'restitution':1.0,
        'friction':9.0,
        'density':0.8,
        'gravity':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.colour=colour;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CORNER);
    fill(this.colour);
    strokeWeight(4);
    stroke(this.colour);
    rect(0, 0, this.width, this.height);
    pop();
  }
};