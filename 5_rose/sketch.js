let rect_sizes = [100, 125, 150, 175, 200, 225, 250, 275, 300]
console.log(rect_sizes.length)
let angle = 0

function setup() {
 let canvas = createCanvas(innerWidth,innerHeight)
  background(0);
  rectMode(CENTER);
  frameRate(10)
  //angleMode(DEGREES);
noFill();
}

let mx = []
let my = []
let limit = 100

function draw() {
  //background(0)
  stroke(255, 0, 0)
for (let i = 0; i < rect_sizes.length; i++) {
     let rect_size = rect_sizes[i]
  let x = width/2
  let y = height/2
  push();
  translate(x,y)
  rotate(i) 
  rotate(angle)
  scale(1.5);
  rect(0,0,rect_size,rect_size)
  pop();
 }
 angle = angle + 10
 }