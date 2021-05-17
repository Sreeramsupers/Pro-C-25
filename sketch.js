
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObject	
var world;


function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,450,width,20);
	dustbinObj=new dustbin(1200,450);
	paperObject = new Paper(200,100,50)

	Engine.run(engine);
	Engine.update(engine);
  
}


function draw() {
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}
function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:430, y:-500})
	}
}

