function setup() {
  createCanvas(1000, 200);
  
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(18);
  textFont("Calibri");
  textStyle(BOLDITALIC);
  text("Welcome! ...", 500, 20);
  textStyle(NORMAL);
  text("... to my (                          's ) Computer Programming portfolio/website", 500, 45);
  textStyle(ITALIC);
  text("Noah Warner", 371, 45);
  textStyle(NORMAL);
  //text("Each program comes with a short description of what I used to creat it, plus directions if it's a playable game", 500, 135);
  text("Click on the links above!", 500, 160);
  
}