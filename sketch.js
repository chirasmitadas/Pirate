const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(100, 350, 200,400);
    ground = new Ground(300,570,600,30);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    tower.display();
   ground.display();
}
