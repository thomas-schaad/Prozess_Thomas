
let img;
let pixels;
//function preload() {
//  img = loadImage("cindy-small.jpg");
//}
function setup() {
  createCanvas(400, 600);
 img = loadImage('assets/cindy-small.jpg')
 pixelDensity(10);
}

function draw(){
  background(220);
  img.loadPixels();
  //let pix = img.pixels[23];
  //let b = brightness(pix);

  //  if(frameCount%100 == 0){
  //  }
    for (let i = 0; i < img.pixels.length; i=i+4) {
      img.pixels[i]= random(255);
    }
    img.updatePixels();
    image(img, 0, 0)
}
