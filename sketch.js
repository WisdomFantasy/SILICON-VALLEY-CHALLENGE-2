var boyimg, boy;
var gameState = 0;

function preload() {
  boyknifeimg = loadAnimation(
    "KNIFE 1.png",
    "KNIFE 2.png",
    "KNIFE 3.jpeg",
    "KNIFE 4.png",
    "KNIFE 5.png"
  );
  boygunimg = loadAnimation("GUN 1.png", "GUN 2.png", "GUN 3.png");
  //boyjetpackimg=loadAnimation()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startButton = createSprite(600, 400, 120, 60);
  startButton.shapeColor = "black";

  showbutton = createSprite(500, 200, 50, 50);
  showbutton.shapeColor = "red";

  boyknife = createSprite(100, 100);
  boyknife.addAnimation("boyknifeimg");
  boyknife.visible = false;

  boygun = createSprite(100, 100);
  boygun.addAnimation("boygunimg");
  boygun.visible = false;

  boyjetpack = createSprite(100, 100);
  //boyjetpack.addAnimation("boyjetpackimg")
  boyjetpack.visible = false;
}

function draw() {
  background("black");

  if (mousePressedOver("showbutton")) {
    gamestate = "show";
  }
}
/*if(gamestate==="show"){
    boygun.visible=true
    boyknife.visible=true
    boyjetpack.visible=true
}*/
