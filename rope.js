class Rope{
    constructor(bodyA,pointB){
        var prop={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:300
        }
        this.rope=Constraint.create(prop)
        this.pointB=pointB
        World.add(world,this.rope)
    }
    display(){
        push()
        fill("brown")
        strokeWeight(4)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
        pop()
    }
}