# Audio Visualization Project
Creative Coding Lab  
Prof. Oliver Steele  
Spring 2020  

### Noise Art 
[ZEIT](https://my-project-march2020.now.sh)  
[Documentation Blog](http://wp.nyu.edu/kennedycambracho/2020/03/22/noise-art-audio-visualization-project/)  

My work illustrates the dynamic nature of personal perception in relation to spatial audio. I use P5.js, the javascript library, and the surrounding ambient noise as input to create a real-time visual abstraction of spatial audio. This process mimics the experience of synesthesia where stimuli are incorrectly processed and perceived by an individual. My synthetic sensory experience offers users a chance to view the links formed between auditory input and visual output through abstract art.
What fascinates me about synesthesia is its relation to individual reality construction. Those who are diagnosed with synesthesia experience a separate reality. Their perceived world is so far removed from my understanding that simply imagining the experience is near impossible. With this project, I provide a lens to view an alternate sensorial reality.  

[Demo Video](https://drive.google.com/file/d/1MqagwBPEPoMg0CiTxcsiDv_t0VV4ox5R/view?usp=sharing)
#### Pre-Production
Before begining the production process, I first reviewed the P5.js sound library as well as spent time researching audio analysis. Using this knowledge, I determined the FFT feature witin the sound library is how I would analyze the audio sample. 
#### Functionality
Using a sample mp3 file (found [here](https://freemusicarchive.org)), I began by looking at the array returned from `FFT.analyze()`. The array contains the measurements at a number of frequencies (default is 1024). 
By cutting the array down (changing the number of bins) and breaking it into various frequency ranges, I was able to have a single float represent a single, dynamic characteristic of the audio sample. This number is produced using `getEnergy(frequency)`. Here the frequency is defined as a string value: "bass", "lowMid" "mid", "highMid", and "treble". 
#### Design 
In my first draft, I chose to use WEBGL rederer to help convey the sense of environment. The 3D space allows the visualization to live within a world with depth; it mimics how the audio input exists within a dynamic environment where the space is not separate from sound but intertwined with its production and perception. 
Moving forward I felt a simpler design would help present the data more effectively. Using the `triangle()` object in p5, I created a rotating visualization that highlighted the audio's bass, mid and treble frequency. The primary elements of western pop are often split into these three ranges; they helped to display the beat (using the bass) as well as the instrumentals and vocals (which often precide within the mid and treble range). 
#### Reflection
If given more time, I would like to develop a more efficient visual language. This would facilitate users in identifying patterns and the subsequent information exchange. A successful visual language accurately conveys the audio input's characteristics while also presenting itself in such a way that users are able to interpret the meaning.
This visualization works best with pre-recorded music because the structural patterns aide the user in understanding the relationship between each element in the sketch. In my next iteration I will work on making the relationship apparent regardless of the audio input. 

#### Resources 
[Spectrum Properties](https://www.gigahertz-optik.de/en-us/basics-light-measurement/light-color/spectr-line-properties/)

[P5.js Sound Library](https://p5js.org/reference/#/libraries/p5.sound)

[Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)
