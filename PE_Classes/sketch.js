var myBall;

function setup() {
    createCanvas(600, 300);
    
    myBall = new ball();
  
    console.log(myBall);

}

function draw() {
  background(55, 43, 168);
    myBall.bounce();
    myBall.move();
    myBall.display();
  
}


