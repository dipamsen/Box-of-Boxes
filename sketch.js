
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;
 
var engine;
var world;
var gravity;
var ground;
var boxes = [];
var particles = [];
var gSlider;
var bSlider;
 var colorVal;
 var fVal;
 var bVal;
 var tVal;
 var tSlider;
 var type = Particle;
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0,100,50);
    bSlider = createSlider(0,1,0);
    tSlider = createSlider(0,1,0);
    gSlider.position(20, 365);
    bSlider.position(190,365);
    tSlider.style('width', '50px');
    tSlider.position(320,365);
    bSlider.style('width', '50px');
    colorVal = Math.round(Math.random()*3);
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(width/2,height-70,width,10);
}
 
function mousePressed() {
    if(mouseY<330){
        if(type === Box){
            boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));
        } else{
            particles.push(new Particle(mouseX,mouseY,25));
        }
    }
}

function checkSlider(){
    if(bSlider.value() === 0){
        bVal = "OFF";
    } else  if(bSlider.value() === 1){
        bVal = "ON";
    }
    if(tSlider.value() === 0){
        tVal = "Box";
    } else  if(tSlider.value() === 1){
        tVal = "Ball";
    }
}
function draw() {
    // Draw all the elements including the slider that 
    
    background(100,20,255);
    // This is the value of your gravity. You can optionally show it to the viewer.
    fVal = gSlider.value();
    tVal = tSlider.value();
    for(var i = 0; i<particles.length; i++){
        particles[i].display(); 
    }
    
    
    fill(254);
    noStroke();
    textFont("Comic Sans MS");
    textStyle(NORMAL);
    textAlign(CENTER,CENTER);
    textSize(18);
    //textStyle(BOLD);
    text("GRAVITY: " + fVal,85,355);
    //textSize(15);
    checkSlider();
    //fill(255,100,0);
    if(tVal === "Ball"){
        type = Particle;
    } else if(tVal === "Box"){
        type = Box;
    }
    text("BLINK: " + bVal,220,355);
    //fill("purple");
    text("TYPE: " + tVal,340,355);
    textSize(24);
    //text(fVal,165,378);
    gravity = map(fVal, 0, 100, 0, 1);
    ground.display();
    console.log(bSlider.value());
    // Use a for loop to show all the boxes
    for(var i = 0; i<boxes.length; i++){
        boxes[i].display(); 
    }
 //   engine.world.gravity= gravity
    //gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
   
    
}
 


// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
/*
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {

    }
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
    }
}*/
