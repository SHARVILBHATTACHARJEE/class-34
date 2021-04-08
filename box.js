class Box{
    constructor(x,y,width,height){
        var prop={
            restitution:0.5,
            density:1,
            friction:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,prop)
        this.width = width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("Blue")
        rect(0,0,this.width,this.height)
        pop()
    }
}