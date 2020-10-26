
var SERVE = 1;
var PLAY = 2;
var END = 3;
var ball,pc,npc,edges,leftLine,leftDoublesLine,rightDoublesLine,rightLine,net,serviceBox1,serviceBox2
,middleLine,gameState,racket,ballImg

function preload(){
  racket = loadImage("images/racket.png");
  ballImg = loadImage("images/ball.png");
}
function setup() {
  createCanvas(800,400);
  leftLine = createSprite(600,400,5,800);
  leftDoublesLine = createSprite(550,400,5,800);
  rightLine = createSprite(200,400,5,800);
  rightDoublesLine = createSprite(250,400,5,800);
  net = createSprite(400,200,400,5);
  serviceBox1 = createSprite(400,290,400,5);
  serviceBox2 = createSprite(400,110,400,5);
  middleLine = createSprite(400,200,5,180);
  ball = createSprite(400, 340, 5, 5);
  ball.addImage(ballImg);
  ball.scale = 0.1;
  //npc = new Player (400,50);
  //pc = new Player (400,350);
  pc = createSprite (400,350,20,20);
  pc.addImage(racket);
  pc.scale = 0.3
  npc = createSprite (400,50,20,20);
  npc.addImage(racket);
  npc.scale = 0.3
  edges = createEdgeSprites(); 
  gameState = SERVE;
}

function draw() {
  background(247,247,247);
 
 

  ball.shapeColor = "yellow";
  /*pc.shapeColor = "blue";
  npc.shapeColor = "red";*/

  npc.x = ball.x;

  if (keyDown("space") && gameState === SERVE){
    ball.velocityY = -3;
    gameState = PLAY;
    console.log(gameState + "a");
  }

  if (ball.isTouching(npc) && gameState === PLAY){
    ball.velocityY = random(3,6);
    ball.velocityX = random(0,4);
  }

  if (ball.isTouching(pc) && gameState === PLAY){
    ball.velocityY = random(-3,-6);
    ball.velocityX = random(3,-4);
  }
  

  if (keyDown ("up")){
    pc.velocityY = -3;
  }

  if (keyDown ("down")){
    pc.velocityY = 3;
  }

  if (keyDown ("left")){
    pc.velocityX = -3;
  }

  if (keyDown ("right")){
    pc.velocityX = 3;
  }

  /*if (pc.isTouching(edges[0])){
    pc.velocityX *= -1;
    pc.velocityY *= 0;
  }
  if (pc.isTouching(edges[1])){
    pc.velocityX *= -1;
    pc.velocityY *= 0;
  }
  if (pc.isTouching(edges[2])){
    pc.velocityX *= 0;
    pc.velocityY *= -1;
  }*/
  if (pc.isTouching(edges[3])){
    pc.velocityX *= 0;
    pc.velocityY *= -1;
  }

  if (pc.isTouching(leftLine) || pc.isTouching(rightLine) ){
    pc.velocityX *= -1;
  
    console.log("pc.velocityX" + pc.velocityX);
  }
  if(npc.isTouching(leftLine)){
    npc.velocityX = 1;

  } 
  if(ball.isTouching(rightLine)){

    npc.velocityX = -1;
    console.log("npc.velocityX" + npc.velocityX);
  }

  /*if (npc.isTouching(edges[0])){
    npc.velocityX *= -1;
    npc.velocityY *= 0;
  }
  if (npc.isTouching(edges[1])){
    npc.velocityX *= -1;
    npc.velocityY *= 0;
  }*/
  if (npc.isTouching(edges[2])){
    npc.velocityX = 0;
    npc.velocityY *= -1;
  }
  /*if (npc.isTouching(edges[3])){
    npc.velocityX *= 0;
    npc.velocityY *= -1;
  }*/

  /*if (ball.x<200){
    gameState = SERVE;
  }

  if (ball.x>600){
    ngameState = SERVE;
  }*/

  

 
 // if (frameCount % 70 === 0){
  //npc.y = npc.y +20 
  //for (i = 0; i<=20; i += 1){
    //npc.y += i;
  //} 

  if (npc.isTouching(net)){
    npc.velocityY = -1;
  }

  if (pc.isTouching(net)){
    pc.velocityY = 1;
  }

  if (ball.isTouching(leftLine) || ball.isTouching(rightLine) || ball.y >400){
    ball.x = 400;
    ball.y = 330;
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
    

  drawSprites();

  //pc.display();
  //npc.display();
}