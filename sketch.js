
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,stand1,stand2;
var ground,slingshot;
var polygon_Img;
var score;

function preload(){
polygon_Img = loadImage("polygon.png");
}

function setup(){

var Canvas = createCanvas(500,500)


engine = Engine.create();
world = engine.world;
  Engine.run(engine);

score = 0;

ground = new Ground(250,450,250,20);

stand1 = new Stand(200,300,200,20);
stand2 = new Stand(350,200,200,20);

block1 = new Block(210,290,30,30);
block2 = new Block(250,290,30,30);
block3 = new Block(290,290,30,30);
block4 = new Block(230,250,30,30);
block5 = new Block(270,250,30,30);
block6 = new Block(250,220,30,30);
block7 = new Block(360,190,30,30);
block8 = new Block(400,190,30,30);
block9 = new Block(440,190,30,30);
block10 = new Block(380,150,30,30);
block11 = new Block(420,150,30,30);
block12 = new Block(400,120,30,30);

ball = Bodies.circle(50,100,20);
World.add(world,ball);

slingshot = new pentagon(this.ball,{x:100,y:100});


}
function draw() {
    background(56,44,44); 
   


    textSize(15);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",10,30);

    text("score:"+ score,300,50);
  
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    fill("pink");
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    imageMode(CENTER)
    image(polygon_Img ,ball.position.x,ball.position.y,40,40);
  
    slingshot.display();

   


}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
  slingshot.attach(ball.body)
}
function score(){
  if(this.visibility<0){
    score = score+1;
  }
  block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      background("lightgreen")
  }
  else{
      background("black")
  }
  console.log(backgroundImg);
}