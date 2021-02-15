


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paperSprite = new Paper

	groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)   

	wallSprite1 = createSprite(425, groundSprite.y, 200, 10)
	wallSprite1.shapeColor = "red"
	

	wallSprite2 = createSprite(wallSprite1.x-((425/4)-1), groundSprite.y-20, 10, 50)
	wallSprite2.shapeColor = "red"

	wallSprite3 = createSprite(wallSprite1.x+(425/4)-0.55, groundSprite.y-20, 10, 50)
	wallSprite3.shapeColor = "red"



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, paperBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	wallBody1 = Bodies.rectangle(425+(425/4)-0.55, groundSprite.y-20, 20, 50 , {isStatic:true} );
	World.add(world, wallBody1);
	fill("red")
	stroke("red")
	


	wallBody2 = Bodies.rectangle(425+(425/4)-0.55, groundSprite.y-20, width, 50 , {isStatic:true} );
	World.add(world, wallBody2);
	fill("red")
	stroke("red")

	wallBody3 = Bodies.rectangle(425+(425/4)-0.55, groundSprite.y-20, width, 50 , {isStatic:true} );
	World.add(world, wallBody3);
	fill("red")
	stroke("red")


	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	paperSprite.x= paperBody.position.x 
	paperSprite.y= paperBody.position.y 
	drawSprites();
	wallBody1.display()
	wallBody2.display()
	wallBody3.display()
	keyPressed() 
  }

  function keyPressed() {
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
    }
}




