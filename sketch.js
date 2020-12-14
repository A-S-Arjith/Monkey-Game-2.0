var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivaltime = 0

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 200);

  monkey = createSprite(50, 180, 20, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(300, 200, 600, 20);

  obstaclesGroup = new Group();
  bananaGroup = new Group();

  survivaltime = 0;
}

function draw() {
  background(180);
  text("survival time: " + survivaltime, 450, 50);

    survivaltime = Math.round(frameCount/frameRate());
    
  if (keyDown("space") && monkey.y >= 150) {
      monkey.velocityY = -13;
    }
    monkey.velocityY = monkey.velocityY + 0.8

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
    spawnbananas();
    spawnObstacles();
    if(monkey.isTouching(obstaclesGroup)){
      
    }

  monkey.collide(ground);
  drawSprites();
}
function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(610, 175, 10, 40);
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.velocityX = -6;
       
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;

    obstaclesGroup.add(obstacle);
  }
}

function spawnbananas() {
  if (frameCount % 60 === 0) {
    banana = createSprite(600, 100, 40, 10);
    banana.y = Math.round(random(25, 90));
    banana.addImage(bananaImage);
    banana.velocityX = -6;
    
    banana.scale = 0.1;
    banana.lifetime = 200;

    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);

  }

}