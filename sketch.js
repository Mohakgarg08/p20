var cat,catImage1, catImage2, catImage3; 
var garden,gardenImage;
var mouse,mouseImage1, mouseImage2, mouseImage3; 




function preload() {
    //load the images here
 catImage1 = loadAnimation("images/cat1.png")
 catImage2 = loadAnimation("images/cat2.png","images/cat3.png")
 catImage3 = loadAnimation("images/cat4.png")

 mouseImage1 = loadAnimation("images/mouse1.png")
mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImage3 = loadAnimation("images/mouse4.png")

 gardenImage = loadImage("images/garden.png")


}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870, 600, 20, 20);
    cat.scale=0.1
    cat.addAnimation("cat1",catImage1)

   mouse = createSprite(200, 600, 20, 20);
   mouse.scale = 0.1
   mouse.addAnimation("mouse1",mouseImage1)
}

function draw() {

    background(gardenImage);

    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat3", catImage3); 
        cat.changeAnimation("cat3")
        cat.x = 300; 
        cat.scale = 0.2; 
         
        mouse.velocityX = 0
        mouse.addAnimation("mouse3",mouseImage3);
        mouse.changeAnimation("mouse3")
        mouse.scale = 0.15
    
       
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX= - 5
    cat.addAnimation("cat2",catImage2)
   cat.changeAnimaton("cat2")

    mouse.addAnimation("mouse2", mouseImage2); 
mouse.changeAnimation("mouse2")
}
}
