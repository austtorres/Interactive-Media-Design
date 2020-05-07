////////////////////////////////////////////////////////////////////////////////
// Main File: sketch.js
// Semester: Spring 2020
// Santa Reparata International School of Art Interactive Media Design
//
// About: This project is meant to be a display of sounds and visuals using p5js
// The concept being displayed is that city sounds seem to be never ending and
// you can only surround yourself with different noises by moving but you can
// never really achieve silence. This is based off of my time in Florence.
//
// Authors: Austin Torres
//
/////////////////////////// OTHER SOURCES OF HELP //////////////////////////////
//
// Persons: N/A
//
// Online sources:
//
//
//////////////////////////// 80 columns wide ///////////////////////////////////
let bg;
var sound = [];
let img;

var scene1 = true;
var scene2 = false;

//let yStart = 112;
function preload(){
  // put preload code here
  // Create array of sounds to use later
  sound.push(loadSound('sounds/door-buzzer.mp3')); //0
  sound.push(loadSound('sounds/door-close.mp3')); //1
  sound.push(loadSound('sounds/traffic.mp3')); //2
  sound.push(loadSound('sounds/voices-bar.mp3')); //3
  sound.push(loadSound('sounds/jackhammer.mp3')); //4
  sound.push(loadSound('sounds/engine.mp3')); //5
  sound.push(loadSound('sounds/hammer.mp3'));//6
  sound.push(loadSound('sounds/fountain.mp3'));//7
  sound.push(loadSound('sounds/italianAmbience.mp3'));//8
  sound.push(loadSound('sounds/footsteps.mp3'));//9
  sound.push(loadSound('sounds/ciao.mp3'));//10
  sound.push(loadSound('sounds/bikeBell.mp3'));//11
  sound.push(loadSound('sounds/splash.mp3'));//12
  // Cursor image
  img = loadImage('lily.png');
}

function setup() {

  // Drawing of a street in Florence being loaded into a variable
  bg = loadImage('bridge.jpg');
  bg2= loadImage('bg.jpg');
  // Original image dimensions are 384x224 (32 pixel tiles)
  createCanvas(windowWidth, windowHeight);
  noCursor();

}

function draw() {
  if(scene1 == true){


  background(bg);
  }
  else{
    background(bg2);
  }

  image(img, mouseX-60, mouseY-20);

  // Follow mouse to show where sound is coming from
  // ellipse(mouseX,mouseY,50,50);

}

// Counter for door to open
var rings = 0;

// Click different locations to play different sounds
function mousePressed(){
  if(scene2 == true){
  if(!sound[3].isPlaying() ){
    sound[3].loop();
    sound[2].loop();
    sound[6].loop();
  }
  else if(mouseY < 0.25*windowHeight){
    if( rings < 3){
      sound[0].play();
      rings++;
    }
    else{
      sound[1].play();
      rings = 0;
    }
  }
  else if(mouseX > 0.80*windowWidth){
    sound[4].play();
  }
  else if(mouseX < 0.2*windowWidth){
    sound[5].play();
  }
  else if(mouseY > 0.7*windowHeight){
    sound[3].stop();
    sound[2].stop();
    sound[6].stop();
    sound[7].loop();
    sound[8].loop();
    sound[9].loop();
    scene1 = true;
    scene2 = false;

  }
  else{
    return;
    }
  }
  // scene1
  else{
    if(!sound[7].isPlaying()){
      sound[7].loop();
      sound[8].loop();
      sound[9].loop();
    }
    else if(mouseY < 0.25*windowHeight){
      sound[11].play();
    }
    else if(mouseX > 0.70*windowWidth){
      sound[10].play();
    }
    else if(mouseY > 0.6*windowHeight){
      sound[12].play();
    }
    else if(mouseX < 0.30*windowWidth){
      sound[7].stop();
      sound[8].stop();
      sound[9].stop();
      sound[3].loop();
      sound[2].loop();
      sound[6].loop();
      scene2 = true;
      scene1 = false;
    }
  }
}

// Background noises pan depending on location of cursor
function mouseMoved(){
  if(scene2 == true){
  sound[6].setVolume(map(mouseX,0,width,0.0,1.0));
  sound[2].setVolume(1.0 - map(mouseX,0,width,0.0,1.0));
  sound[3].setVolume(map(mouseY,0,height,0.0,1.0));
  }
  else{
    sound[9].setVolume(map(mouseX,0,width,0.0,1.0));
    sound[8].setVolume(1.0 - map(mouseY,0,height,0.0,1.0));
    sound[7].setVolume(map(mouseY,0,height,0.0,1.0));
  }
}
