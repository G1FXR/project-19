var alienshipImg,alienship;
var meteorImg,meteor,meteorGroup;
var spaceImg,space ;
var enemy
var gamestate = "play";

function preload(){
alienshipImg = loadImage("PngItem_850683.png");
meteorImg = loadImage("meteor_PNG41.png");
spaceImg = loadImage("image7.png");
}

function setup() {
 createCanvas(600,600);
    space = createSprite(300,300)
    space.addImage("space",spaceImg)
    space.velocityY = 1

    alienship = createSprite(300,300,50,50)
    alienship.addImage("alienship",alienshipImg)
    alienship.scale = 0.15



}

function draw() {
 background(200);
 if(gamestate === "play")




    if(space.y >= 320){
        space.y = 300

    }
    drawSprites()

    if(keyDown("left_arrow")){
        alienship.x = alienship.x - 3.5
    }

    if(keyDown("right_arrow")){
        alienship.x = alienship.x + 3.5
    }

    meteor()










}

function meteor(){

    if(frameCount%200==0){
        enemy = createSprite(200,200,50,50)
        enemy.addImage(meteorImg)
        scale

    }





}



