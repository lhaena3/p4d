var myBubble = [];

function setup(){
    createCanvas(400, 600);
    noStroke();
    for(var i = 0; i < 100; i++){
        myBubble[i] = new bubble();
    }   
}

function draw(){
    background(216, 255, 250);
    for(var i = 0; i < 100; i++){
        myBubble[i].drawAllBubbles();
        myBubble[i].bubbleRises();
    }   
}
