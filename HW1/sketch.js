// Haena Lee
// IGME -609 Project 1
// Self-portrait
// January 30, 2019

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(34, 89, 61);
  
  /* Hat */
  fill(255, 205, 138);
  ellipse(180,110, 330,310);
  
  /* Body */
  //body
  fill(249, 222, 199);
  
  beginShape();
  
  vertex(140,240);  
  vertex(130,270);
  vertex(40,330);
  vertex(20,400);
  vertex(360,400);
  vertex(320,320);
  vertex(280,300);
  vertex(230,280);
  vertex(210,250);
  
  endShape(OPEN);
  
  //Shadow
  fill(239, 182, 143);  
  
  beginShape();
 
  vertex(170,255);
  vertex(160,270);
  vertex(160,295);
  vertex(190,290);
  vertex(205,260);
  vertex(170,250);
  
  endShape(OPEN);
  
  
  /* Clothes */
  fill(0);
  
  beginShape();
  
  vertex(98,285);
  vertex(30,330);
  vertex(10,400);
  vertex(130,400);
  vertex(130,400);
  vertex(370,400);
  vertex(330,320);  
  vertex(260,287);
  vertex(270,330);
  vertex(260,380);
  vertex(140,390);
  vertex(100,330);
  vertex(98,285);
  
  endShape(OPEN);
  
  
  /* Hair_back */
	fill(117, 76, 36);
  noStroke();  
	arc(175,140, 220,240, -PI,0.1*PI, CHORD);
	
  beginShape();
  
	vertex(65,140);
	vertex(63,190);
  vertex(75,220);
  vertex(120,270);
  vertex(200,235);
  vertex(295,250);
  vertex(280,215);
  vertex(282,170);
  vertex(200,100);
  vertex(65,140);
  
	endShape(OPEN);
  
  
	/* Face */
  fill(249, 222, 199)
  strokeWeight(1)
  ellipse(200,162, 150,210);
  
  
  /* nose */
  stroke(252, 236, 224);
  strokeWeight(4);
  
  //highlight
  beginShape();
  
  vertex(225,140);
  vertex(219,160);
  vertex(230,195);
  vertex(217,200);
  
  endShape(OPEN);
  
  //shadow
  fill(239, 182, 143);
  noStroke();
  
  beginShape()
  
  vertex(233,195);
  vertex(217,202);
  vertex(195,200);
  vertex(215,190);
  vertex(230,190);
  vertex(233,195); 
  
  endShape(OPEN);
  
  
  /* mouse */
  //outside
  fill(255,72,86);  
  noStroke();
  
  beginShape();
  
  vertex(170,217);
  vertex(200,211);
  vertex(210,215);//outside_top middle
  vertex(220,211);
  vertex(232,217); 
  vertex(225,228);
  vertex(211,235);//outside_bottome middle
  vertex(196,235);//outside_bottome middle
  vertex(180,228);
  vertex(170,217);
  
  endShape(OPEN);
  
  //inside
	fill(193, 45, 63);
  
  beginShape();
  
  vertex(177,219);
  vertex(200,217);
  vertex(210,220);//inside_top middle
  vertex(220,217);
  vertex(227,219); 
  vertex(222,223);
  vertex(211,228);//inside_bottiom middle
  vertex(196,228);//inside_bottiom middle
  vertex(182,223);
  vertex(177,219);
  
  endShape(OPEN);
  
  
  /* Eye brow */
	fill(117, 76, 36); 
  arc(172,130, 45,15, -PI,0);//left
  arc(245,130, 45,15, -PI,0); //right
  
  
  /* Eye*/  
  fill(255); 
  stroke(117, 76, 36);
  strokeWeight(3);
  arc(172,155, 38,20, -PI,0);//left_top
  arc(172,155, 38,17, 0,PI);//left_bottom
  arc(250,155, 35,19, -PI,0);//right_top
  arc(250,155, 35,16, 0,PI);//right_bottom
  
  //pupill
  fill(117, 76, 36);
  ellipse(168,154,17);//left
  ellipse(247,154,15);//right
  
 
  /* glass */
  noFill();
  stroke(226,133,10);
  strokeWeight(4);
  ellipse(170,160, 60,45);//left
  ellipse(252,160, 55,45);//right
  line(200,160, 225,160);//middle line
  
  
  /* Hair_front */
	fill(117, 76, 36);
  noStroke();
  
  beginShape();
  
  vertex(225,63);
  vertex(160,120);
  vertex(148,195);
  vertex(165,235);
  vertex(130,220);
  vertex(110,150);
  vertex(130,90);
  vertex(140,60);
  vertex(200,35);
  vertex(228,40);
  vertex(225,65);
  
	endShape(OPEN);
  

}