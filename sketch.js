function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}
 
function draw() {
  background(220);
 
  text("horizontal", 10, 30);
  rotateAbout(10, 30, 45)
  text("vertical", 10, 30);
}
 
function rotateAbout(x, y, angle) {
  translate(x, y);
  rotate(angle);
  translate(-x, -y);
}
