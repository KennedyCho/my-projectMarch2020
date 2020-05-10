var micInput;
var sampleAudio;

// freq level
let bassLevel;
let lowMidLevel;
let midLevel;
let highMidLevel;
let trebleLevel;

// record history of readings
let midHist = [];

let xPos = 0;

function preload(){
  // mp3 file
  sampleAudio = loadSound('testAudio.mp3')
}

function setup() {
  colorMode(HSB);
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  background(100);
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

function mousePressed() {
  if (sampleAudio.isPlaying()) {
    sampleAudio.pause();
  }else {
    sampleAudio.play();
  }
}

function draw() {
  // background(100);

  // Get the overall volume (between 0 and 1.0)
  // let micVol = micInput.getLevel();

  // assign fft analysis
  let spectrum = fft.analyze(); // default 1024

  bassLevel = fft.getEnergy("bass");
  lowMidLevel = fft.getEnergy("lowMid");
  midLevel = fft.getEnergy("mid");
  highMidLevel = fft.getEnergy("highMid");
  trebleLevel = fft.getEnergy("treble");

  // push to array
  midHist.push(midLevel);

  if(midHist.length > 360){
    midHist.splice(0, 1);
  }
  translate(width/2, height/2)
  let weight = 10
  let w = width/weight;
  let h = 30;

  let moveH = map(trebleLevel, 0, 255, -h, -height);
  let moveW = map(trebleLevel, 0, 255, w, width/2);
  let moveH2 = map(bassLevel, 0, 255, -h, -height);
  let moveW2 = map(bassLevel, 0, 255, w, width/2)
  let moveH3 = map(midLevel, 0, 255, -h, -height);
  let moveW3 = map(midLevel, 0, 255, w, width/2)


  noFill();
  ellipse(0, 0, width-10);
  ellipse(0, 0, width/10);
  push();
  fill(215, map(trebleLevel, 0, 255, 10, 100), 100);
  rotate(millis()/10);
  triangle(0, 0, -moveW, moveH, moveW, moveH);
  pop();

  angleMode(DEGREES);
  push();
  fill(79, map(bassLevel, 0, 255, 10, 50), 100);
  rotate(-120+millis()/10);
  triangle(0, 0, -moveW2, moveH2, moveW2, moveH2);
  pop();
  push();
  fill(38, map(midLevel, 0, 255, 10, 100), 100);
  rotate(120+millis()/10);
  triangle(0, 0, -moveW3, moveH3, moveW3, moveH3);
  pop();

}
