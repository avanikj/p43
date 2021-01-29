var hour;
var minute;
var second;

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(0); 
  
//Translation and rotation  
translate(200,200);
rotate(-90);

//Traslating time using predefined function from p5.js
var hr = hour;
var mn = minute;
var sc = second;

scAngle = map(sc,0,60,0,360);
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr % 12,0,12,0,360)

//drawing seconds hand
push();
rotate(scAngle);
stroke(255,0,0)
strokeWeight(7);
line(0,0,100,0)
pop();

//drawing minute hand
push();
rotate(mnAngle);
stroke(0,255,0)
strokeWeight(7);
line(0,0,75,0)
pop();

//drawing hour hand
push();
rotate(hrAngle);
stroke(0,0,255)
strokeWeight(7);
line(0,0,50,0)
pop();


stroke(255,0,255)
point(0,0)

//drawing the arcs
strokeWeight(10);
noFill();

//seconds
stroke(255,0,0);
arc(0,0,300,300,0,scAngle);

//Minutes
stroke(0,255,0);
arc(0,0,280,280,0,mnAngle);

//Hour
stroke(0,0,255)
arc(0,0,260,260,0,hrAngle);


  drawSprites();
}