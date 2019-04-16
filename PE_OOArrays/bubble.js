class bubble
{
    constructor()
    {
        this.x = random(0,400);
        this.y = random(0,600);
        this.size = random(10,30);
        this.alpha = random(50,100)
    }
    drawAllBubbles()
    {
        fill(255, 112, 127, this.alpha);
        ellipse(this.x, this.y, this.size);
    }
    bubbleRises(){
        this.y = this.y - 1;
    }
}