const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg

function preload() {
  
backgroundImg = loadImage("assests/rain.gif");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

}




