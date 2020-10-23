//creating the car and the wall
var car,wall;

//creating the speed and height
var speed,weight;

function setup() {
  createCanvas(1600,400);

 
  //creating the car
 car = createSprite(500, 200, 50, 50);
 car.shapeColor = color(255);
 
 //setting random values for the spped and height
speed = random(55,90);

weight = random(400,1500);
 
 car.velocityX = speed;
 


//creating the wall
wall = createSprite(1500,200,60,height/2);


}

function draw() {
  background(0);  

  if(wall.x-car.x<(car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight* speed * speed/22509;
    if(deformation>180) {
      car.shapeColor = color(255,0,0);
    }

    if(deformation<100 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }
  

    if(deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}