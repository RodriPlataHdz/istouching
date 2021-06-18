function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  rect1 = createSprite(400, 200, 58, 58);
  rect1.shapeColor = "blue";
  rect2 = createSprite(200, 200, 50, 50);
  rect2.shapeColor = "blue";
}

function draw() {
  background(255,115,10);  

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

istouching(rect1, rect2);


  drawSprites();
}

function istouching(object1, object2){
  if(object2.x - object1.x < object1.width/2 + object2.width/2 && object1.x - object2.x < object1.width/2 + object2.width/2 
    && object2.y - object1.y < object1.height/2 + object2.height/2 && object1.y - object2.y < object1.height/2 + object2.height/2 ){
    object1.shapeColor = "green";
    object2.shapeColor = "green";
  }
  
  else {
    object1.shapeColor = "blue";
    object2.shapeColor = "blue"; 
  }
}