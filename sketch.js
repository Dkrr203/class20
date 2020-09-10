var fixedrect, movingrect


function setup() {
  createCanvas(1600,800);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300, 250, 40, 40)
}

function draw() {
fixedrect.shapeColor= 'black'
movingrect.shapeColor= 'purple'
movingrect.y=mouseY;
movingrect.x=mouseX;
  background("blue");  
  drawSprites();
}