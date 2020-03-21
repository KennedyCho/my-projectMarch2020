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


function preload(){

  // mp3 file
  sampleAudio = loadSound('testAudio.mp3')

}

function setup() {
  createCanvas(400, 400, WEBGL);
  background(175);

  // colorMode(HSB);

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
  background(175);
  // assign fft analysis
  let spectrum = fft.analyze(); // default 1024

  // Get the overall volume (between 0 and 1.0)
  // let micVol = micInput.getLevel();

  bassLevel = fft.getEnergy("bass");
  lowMidLevel = fft.getEnergy("lowMid");
  midLevel = fft.getEnergy("mid");
  highMidLevel = fft.getEnergy("highMid");
  trebleLevel = fft.getEnergy("treble");
  angleMode(DEGREES)

  rectMode(CENTER);
  noStroke();
  normalMaterial();
  rotateY(angleY);
  rotateX(angleX);
  rotateZ(angleZ);
  box(50, 50, 50);

  angleY += map(bassLevel, 0, 255, 0, 4)
  angleX += map(midLevel, 0, 255, 0, 4)
  angleZ += map(trebleLevel, 0, 255, 0, 4)
}
