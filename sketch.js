var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor(80,80,80)
  car.velocityX=speed;
  deformation=(0.5*speed*weight*speed)/22500
}

function draw() {
  background(255,255,255);  
  isTouching(car,wall);
  if(isTouching(car,wall)){
    console.log(deformation)
  }
  drawSprites();
}

function isTouching(sprite,target){
  if(sprite.y-target.y<sprite.height/2+target.height/2&&
    target.y-sprite.y<sprite.height/2+target.height/2&&
    sprite.x-target.x<sprite.width/2+target.width/2&&
    target.x-sprite.x<sprite.width/2+target.width/2 ){
      return true;
    }
 else{
   return false;
 }
}