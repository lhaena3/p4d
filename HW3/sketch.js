// Haena Lee
// IGME -609 Project 3
// Conditionals and Loops
// March 23, 2019


var canvasSize =400
var fishX = canvasSize/5
var fishY = canvasSize/3
var fishDeckX = canvasSize*0.53
var deckY = canvasSize*0.87

function setup() {

  createCanvas(canvasSize, canvasSize);
  background(191, 233, 255)
  textAlign(CENTER);
}


function draw() {  
  deck();
  reset();  
  drawFish(fishX,fishY);
}


function deck() {
  fill(119, 56, 33);
  noStroke();
  rectMode(CENTER);
  rect(canvasSize/2,canvasSize*0.9, canvasSize, canvasSize/3);
  bubbleDeck();
  fishDeck();
  eraserDeck();
}


function bubbleDeck(){
  noFill();
  stroke(255, 234, 206);
  ellipse(canvasSize*0.15, deckY, 70);
  noStroke();
  /* manual */
  fill(255, 234, 206);
  text("Press 'B'", canvasSize*0.15, canvasSize*0.88);
}


function fishDeck(){
  /* fish */
  fill(232, 85, 32);
	ellipse(fishDeckX,deckY,60,30)//head
  triangle(fishDeckX-50,deckY-13, fishDeckX-25,deckY,  fishDeckX-50,deckY+13)//tail
  /* eye */
  fill(0);
  ellipse(fishDeckX+20,deckY,7)
  /* direction */
  triangle(fishDeckX-95,deckY,fishDeckX-60,deckY-23, fishDeckX-60,deckY+23)//left
  triangle(fishDeckX+40,deckY-23, fishDeckX+75,deckY,  fishDeckX+40,deckY+23)//right
  fill(255);
  text("L",fishDeckX-73,deckY+3)//left text
  text("R",fishDeckX+53,deckY+3)//right text 
}


function eraserDeck() {
  stroke(0);
  fill(255);
  rect(canvasSize*0.85, deckY-5, 65,70);//back 
  fill(247,213,19);
  rect(canvasSize*0.85, deckY+10, 65,55);//front
  fill(0);
  noStroke();
  text("Hover Here", canvasSize*0.85, canvasSize*0.9);
}


function reset(){
   if (mouseX > canvasSize*0.85-25 &&
      mouseX < canvasSize*0.85+25 &&
      mouseY > canvasSize*0.9-25 &&
      mouseY < canvasSize*0.9+25)
      {
      background(191, 233, 255);
      deck();
      }
}


function drawFish(fishX,fishY){
  	/* fish */
    fill(232, 85, 32);
		ellipse(fishX,fishY,80,40)
  	triangle(fishX-60,fishY-15, fishX-35,fishY,  fishX-60,fishY+15)
  	/* eye */
  	fill(0);
  	ellipse(fishX+20,fishY,10)
}


/* Keyboard Input*/
function keyTyped(){
  
  if(key=='b')//Bubble
  {    
		drawBubble();  
  }
  
  if(key =='r')//move to right
  {
    background(191, 233, 255);
    fishX = fishX+20;
    	while (fishX > canvasSize){
 		 		fishX = 0;
  		}
  }  
  
  
  if(key =='l')//move to left
  {
    background(191, 233, 255);
    fishX = fishX-20;  
    	while (fishX < 0){
 		 		fishX = canvasSize;
  		}
  }
}


function drawBubble(){
  noFill();
  stroke(0,random(100,255),random(100,255));
  ellipse(mouseX,mouseY,random(10,50)); 
}






  
