class myBall
{
    constructor()
    {
        // Create a new snowflake with a default
        // x, y, size, and speed
        this.x = 30;
        this.y = 100;
        this.size = 30;
        this.speed = 5;
    }

    bounce()
    {
        if(this.x > width || this.x<0){
       this.speed = this.speed*-1;
        }
    }
    move()
    {
        // Move down based on the speed
        this.x = this.x + this.speed;
    }
    
    display()
    {
        fill(255, 217, 30);
        ellipse(this.x,this.y, this.size, this.size);
    }
}
