class Bob{
    constructor(x,y,radius){
        var prop={
            restitution:0.5,
            density:0.1,
            friction:0.2
        }
        this.body=Bodies.circle(x,y,radius,prop)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("red")
        ellipse(0,0,this.radius)
        pop()
    }
}