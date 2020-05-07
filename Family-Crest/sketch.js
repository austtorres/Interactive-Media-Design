////////////////////////////////////////////////////////////////////////////////
// Main File: sketch.js
// Semester: Spring 2020
// Santa Reparata International School of Art Interactive Media Design
//
// Authors: Austin Torres
//
/////////////////////////// OTHER SOURCES OF HELP //////////////////////////////
//
// Persons: N/A
//
// Online sources:
//  Information about drawing arcs
//  https://www.geeksforgeeks.org/p5-js-arc-function
//
//
//////////////////////////// 80 columns wide ///////////////////////////////////

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(189, 167, 117);
}

function draw() {
  // Gold leaf frame
  frame();

  // Vermillion interior canvas
  canvasInterior();

  // Animated flower
  flower();

  // Right wine bottle
  rightBottle();

  // Left wine bottle
  leftBottle();

  // Large wine jug
  midJug();

 // hay pile below wine
 hay();

 // Wagon carrying wine
 wagon();
  // /*
  //  * Adapted from https://www.geeksforgeeks.org/p5-js-arc-function
  //  *
  //  * This is the drawing of the bridge
  //  */
  // arc(width/2, height/2, 200, 250, PI, 0, OPEN);
  // arc(width/2-250, height/2, 200, 250, 2*PI/1.24, 0, OPEN);
  // arc(width/2+250, height/2, 200, 250, PI, PI/0.72, OPEN);
  // line(width/2-165,height/2-200, width/2+165, height/2-200);

  // let color1 = color(227, 185, 86);
  // let color2 = color(222, 169, 44);
  // /*
  //  * Hay pile inside of Wagon
  //  */
  //  for (let i = 0; i < 45; i++) {
  //
  //    //rotate(random(PI/2,PI));
  //    fill(color(222+random(-10,5),169+random(-10,16),44+random(-10,42)));
  //    rect(random(width/2-160, width/2+150), random(height/2-45, height/2-60), random(5,10), random(15,30));
  // }
}


 /*
  * Animated flower growing in background
  * Adapted from https://editor.p5js.org/son/sketches/SkJJxG2Cm
  *
  */
function flower(){

  for (var r21 = 0; r21 < 10; r21++) {
    stroke(85,107,47,20);
    strokeWeight(0);
  }

  push();
  fill(224, 208, 99, 240);
  translate(width/2, height/2-165);
  strokeWeight(0);

  for (var r2 = 0; r2 < 10; r2++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();
}

 /*
  * Gold leaf frame
  */
  function frame(){
    strokeWeight(5);
    fill(224, 164, 88);
    ellipse(width/2, height/2, 525, 675);
  }

  /*
   * Vermillion paint canvas
   */
   function canvasInterior(){
     strokeWeight(5);
     fill(227, 66, 52);
     ellipse(width/2, height/2, 450, 600);
   }

   /*
    * Right wine bottle
    */
function rightBottle(){
   strokeWeight(0);

   // Round top
   fill(74, 20, 47);
   circle(width/2+67, height/2-110,35);

   // Body
   fill(74, 20, 47);
   rect(width/2+50, height/2-115, 35,100);

   // Cork
   fill(194, 148, 91);
   rect(width/2+63,height/2-150, 10,10);

   // Neck
   fill(74, 20, 47);
   rect(width/2+62, height/2-143, 12,18);

   // Bottle glare
   fill(130, 101, 122);
   arc(width/2+70, height/2-90, 25, 55, 3/2*PI, PI/2);

   // Bottle label
   fill(219, 211, 215);
   rect(width/2+55, height/2-100, 25,40);
 }

 /*
  * left wine bottle
 */
 function leftBottle(){
strokeWeight(0);
fill(59, 107, 42);

// Round top
circle(width/2-67, height/2-110,35);

// Body
fill(59, 107, 42);
rect(width/2-84, height/2-115, 35,100);

// Cork
fill(194, 148, 91);
rect(width/2-71,height/2-150, 10,10);

// Neck
fill(59, 107, 42);
rect(width/2-72, height/2-144, 12,18);

// Bottle glare
fill(32, 153, 68);
arc(width/2-64, height/2-90, 25, 55, 3/2*PI, PI/2);

// Bottle label
fill(219, 211, 215);
rect(width/2-79, height/2-100, 25,40);
}

/*
 * Middle jug
 */
function midJug(){
 // Round top
fill(43, 79, 31);
circle(width/2-0, height/2-110,68);

// Body
fill(43, 79, 31);
rect(width/2-35, height/2-115, 70,100);

// Cork
fill(194, 148, 91);
rect(width/2-7,height/2-170, 13,10);

// Neck
fill(43, 79, 31);
rect(width/2-8, height/2-160, 16,22);

// Jug glare
fill(32, 153, 68);
arc(width/2+10, height/2-110, 35, 50, 3/2*PI, PI/2);

// Jug label
fill(219, 211, 215);
rect(width/2-30, height/2-110, 60,50);

// Jug text
stroke(0,0,0,90);
strokeWeight(3);
line(width/2-25, height/2-100, width/2+25, height/2-100);
line(width/2-20, height/2-90, width/2+20, height/2-90);
line(width/2-25, height/2-70, width/2+25, height/2-70);

}

 /*
  * Rectangle of Hay
  */
function hay(){
  stroke(0);
  strokeWeight(1);
  fill(227, 185, 86);
  rect(width/2-158, height/2-60, 315, 20);
}

/*
 * Wagon carrying bottles of wine
 */
function wagon(){
  strokeWeight(4);
  // Wagon body
  fill(163, 112, 57);
  rect(width/2-160, height/2-40, 320,160);

  // Horizontal Wagon lines
  line(width/2-160, height/2+10, width/2+160, height/2+10);
  line(width/2-160, height/2+65, width/2+160, height/2+65);

  // Vertical wagon lines
  line(width/2-60, height/2+65, width/2-60, height/2+10);
  line(width/2+85, height/2-40, width/2+85, height/2+10);

  // Wagon wheel
  ellipse(width/2+80, height/2+100, 165, 165);

  // Axle
  fill(87, 57, 26);
  ellipse(width/2+80, height/2+100, 20,20);

  // Wagon handles
  rect(width/2-220, height/2-30, 60,16);

}
