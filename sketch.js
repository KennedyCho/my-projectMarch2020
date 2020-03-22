// check if listening - onclick listen
// create test audio file
// connect mic as audio input
// measure audio input characteristics


var toggleButton;

var micInput;
var sampleAudio;

// freq level
let bassLevel;
let lowMidLevel;
let midLevel;
let highMidLevel;
let trebleLevel;

// rotation
let angleX = 0;
let angleY = 0;
let angleZ = 0;
let angleZMid = 0;

function preload(){

  // mp3 file
  sampleAudio = loadSound('testAudio.mp3')

}

function setup() {
  createCanvas(400, 400, WEBGL);
  background(175);
  noStroke();
  // play mp3 file
  // sampleAudio.play();

  //audio input using mic
  micInput = new p5.AudioIn();
  micInput.start();

  // fft object
  fft = new p5.FFT(0, 256); //bin must be power of 2

  // analyze microphone input
  fft.setInput(micInput);

  // analyze test audio file
  // fft.setInput(sampleAudio);

}

// function mousePressed() {
//   if (sampleAudio.isPlaying()) {
//     sampleAudio.pause();
//   }else {
//     sampleAudio.play();
//   }
// }

function draw() {
  background(0);

  // Get the overall volume (between 0 and 1.0)
  let micVol = micInput.getLevel();

  // assign fft analysis
  let spectrum = fft.analyze(); // default 1024

  bassLevel = fft.getEnergy("bass");
  lowMidLevel = fft.getEnergy("lowMid");
  midLevel = fft.getEnergy("mid");
  highMidLevel = fft.getEnergy("highMid");
  trebleLevel = fft.getEnergy("treble");

  normalMaterial();

  angleMode(DEGREES)

  noStroke();
  push();
  rotateZ(angleZMid);
  torus(width/3, width/20, 4, 16);
  angleZMid += micVol*1000;
  pop();

  // push();
  // rotate()
  // torus(width/2, width/20, 4, 16);
  // pop();

  push();
  rectMode(CENTER);
  rotateY(angleY); // bassLevel control
  rotateX(angleX); // midLevel control
  rotateZ(angleZ); // trebleLevel control
  box(width/5); //center cube

  angleY += map(bassLevel, 0, 255, 0, 4)
  angleX += map(midLevel, 0, 255, 0, 4)
  angleZ += map(trebleLevel, 0, 255, 0, 4)

  pop();


}
