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

  // fft object
  fft = new p5.FFT();

  fft.setInput(micInput);
}

function draw() {
  // assign fft analysis
  let spectrum = fft.analyze();

  // Get the overall volume (between 0 and 1.0)
  let micVol = micInput.getLevel();

  // "bass", "lowMid", "mid", "highMid", "treble"
  let bassLevel = fft.getEnergy("bass");
  let lowMidLevel = fft.getEnergy("lowMid");
  let midLevel = fft.getEnergy("mid");
  let highMidLevel = fft.getEnergy("highMid");
  let trebleLevel = fft.getEnergy("treble");

  // test output
  // console.log("Mic Volume: "+micVol);
  // console.log("FFT: "+spectrum[0]);
  // console.log("Bass: "+bassVol);



}
