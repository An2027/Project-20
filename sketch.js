//create the variables for the car and wall
var car, wall;
//create the variables for speed and weight
var speed, weight;

function setup() {
  //create the canvas
  createCanvas(1600,400);

  //set the random values for the speed and weight
  speed.random(55,90);
  weight.random(400,1500);

  //create a sprite for the car
  car.createSprite(50,200,50,50);
  //set the velocity for the car
  car.velocityX = speed;

  //create a sprite for the wall
  wall.createSprite(1500,200,50,height/2);

  // create a variable for the deformation
  var deformation =  0.5 * weight * speed * speed/22500 
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x< (car.width+wall.width)/2)){
car.velocityX = 0;
var deformation=0.5 * weight * speed* speed/22500;
if(deformation>180){
  car.shapeColor="red";
}

if(deformation<180 && >100){
  car.shapeColor="yellow";
}

if(deformation<100){
  car.shapeColor="green";
}
  }
  drawSprites();
}