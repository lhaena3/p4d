function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(152, 169, 255);
  
    
  /* Ear */
  fill(255, 232, 211);//ear fill
  triangle(60,80, 160,100, 90,180);//left
  triangle(240,100, 340,80, 310,180);//right
  fill(255, 148, 126)//inside fill
  triangle(80,100, 110,105, 90,130);//left inside
  triangle(290,105, 320,100, 310,130);//right inside
  
  
  /* Neck */
  fill(255, 232, 211);//neck fill
  arc(200,300,120,120,0,PI);//neck
  
  fill(255, 231, 82);//bell fill
  ellipse(200,355,50)//bell
  strokeWeight(2);
  line(200,360, 200,380);
  
  fill(255,43,40)//ribbon fill
  quad(140,305, 260,355, 260,305, 140,355);//ribbon

  
  /* Face */
  fill(255, 232, 211);//face fill
  ellipse(200,200,240);//face
  noFill();
  strokeWeight(2);
  line(200,80, 200,160);//deco_middle
  line(180,82, 180,140);//deco_left
  line(220,82, 220,140);//deco_right
  
  
  /* Eye */
  fill(255, 204, 157);//eye pattern fill
  noStroke();
  ellipse(140,175, 80,80);//eye pattern
  
  fill(255)//outside fill
  stroke(110, 78, 72);//outside stroke
  strokeWeight(2);
	ellipse(140,180, 45,23);//outside_right
  ellipse(260,180, 45,23);//outside_left
  fill(255, 178, 42);//inside fill
  stroke(206, 94, 0);//inside stroke
  ellipse(140,180, 17,20);//left
  ellipse(260,180, 17,20);//right
  
  fill(206, 94, 0  );//pupill fill
  ellipse(140,180, 5,5);//pupil left
  ellipse(260,180, 5,5);//pupil right

  
  /* Nose */
  fill(255, 148, 126);//nose fill
  stroke(110, 78, 72);//nose stroke color
  strokeWeight(2);  
  triangle(180,220, 220,220, 200,240);//nose
  line(200,240, 200,260);//nose line
  
  
  /* Mouth */
  stroke(110, 78, 72);//mouth color
  strokeWeight(2);
  line(160,280, 200,260);//left
  line(200,260, 240,280);//right
  
  line(100,220, 160,220);//deco_left_top
  line(240,220, 300,220);//deco_right_top
  line(120,240, 160,240);//deco_left_bottom
  line(240,240, 280,240);//deco_right_bottom
  
  
  /* Feet */
  fill(255, 232, 211);//feet color
  ellipse(60,390, 80,60, 0,6.28);//left
  ellipse(340,390, 80,60, 0,6.28);//right
  
   
}
