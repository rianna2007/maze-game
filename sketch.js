var bg;

function preload (){
backgroundImage=loadImage("images/bg.jpg");

}


function setup(){
bg=createSprite(displayWidth, displayHeight);
bg.addImage(backgroundImage);
}

function draw (){


drawSprites ();
}