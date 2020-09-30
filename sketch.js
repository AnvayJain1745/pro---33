const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var play = 1;
var start = 2;
var end = 0;
var gameState =2

var particles= [];
var plinkos = [];
var divisions = [];
var turn = 0;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));   }

   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
     plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
     plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
     plinkos.push(new Plinko(j,375));
   }
}
 


function draw() {
  background("white");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  text("score : " + score,80,20);
  text("10           20          30          40           50          50          40          30          20           10",30,500)

   for (var i = 0; i < plinkos.length; i=i+1) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

  if(gameState !== end){
    score++
    particles.push=new particles(mouseX,10,10,10)
  }
}