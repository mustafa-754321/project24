
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//creating the variables
var boxleft;
var boxright;
var boxbottom;
var ground;
var trash;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	//create the variable and giving them a purpose
	boxbottom = new Box (900,height-55,200,20);

	boxleft = new Box (boxbottom.body.position.x-90,boxbottom.body.position.y-60,20,100);
	
	boxright = new Box (boxbottom.body.position.x+90,boxbottom.body.position.y-60,20,100);
	
	ground = new Box (width/2,height-40,width,20);

	trash = new Paper (100,100,20);
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  //making them famous by all 
  //(getting displayed)
  boxbottom.display();
  boxleft.display();
  boxright.display();
  ground.display();
  trash.display();
}
//writing the function to give the ball some sugar(force) so it can jump (gettying thrown by the up arrow)
function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(trash.body,trash.body.position,{x:22,y:-15});
}


}

