var guide1, guide1_img;
var next, next_img;
var play, play_img;

var gameState="guide1";
var wall1,wall2,wall3,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,
wall14,wall15,wall15,wall16,wall17,wall18,wall19,wall20,
wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,
wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,
wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall47,
wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,
wall53,wall54,wall55,wall56,wall57,wall57,wall58,wall59,wall60;

var player1 ;

function preload() {
  guide1_img = loadImage("asset/Starter.png");
  guide2_img = loadImage("asset/guide2.png");
  next_img = loadImage("asset/next.png");
  play_img = loadImage("asset/play.png");
  level1_img = loadImage("asset/level1.png")
 
  playerImage=loadAnimation("asset/left1.png","asset/left2.png","asset/left3.png","asset/left4.png",
  "asset/left5.png","asset/left6.png")
  player1Image=loadAnimation("asset/right1.png","asset/right2.png");

}
function setup() {
  createCanvas(1200,800);
  guide1func();

}
function draw() {
  background("black");
  fill(255)
  textSize(20)
  text(mouseX + "," + mouseY, 50, 50)

  //player1.velocityX = 0;
  //player1.velocityY = 0;


  // hi my code I started again how are you ? :) 

  //@aryashBawa :) :) :) 


  if(keyDown(UP_ARROW)){
    player1.y = player1.y-3 
  }
  if(keyDown(DOWN_ARROW)){
    player1.y = player1.y+3 ;
  }
  if(keyDown(RIGHT_ARROW)){
    player1.x = player1.x+3  ;
  }
  if(keyDown(LEFT_ARROW)){
    player1.x = player1.x-3 
  }

player1.bounceOff(wall1);

player1.bounceOff(wall4);
player1.bounceOff(wall6);
player1.bounceOff(wall5)

player1.bounceOff(wall10);
player1.bounceOff(wall11);
player1.bounceOff(wall12);
player1.bounceOff(wall13);
player1.bounceOff(wall14);
player1.bounceOff(wall15);
player1.bounceOff(wall16);
player1.bounceOff(wall17);
player1.bounceOff(wall18);
player1.bounceOff(wall19);
player1.bounceOff(wall20);
player1.bounceOff(wall21);
player1.bounceOff(wall22);
player1.bounceOff(wall23);
player1.bounceOff(wall24);
player1.bounceOff(wall25);
player1.bounceOff(wall26);
player1.bounceOff(wall27);
player1.bounceOff(wall28);
player1.bounceOff(wall29);
player1.bounceOff(wall30);
player1.bounceOff(wall31);
player1.bounceOff(wall32);
player1.bounceOff(wall33);
player1.bounceOff(wall34);
player1.bounceOff(wall35);
player1.bounceOff(wall36);
player1.bounceOff(wall37);
player1.bounceOff(wall39);
player1.bounceOff(wall40);
player1.bounceOff(wall41);
player1.bounceOff(wall42);
player1.bounceOff(wall43);
player1.bounceOff(wall45);
player1.bounceOff(wall46);
player1.bounceOff(wall47);
player1.bounceOff(wall48);
player1.bounceOff(wall49);
player1.bounceOff(wall50);
player1.bounceOff(wall51);
player1.bounceOff(wall52);


if (mousePressedOver(next)) {
  guide2func();
}

if (mousePressedOver(play)) {
  level1func();
}

drawSprites();

}

function guide1func() {
  guide1 = createSprite(width / 2, height / 2, width, height);
  guide1.addImage(guide1_img);
  guide1.scale = 0.5;

  next = createSprite(200, height - 150);
  next.addImage(next_img);
  next.scale = 0.7

}


function guide2func() {
  guide1.destroy();
  next.destroy();
  guide2 = createSprite(width / 2, height / 2, width, height);
  guide2.addImage(guide2_img);
  guide2.scale = 0.5;

  play = createSprite(width/2, height - 170);
  play.addImage(play_img);
  //play.scale = 0.7
  gameState="guide2";

}

