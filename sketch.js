
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;


	var bodies_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	

	//Create the Bodies Here.
 ball = Bodies.circle(200,600,40,bodies_option)
World.add(world,ball)
 groundObj=new Ground (width/2,670,width,20)
 leftSide=new Ground (900,600,20,120)
 rightSide=new Ground(650,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
  groundObj.display()
  leftSide.display()
  rightSide.display()
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.position,{x:200,y:-200})
   }
}

