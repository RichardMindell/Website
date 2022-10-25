let snowflakes = [];
let links;

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  links = selectAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].mouseOver(highlight);
    links[i].mouseOut(unHighlight);
  }
}

function draw() {
  background('#EEA47FFF');
  let t = frameCount / 60; // update time
  
  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

function windowResized() {
  resizeCanvas(displayWidth,displayHeight)
}    

function highlight() {
  this.style('color', '#FEE715FF');
}

function unHighlight() {
  this.style('color','#00539CFF')
}
//function touchStarted () {
 // if (!fullscreen()) {
   // fullscreen(true);
 //}
//}


