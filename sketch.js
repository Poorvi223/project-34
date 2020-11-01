const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;
var mouseConstraint;

function setup() {
  createCanvas(windowWidth/2,windowWidth/2);
  engine = Engine.create();
  world = engine.world; 
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Pendulum(100,750,20);
  bob2 = new Pendulum(150,750,20);
  bob3 = new Pendulum(200,750,20);
  bob4 = new Pendulum(250,750,20);
  bob5 = new Pendulum(300,750,20);
  
  sling1 = new Sling(bob1.body,{ x: 340, y:200});
  sling2 = new Sling(bob1.body,{ x: 400, y:200});
  sling3 = new Sling(bob1.body,{ x: 460, y:200});
  sling4 = new Sling(bob1.body,{ x: 520, y:200});
  sling5 = new Sling(bob1.body,{ x: 580, y:200});
}
function draw() {
  background("black");

  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x : mouseX, y : mouseY});
}
