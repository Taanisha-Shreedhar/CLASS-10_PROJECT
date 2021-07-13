var ship, moving_ship
var sea, sea_BG

function preload(){
moving_ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_BG = loadImage("sea.png");
}

function setup(){
  createCanvas(1535,750);

  sea= createSprite(770, 375)
  sea.addImage("The sea",sea_BG);
  sea.x = sea.width/2;

  ship = createSprite(500, 375);
  ship.addAnimation("moving",moving_ship);
  ship.scale = 0.5;
}

function draw() {
  background("white");
  sea.velocityX = -2;
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
 drawSprites();
}