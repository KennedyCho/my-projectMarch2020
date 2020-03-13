var micInput;

function setup() {
  createCanvas(400, 400);

  //audio input using mic
  micInput = new p5.AudioIn();
  micInput.start();
}

function draw() {

  // Get the overall volume (between 0 and 1.0)
  let vol = micInput.getLevel();
  // console.log(vol);
}
