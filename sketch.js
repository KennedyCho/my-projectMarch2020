// check if listening - onclick listen
// create test audio file
// connect mic as audio input
// measure audio input characteristics


var toggleButton;

var micInput;
var sampleAudio;
let amp;

function preload(){

  // mp3 file
  sampleAudio = loadSound('testAudio.mp3')

}

function mousePressed() {
  if (sampleAudio.isPlaying()) {
    sampleAudio.pause();
    // background("grey");
  }else {
    sampleAudio.play();
    // background("pink");
  }
}

function setup() {
  createCanvas(400, 400);
  background("grey");

  // play mp3 file
  // sampleAudio.play();

  //audio input using mic
  // micInput = new p5.AudioIn();
  // micInput.start();

  // fft object
  fft = new p5.FFT(0, 256); //bin must be power of 2

  // analyze microphone input
  // fft.setInput(micInput);

  // analyze test audio file
  fft.setInput(sampleAudio);
}

function draw() {
  background('grey');
  // assign fft analysis
  let spectrum = fft.analyze(); // default 1024
  console.log(spectrum);
  // Get the overall volume (between 0 and 1.0)
  // let micVol = micInput.getLevel();
  stroke(255);
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 255, height, 0);
    line(i*width/64, height, i*width/64, y);
  }


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
