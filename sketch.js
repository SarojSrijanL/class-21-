var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,400,50,80);
  movingRect = createSprite(400,400,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject3 = createSprite(300,100,50,50)
  gameObject2 = createSprite(200,100,50,50)
  gameObject1 = createSprite(100,100,50,50)
  gameObject4 = createSprite(400,100,50,50)
  gameObject1.shapeColor = "green"
  gameObject2.shapeColor = "green"
  gameObject3.shapeColor = "green"
  gameObject4.shapeColor = "green"
}

function draw() {
  background(0);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  
  
if(isTouching(gameObject4,movingRect)){
  gameObject4.shapeColor="blue";
  movingRect.shapeColor="blue";
} 
else{
  gameObject4.shapeColor="green";
  movingRect.shapeColor="green";
}
  drawSprites();
}