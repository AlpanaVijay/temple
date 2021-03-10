var player;
var coins;
var bg;

function preload() {
  bg = loadImage("bg.png")
}

function setup() {
  createCanvas (600,400);
  player = new Player(50,200);
  ground = new Ground();
  
}

function draw() {
  background(bg);
  
  player.display();
  ground.display();
  //player.collide(ground)
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
     player.jump();
  }
     
}