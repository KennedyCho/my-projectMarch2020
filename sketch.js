var micInput;
var sampleAudio;
let amp;

function preload(){

  // mp3 file
  sampleAudio = loadSound('testAudio.mp3')

}

function setup() {
  createCanvas(400, 400);

  // play mp3 file
  // sampleAudio.play();

  //audio input using mic
  micInput = new p5.AudioIn();
  micInput.start();

  // amplitude object
  amp = new p5.Amplitude();
  // fft object
  fft = new p5.FFT();

  fft.setInput(micInput);

}

function draw() {
  // assign fft analysis
  let spectrum = fft.analyze();

  // Get the overall volume (between 0 and 1.0)
  let micVol = micInput.getLevel();

  let ampTest = amp.getLevel();

  // test output
  console.log("Mic Amp: "+micVol);



}
