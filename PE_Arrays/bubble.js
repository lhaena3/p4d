class bubble
{
    constructor()
    {
        this.x = random(width);
        this.y = random(height);
        this.size = random(10,30);
        this.alpha = random(50,100)
    }
    drawAllBubbles()
    {
        fill(255, 112, 127, this.alpha);
        ellipse(this.x, this.y, this.size);
    }
    bubbleRise(){
        this.y = this.y - 1
    }
}