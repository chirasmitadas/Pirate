class Tower{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        
        this.image = loadImage("assets/tower.png");

        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(this.x, this.y,this.w,this.h, options);
        World.add(world, this.body);
    }

    display(){
        var towerPosition = this.body.position;
        imageMode(CENTER);
        image(this.image, towerPosition.x, towerPosition.y, this.w, this.h);
    }
}