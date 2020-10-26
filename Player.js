class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.velocityX = 0;
        this.velocityY = 0;
        this.racket = createSprite(x,y,20,20);
        this.image = loadImage("images/racket.png");
    }

    display(){
        image(this.image,this.x,this.y)

    }

    isTouching(object){
        if (this.racket.isTouching(object))
            return true;
        else 
            return false;
        
    }


}