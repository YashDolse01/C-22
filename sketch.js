
var ball;
var ground,top_wall1,top_wall2;
var BTN1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

	//Create the Bodies Here.

	ball=Bodies.circle(200,10,20,ball_options);
	World.add(world,ball);

ground =new Ground(500,650,1000,20);
 
	

	 top_wall1 = new Ground(900,560,20,150);
	 top_wall2 = new Ground(700,560,20,150);
	 
BTN1=createImg("Button.png");
BTN1.position(20,30);
BTN1.size(50,50);
BTN1.mouseClicked(Vforce);


ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);
 


  ground.show();
  
  top_wall1.show();
  top_wall2.show();
  
  Engine.update(engine);
  
  drawSprites();
 
}

function Vforce(){


Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

	
}

