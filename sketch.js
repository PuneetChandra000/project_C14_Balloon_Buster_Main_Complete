// declaring variables
var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redB, blueB, greenB, pinkB;
var score = 0;

// using function preload
function preload(){
  // loading all images
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}


// using function setup
function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  // setting score to 0
   score = 0;

  // creating groups for balloons
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
  
}

 
function draw() {
  // background set to 0
 background(0);
  // moving ground
    scene.velocityX = -3;

    // using if condition
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating random continuous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  } 
  
  //  using if condition to destroy balloons
  if(arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 6;
  
  }
  
  if(arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 5;
  
  }
  
  if(arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  
  }
  
  if(arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  
  }
  
  // drawing sprites
  drawSprites();

  // displaying score
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

// using function to create balloons
function redBalloon() {
  // creating red balloons
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);

  // adding image
  red.addImage(red_balloonImage);

  // setting velocityX
  red.velocityX = 3;

  // setting lifetime
  red.lifetime = 150;

  // setting scale
  red.scale = 0.1;

  // adding red balloons to redB group
  redB.add(red);

}

function blueBalloon() {
  // creating blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
   // adding image
  blue.addImage(blue_balloonImage);
  // setting velocityX
  blue.velocityX = 3;
  // setting lifetime
  blue.lifetime = 150;
  // setting scale
  blue.scale = 0.1;
  // adding blue balloons to blueB group
  blueB.add(blue);

}

function greenBalloon() {
  // creating green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  // adding image
  green.addImage(green_balloonImage);
   // setting velocityX
  green.velocityX = 3;
  // setting lifetime
  green.lifetime = 150;
  // setting scale
  green.scale = 0.1;
  // adding green balloons to greenB group
  greenB.add(green);

}

function pinkBalloon() {
  // creating pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  // adding image
  pink.addImage(pink_balloonImage);
   // setting velocityX
  pink.velocityX = 3;
  // setting lifetime
  pink.lifetime = 150;
  // setting scale
  pink.scale = 1;
  // adding pink balloons to pinkB group
  pinkB.add(pink);

}
