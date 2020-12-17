class Paper {
    constructor(x,y,radius){
    this.posX=x;
    this.posY=y;
    this.width=width;
    this.height=height;
    this.radius=radius;
    
    var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }

    this.body = Bodies.circle(this.posX, this.posY, this.radius/2, options);
    World.add (world, this.body);
    }
    display() {
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
       pop();
    }
}