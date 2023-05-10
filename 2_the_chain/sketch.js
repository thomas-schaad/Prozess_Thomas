function setup() {
  // setup of the sketch
  createCanvas(2000, 800);
  background(20, 20, 255);
  rectMode(CENTER)
}

let = slider = document.querySelector("#my-slider")
let = red_slider = document.querySelector("#red-slider")
let = el_slider = document.querySelector("#ellipse-slider")

function draw() {
  console.log(slider.value)
  //background(20, 20, 255)
  // here you draw to the screen
  // option, shift, F -> tidy Code
  // i++ -> i+i+1
  // % -> odd or even ?
  let val = slider.value
  let red_val = red_slider.value
  let el_val = el_slider.value
  console.log(el_val)
  //let el_val = el_slider.value
  //let el_val = el_slider.value
  let x = mouseX;
  let y = mouseY;
  let sinus = sin(frameCount /500);
  let sinus2 = sin(frameCount / 5);
  let n = noise(sinus, sinus2) //macht die Bewegung organischer
  noFill();
  fill(red_val, 0, 0);


  for (let i = 0; i < 10; i++) {
    let pos_x = x + (i * 50) + sinus2 * (5 * i);
    let pos_y = y + n * 10;
    //let pos_x = (x + (i * 50))
      ellipse(pos_x, pos_y, el_val, el_val)
      rect(pos_x, pos_y, val, val)
    }


} 