function level1func(){
  play.destroy();
  next.destroy();
  guide2.destroy();
  gameState= "level1"
  level1 = createSprite(width / 2, height / 2, width, height);
  level1.addImage(level1_img);
  level1.scale = 0.43;

  player1=createSprite(100,765,10,10);
  player1.addAnimation("player1",player1Image);
  player1.scale=0.6;
//camera.position.x = player1.x;
//camera.position.y = player1.y;

wall1=createSprite(55,713,150,20);
//wall2=createSprite(180,625,170,20);
//wall3=createSprite(340,570,170,20);
wall4=createSprite(280,680,20,140);
//wall5=createSprite(435,560,20,170);
wall6=createSprite(140,500,170,20);
wall7=createSprite(225,400,20,220);
wall8=createSprite(140,290,180,20);
wall9=createSprite(45,230,20,130);
wall10=createSprite(100,120,20,130);
wall11=createSprite(225,120,20,200);
wall12=createSprite(164,170,100,20);
wall13=createSprite(200,170,100,20);
wall14=createSprite(320,170,150,20);
wall15=createSprite(310,50,155,30);
wall16=createSprite(450,50,155,20);
wall17=createSprite(350,300,30,200);
wall18=createSprite(520,650,200,20);
wall19=createSprite(400,750,250,20);
wall20=createSprite(520,770,20,70);
wall21=createSprite(625,690,10,70);
wall22=createSprite(655,725,70,10);
wall23=createSprite(700,750,10,70);
wall24=createSprite(750,780,90,10);
wall25=createSprite(1190,450,30,900);   // side wall R
wall26=createSprite(10,450,30,900);    // side wall L 
wall27=createSprite(600,10,1500,30);  // side wall U 
wall28=createSprite(600,790,1500,30);// side wall D 
wall29=createSprite(570,550,170,20);
wall30=createSprite(492,480,20,150);
wall31=createSprite(450,400,110,20);
wall32=createSprite(400,290,20,230);
wall33=createSprite(450,320,75,20);
wall34=createSprite(650,255,310,20);
wall35=createSprite(635,475,170,20);
wall36=createSprite(550,400,20,170);
wall37=createSprite(635,320,170,20);
wall38=createSprite(710,400,20,170);
wall39=createSprite(800,110,280,20);
wall40=createSprite(590,75,140,20);
wall41=createSprite(575,200,20,140);
wall42=createSprite(610,150,100,20);
wall43=createSprite(950,180,20,140);
wall44=createSprite(1020,240,150,20);
wall45=createSprite(1100,320,20,150);
wall46=createSprite(800,320,20,100);
wall47=createSprite(830,360,90,10);
wall48=createSprite(860,390,10,75);
wall49=createSprite(950,430,190,10);
wall50=createSprite(1050,530,10,180);
wall51=createSprite(960,530,10,70);
wall52=createSprite(920,590,60,10);
//wall53=createSprite(810,625,130,20);


wall1.visible= false;
//wall2.visible = false;
//wall3.visible = false;
wall4.visible = false;
//wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
wall8.visible = false;
wall9.visible = false;
wall10.visible = false;
wall11.visible = false;
wall12.visible = false;
wall13.visible = false;
wall14.visible = false;
wall15.visible = false;
wall16.visible = false;
wall17.visible = false;
wall18.visible = false;
wall19.visible = false;
wall20.visible = false;
wall21.visible = false;
wall22.visible = false;
wall23.visible = false;
wall24.visible = false;
wall25.visible = false;
wall24.visible = false;
wall26.visible = false;
wall27.visible = false;
wall28.visible = false;
wall29.visible = false;
wall30.visible = false;
wall31.visible = false;
wall32.visible = false;
wall33.visible = false;
wall34.visible = false;
wall35.visible = false;
wall36.visible = false;
wall37.visible = false;
wall38.visible = false;
wall39.visible = false;
wall40.visible = false;
wall41.visible = false;
wall42.visible = false;
wall43.visible = false;
wall44.visible = false;
wall45.visible = false;
wall46.visible = false;
wall47.visible = false;
wall48.visible = false;
wall49.visible = false;
wall50.visible = false;
wall51.visible = false;
wall52.visible = false;
wall53.visible = false;

player1.debug = false

player1.setCollider("rectangle",0,0,70,70);

}

