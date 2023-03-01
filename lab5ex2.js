let x;
let speedX;
let y;
let speedY;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  x = 30;
  speedX = 3;
  y = 200;
  speedY = 3;

}

function draw() {
  background(20, 150, 130);
  myCatcher(x, y);

  x = x + speedX;
  y = y + speedY;
  
  if (x > 330) {
    speedX = speedX * -1;
  }

  if (x < 28) {
    speedX = speedX * -1;
  }

  if (y > 350) {
    speedY = speedY * -1;
  }

  if (y < 50) {
    speedY = speedY * -1;
  }
}

function myCatcher(x, y, size) {
  push();
  translate(x, y);
  //left leg
  noStroke();
  fill("orangered");
  rect(-10, 9, 15);
  rect(-20, 15, 15);
  rect(-30, 25, 15);
  //left arm
  noStroke();
  fill("orangered");
  rect(-10, 0, 15);
  rect(-20, -10, 15);
  //right leg
  fill("orangered");
  rect(36, 9, 15);
  rect(46, 15, 15);
  rect(56, 25, 15);
  //right arm
  noStroke();
  fill("orangered");
  rect(36, 0, 15);
  rect(45, -9, 15);
  //bottom body
  noStroke();
  fill("red");
  ellipse(20, 10, 50);
  //head
  noStroke();
  fill("red");
  ellipse(20, -25, 40);
  //eyes
  fill("white");
  ellipse(25, -30, 15); //right white
  ellipse(15, -30, 15); //left white
  fill("black");
  ellipse(25, -30, 5);
  ellipse(15, -30, 5);
  //the eyes blink
  //smile
  arc(21, -19, 15, 15, 5, 180);
  pop();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
      speedX = speedX * -1;
    } else if (keyCode === RIGHT_ARROW){
      speedX = speedX * -1;
    }
  if (keyCode === UP_ARROW){
      speedY = speedY * -1;
    } else if (keyCode === DOWN_ARROW){
      speedY = speedY * -1;
    }
}
