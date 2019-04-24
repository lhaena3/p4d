var im_car_green;
var im_car_red;
var im_boom;
var im_heart;
var font;
var playerSpeed = 7;
var obstacles = [];
var roadMarkings
var score = 0;
var lives = 5;
var deathLeftX =0;
var deathRightX=375;

function preload() {
    im_car_green = loadImage('assets/Car_Green.png');
    im_car_red = loadImage('assets/Car_Red.png');
    im_boom = loadImage('assets/boom.png');
    im_heart = loadImage('assets/heart.png');
    death_left = loadImage('assets/death_left.png');
    death_right = loadImage('assets/death_right.png');
    font = loadFont('assets/8-bit.ttf');
}

function setup() {
    createCanvas(400, 600);
    //frameRate(50);  
    roadMarkings = new roadMarking();
    obstacles.push(new Obstacle());
    player = new Player();
    console.log(roadMarkings);
    
}

function draw() {
    background(100); 
    image(death_left, deathLeftX,430);    
    image(death_right, deathRightX,430);  
    roadMarkings.update();
    roadMarkings.offscreen();
    roadMarkings.show();
    
   
    // New obstacles appear after certain number of frames
    if (frameCount % 130 === 0) {
        obstacles.push(new Obstacle());
    }

    // Show obstacles
    for (var i = obstacles.length-1 ; i >= 0 ; i--) {
        obstacles[i].show();
        obstacles[i].update();

        if (obstacles[i].overtakenBy(player) && obstacles[i].isOvertakenBy === false) {
            score += 5;
            obstacles[i].isOvertakenBy = true;
        }

        // If obstacles collide with the player, they get destroyed
        if (obstacles[i].hits(player)) {
            obstacles[i].boom();
            obstacles.splice(i, 1);

            // Penalty for collision is -10, and you loose one life
            score = (score >= 10)?(score-10):0;
            lives--;
        }
        // Remove obstacles once the are off the screen
        else if (obstacles[i].offscreen()) {
            obstacles.splice(i, 1);
        }
    }

    // Show the player
    player.show();
    
    
    // Game controls
    if (keyIsDown(LEFT_ARROW)) {
        player.turnLeft();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.turnRight();
    }
    
    // death object disappear
    if (mouseIsPressed){
        deathLeftX = deathLeftX -20;
        deathRightX = deathRightX +60;
    }
    
    else{
        deathLeftX = 0;
        deathRightX = 375;
    }

    // Show player stats
    textSize(40);
    textFont(font);
    textAlign(LEFT);
    fill("black");
    text('Score: ' + score, 30, 60);

    for (var i = 0 ; i < lives ; i++) {
        image(im_heart, 30 + (i*70), height-60);
    }

    // Check if game is over
    if (lives === 0 || player.x < deathLeftX+20 || player.x > deathRightX-60) {
        noLoop();

        textSize(60);
        textFont(font);
        textStyle(BOLD);
        textAlign(CENTER);
        fill("black");
        text('GAME OVER', width/2, height/2);
    }
    

    resetButton();
    
    function resetButton(){
        rectMode(CENTER);
        stroke(255);
        strokeWeight(2);
        fill(0);
        rect(320,45,130,50,10);
        textAlign(CENTER);
        textSize(30);
        text('RESET', 320,55);
        if (mouseX > 255 && mouseX < 385 && mouseY > 20 &&mouseY < 70 )
            {
                
            }
        
    }
    
    
    
} 	
