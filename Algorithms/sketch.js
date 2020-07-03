var Mrect, Frect;

function setup(){
createCanvas(400,400);
Mrect= createSprite(400,400,20,20)
Mrect.shapeColor="green";
Frect= createSprite(0,0,20,20)
Frect.shapeColor="green";
Mrect.velocityX=-1;
Frect.velocityX=1;
Mrect.velocityY=-1;
Frect.velocityY=1;
}

function draw(){
  background(0);
bounceoff(Frect,Mrect)

  drawSprites();
}

