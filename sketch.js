const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop1
// var drop2
// var drop3
// var drop4
// var drop5
function setup() {
    engine = Engine.create();
    world = engine.world;
  var canvas = createCanvas(800,400);
  drop1 = new Rain(100, 8);
  // drop1.x= random(0, 800);
  // drop1.y= random(0, 400);
  // drop2 = new Rain(100, 8);
  // drop2.x= random(0, 800);
  // drop2.y= random(0, 400);
  // drop3 = new Rain(100, 8);
  // drop3.x= random(0, 800);
  // drop3.y= random(0, 400);
  // drop4 = new Rain(100, 8);
  // drop4.x= random(0, 800);
  // drop4.y= random(0, 400);
  // drop5 = new Rain(100, 8);
  // drop5.x= random(0, 800);
  // drop5.y= random(0, 400);
}

function draw() {
  Engine.update(engine);
  background(0);
  drop1.display();
  // drop2.display();
  // drop3.display();
  // drop4.display();
  // drop5.display();  
}