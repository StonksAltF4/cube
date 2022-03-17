var cube















function setup() {
  createCanvas(600,500);
cube = createSprite(150,150,20,20)
cube.shapeColor = 'red'

}

function draw() 
{
  background('orange');
  drawSprites()
  if(keyIsDown(UP_ARROW)){
  cube.y = cube.y -3

  }
  if(keyIsDown(DOWN_ARROW)){
    cube.y = cube.y +3
  }
  if(keyIsDown(RIGHT_ARROW)){
    cube.x = cube.x +3
  }
  if(keyIsDown(LEFT_ARROW)){
    cube.x = cube.x -3
  }




}

  



