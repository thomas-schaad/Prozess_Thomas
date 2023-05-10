let d;
function setup() {
    createCanvas(windowWidth, windowHeight);

  }

  function draw() {
    background(255);
    //randomSeed(2)
    let tile = 10;
    let randomMax=8;
    stroke(255,0,0)
   for (let x = 0; x < width; x+=tile) {
    //console.log(x);
    for (let y = 0; y < height; y+=tile) {
        let abstand = int(random(-1*randomMax, randomMax));
        strokeWeight(d)
        if (x<mouseX) {
            d = map(x, 0, mouseX, 1, 5)
        } else if (x>mouseX) { d = map(x, mouseX, width, 5, 1)
            
        }
        line(x+tile+abstand, y, x+abstand, y+tile)
    }
   }
  }