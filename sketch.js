


var sword, fruit, Enemy, r, monster, fruits;

var swordImage,gameoverImage;

var fruitsGroup, EnemyGroup;

function preload(){
  swordImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage = loadImage("alien1.png");
  gameoverImage = loadImage("gameover.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  score = 0;
  
  fruitsGroup = new Group();
  Enemygroup = new Group();
}

function draw(){
  
  
  background("lightblue");
  
 
    sword.y = World.mouseY;
    sword.x = World.mouseX;
  if(sword.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach();
  }
   if(sword.isTouching(Enemygroup)){
    fruitsGroup.destroyEach();
       Enemygroup.destroyEach();
  }
  
  
  fruits()
  Enemy();
 
  
 drawSprites();
  text("Score: "+ score, width-100,50);
}

function fruits(){
if(World.frameCount%80 === 0){
  fruit = createSprite(width,200,20,20);
  fruit.scale = 0.2;
  //fruit.debug = true;
  r = Math.round(random(1,4));
 if(r == 1){
   fruit.addImage(fruit1);
 } else if (r == 2){
   fruit.addImage(fruit2);
 }else if (r == 3){
   fruit.addImage(fruit3);
 } else {
   fruit.addImage(fruit4);
 }
  fruit.y = Math.round(random(50,height-50));
  
  fruit.velocityX = -7;
  fruit.setLifetime = 100;
  
  fruitsGroup.add(fruit);
 
  }
}

function Enemy(){
  if(World.frameCount % 200 === 0){
    monster = createSprite(width,200,20,20);
    monster.addImage("moving", monsterImage);
    monster.y = Math.round(random(height-10,height));
    monster.velocityX = -8;
    monster.setLifetime = 150;
    
    Enemygroup.add(monster);
  }
}
