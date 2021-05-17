class Paper{
    constructor(x,y,r){
        
        var options ={
            'isStatic': false,
            'restitution': 0.8,
            'friction': 0,
            'density': 1
        }
        
        
        
        this.x = x;
        this.y = y
        this.r = r
        this.image = loadImage('paper.png')
        


        this.body = Bodies.circle(this.x,this.y,(this.r-0.5)/1, options)
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x , this.body.position.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }
}