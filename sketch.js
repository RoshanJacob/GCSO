var car,wall;
var speed,weight;

function setup() {
   createCanvas(1600,400,car);

   speed = random(55,90);
   weight = random(400,1500);

  car = createSprite(300,200,60,60);
  car.velocityX = speed;
  car.weight = weight;

  wall = createSprite(1200,200,70,height/2);
 
}

function draw() {
  background(0); 
  if(wall.x - car.x < wall.width/2 + car.width/2 )
  {
    
  car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation > 180){
      car.shapeColor = color("red");
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color("yellow");
    }

    if(deformation < 100){
      car.shapeColor = color("green");
    }

  }

  drawSprites();
  
}