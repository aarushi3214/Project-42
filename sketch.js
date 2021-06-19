var iss, issimg;
var spacecraft;
var hasDocked = false;
var img1,img2,img3,img4;
var bgimg;

function preload(){
  img1 = loadImage("spacecraft1.png");
  img2 = loadImage("spacecraft2.png");
  img3 = loadImage("spacecraft3.png");
  img4 = loadImage("spacecraft4.png");
  bgimg = loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
}

function setup() {
  createCanvas(600,400);

  spacecraft = createSprite(285, 250);
  spacecraft.addImage(img1);
  spacecraft.scale = 0.15;

  iss = createSprite(300, 130);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bgimg); 
  
  spacecraft.addImage(img1);

  if(!hasDocked){
    //write code to set random x position for spacecraft
    spacecraft.x = spacecraft.x + random(-1,1);
    
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(img1);
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(img2);
      spacecraft.x = spacecraft.x+1;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(img3);
      spacecraft.x = spacecraft.x-1;
    }
  }
    if(spacecraft.y <= (iss.y + 40) && spacecraft.x <= (iss.x - 10)){
      hasDocked = true;
      fill(255);
      text("DOCKING SUCCESSFUL", 200,300);
    }

    drawSprites();
  
}
