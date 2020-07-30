var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var safezone1,safezone2,safezone3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

    
		


    


	packageBody = Bodies.circle(width/2 , 200 , 5, {isStatic:true} );
	World.add(world, packageBody);
	
	
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 safezone1 = new Safezone(380,670,200,20);
	 safezone2 = new Safezone(273,606,20,150);
     safezone3 = new Safezone(487,606,20,150);
	 
	Engine.run(engine);
  
	keyPressed(); 
		
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  safezone1.display();
  safezone2.display();
  safezone3.display();

  drawSprites();
 
}

function keyPressed() {
 if(keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
	packageBody.restitution = 0.8;
	
}
}
