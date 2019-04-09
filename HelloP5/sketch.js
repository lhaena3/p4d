function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  // Say Hi
  line(20, 20, 20, 100);
  line(60, 20, 60, 100);
  line(20, 60, 60, 60);
  line(100, 20, 100, 100);
  
  // Face
  /*
  */
  ellipse(200, 200, 200);
  ellipse(200, 200, 15);
  ellipse(160, 160, 20);
  ellipse(240, 160, 20);
  arc(200, 200, 110, 110, 0, PI);
  
  //TODO: add a cation at the bottom
}