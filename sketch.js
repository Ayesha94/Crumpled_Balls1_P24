
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	crumpled_ball=new Paper(70, 200, 20);
	Engine.run(engine);

	ground=new Ground(width/2, height-20, width, 10);
	side1=new  Dustbin(width-600, height-80, 20, 100);
	side2=new  Dustbin(width-420, height-80, 20, 100);
	side3=new Dustbin(width-510, height-35, 200, 20);
}


function draw() {
	background(0);
	rectMode(CENTER);
	crumpled_ball.display();
	ground.display();
  side1.display();
  side2.display();
  side3.display();
  //drawSprites();
 
}

function keyPressed()
{
	if(keyCode=== UP_ARROW)
	{
		Body.applyForce(crumpled_ball.body, crumpled_ball.body.position, {x: 65, y: -85})
	}

}


