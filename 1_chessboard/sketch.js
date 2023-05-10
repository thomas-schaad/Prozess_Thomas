function setup() {
  createCanvas(windowWidth, windowHeight)//,SVG); 
  background(0, 0, 255);
}

function draw() {
  console.log();
  let sq = 20
  let x = 0
  let y = 0

  for (let x = 0; x <= width; x += sq) {
    for (let y = 0; y <= height; y += sq) {
      noStroke();
      fill(random(200),random(20), 0)
      rect(x, y, sq, sq);
    }
  }
}
