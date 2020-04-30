const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var gameState;

function preload(){
  
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  brick1= new Brick (602,370,50,100,120);
  brick2= new Brick (600,200,50,100,120);
  ball1= new Ball(290,330);
 

  ground_bottom= new Ground (600,400,1200,10);
  ground_side= new Ground(1220,200,100,400);

  chain1=new Chain(ball1.body,{x:220,y:230});
  
  gameState=1;

}

function draw() {
  background(255);  

  Engine.update(engine);
  ground_bottom.display();
  ground_side.display();
  brick1.display();
  if(frameCount%5===0){
    //Matter.Body.setPosition(brick2.body,{x:-600,y:random(1,400)});
    //Matter.Body.setAngle(brick2.body,180);
   }
  brick2.display();
  
  chain1.display();
  

  ball1.display();
  

  if(ball1.body.position.y<=-20||ball1.body.position.x<=0){
    Matter.Body.setPosition(ball1.body,{x:-1000,y:100})
    gameState=2;
  }
  
  console.log(gameState);
  
  drawSprites();

}
function mouseDragged(){
  if(gameState===1){
  Matter.Body.setPosition(ball1.body,{x:mouseX+50,y:mouseY});
}
}
function mouseReleased(){
  if(gameState===1){
  chain1.fly();
  }
  
}