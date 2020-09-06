var bullet,wall;
var speed,weight;
var damage,thickNessOfWall;

function setup() {
  createCanvas(1350,400);
  
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  thickNessOfWall = random(22,83);
  wall = createSprite(1200,200,thickNessOfWall,200);
  wall.shapeColor = "blue";

  
}

function draw() {
  background("black"); 

  drawSprites();

  if(wall.x - bullet.x < bullet.width/2  +wall.width/2 ){
    bullet.collide(wall);
    
    damage = ((((0.5*weight)*speed)*speed)/(thickNessOfWall*(thickNessOfWall*thickNessOfWall)))
    console.log(damage);

    if(damage <= 10){
      bullet.shapeColor = "green";
    }
    if (damage > 10){
      bullet.shapeColor = "red";
    }
  }

}