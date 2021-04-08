const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

function setup() {
  createCanvas(1200,600);
  engine=Engine.create()
  world=engine.world
  
  ground=new Ground(600,590,1200,20)
  box1=new Box(700,100,70,70)
  box2=new Box(700,100,70,70)
  box3=new Box(700,100,70,70)
  box4=new Box(700,100,70,70)
  box5=new Box(700,100,70,70)
  box6=new Box(700,100,70,70)
  box7=new Box(700,100,70,70)
  box8=new Box(700,100,70,70)
  box9=new Box(800,100,70,70)
  box10=new Box(800,100,70,70)
  box11=new Box(800,100,70,70)
  box12=new Box(800,100,70,70)
  box13=new Box(800,100,70,70)
  box14=new Box(800,100,70,70)
  box15=new Box(800,100,70,70)
  box16=new Box(800,100,70,70)
  bob=new Bob(500,200,40)
  rope=new Rope(bob.body,{x:500,y:50})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box12.display()
  box13.display()
  box11.display()
  box14.display()
  box15.display()
  box16.display()
  bob.display()
  rope.display()
}
function mouseDragged(){
  Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
}