var bullet,wall,thickness,speed,weight,damage;


function setup() {
  createCanvas(1600,400);
 thickness=random(22,83);
 speed=random(223,321);
 weight=random(30,52);
 wall=createSprite(1000,200,thickness,height/2);
 bullet=createSprite(100,200,50,20);
 bullet.shapeColor="white";
 wall.shapeColor="grey";
 bullet.velocityX=speed;

}

function draw() {
  background(0);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
   damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
  fill("white");
  textSize(20);
  text("damage="+damage,200,80);
  drawSprites();
}
function hasCollided(b,w){
  bullets=b.x+b.width;
  walls=w.x;
  if(bullets>=walls){
    return true;
  }
  return false;
}