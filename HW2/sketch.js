// Haena Lee
// IGME -609 Project 2
// Interactive Scene
// February 25, 2019

var waveX;
var sunX;

function setup() {
  createCanvas(500,400);
  noStroke();
  waveX = 0;
  sunX = 0;
}

function draw() {
 
  /* sky */
  background(209, 255, 253);
  background(145, 251, 255, frameCount);
	background(8, 47, 86, frameCount);
 
  sea(0,height/2);
  wave(waveX,height);
  sun(sunX,height/8);
  ship(width,height);
  seagul(mouseX,mouseY);

}


function sea(x,y){  
  fill(73, 194, 255);
  rectMode(CORNER);
  rect(x,y+40, width,y);

}

function wave(x,y){
  if (waveX < 0)
  {
    waveX = width;
  }
  fill(201,237,255,100);
  rect(waveX,0.75*y, 150,10,20);
  rect(waveX+100,0.85*y,150,10,20);
  waveX = waveX - 3;
}

function sun(x,y){
  fill(255, 204, 96);
  ellipse(sunX,y,50);
  sunX = sunX + 1.5;
}

function ship(x,y){
  
  /* sail */
  fill(255, 115, 81);
  triangle(0.5*x,0.24*y, 0.5*x-70,0.5*y,0.5*x+70,0.5*y);
  
	/* boat */
  fill(142, 86, 62);
  quad(0.3*x,0.55*y, 0.7*x,0.55*y, 0.65*x,0.68*y, 0.36*x,0.68*y);//body
  rectMode(CENTER);
  rect(0.5*x,0.4*y,0.024*x,0.325*y,20);//mast
}

function seagul(x,y){
  fill(255);
  
  beginShape();
  
  vertex(x-70,y);
  vertex(x-30,y-30);
  vertex(x,y-20);//center_top
  vertex(x+30,y-30);
  vertex(x+70,y);
  vertex(x+25,y-15);
  vertex(x,y-5);//center_bottom
  vertex(x-25,y-15);
  vertex(x-70,y);
  
  endShape();
} 


    