// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 600);
}

function draw() {
  //call your functions and do your drawing here.
  // please erase code below once you are working.

  background(73, 175, 222);
  textSize(22);
  fill(0, 102, 153);
  text("Acuarium", 200, 30);
  twoCircles();
}

// write functions here that are called in your setup or draw function. please remove this one.
const twoCircles = () => {
  noStroke();

  for (var j = 1; j < 350; j++) {
    fill(255, 250, 255, 255 - j++);
    ellipse(10, (j = 10), j + 2, 10, 10);
    for (var i = 1; i < 350; i++) {
      ellipse(40 * i++, j + 2, 10, 10);
    }
  }
};
