
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,Ground1,treeImg;
var boy,boyImg;
var stones;
var mango1,mango2,mango3,mango4;

function preload()
{
	boyImg=loadImage("boy.png");
	treeImg=loadImage("tree.png");
}

function setup() {
	createCanvas(1000,650);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Ground1=new Ground();
	stones=new Stone(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(700,300,40);
	tree=createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale=0.125;
	attach=new Throw(stones.body,{x:100,y:465});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("gray");

  fill("black");
  textSize(18);
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango2);
  detectCollision(stones,mango2);
  
  drawSprites();
  Ground1.display();
  attach.display();
  stones.display()
  mango1.display();
  mango2.display();
  mango3.display();
  mango3.display();
  mango4.display();
 
  
}
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	attach.fly();
}
function detectCollision(Istones,Imango){  //parameters

		if(Istones.x-Imango.x<Imango.diametre+Istones.diametre&&
		Imango.x-Istones.x<Imango.diametre+Istones.diametre&&
		Istones.y-Imango.y<Imango.diametre+Istones.diametre&&
		Imango.y-Istones.y<Imango.diametre+Istones.diametre
		){
			Matter.Body.setStatic(Imango.body,false);

		  return true;   
		}
	}
		
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465})
		attach.Launch(stones.body);
	}
}


