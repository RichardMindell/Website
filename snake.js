let snake;
let rez = 20;
let food;
let w;
let h;
let score = 0;
let z;
let gameEndVar;
let button;

let t2 = function( p ) {
  
p.setup = function() {
  p.createCanvas(300, 300);
  w = p.floor(p.width / rez);
  h = p.floor(p.height / rez);
  p.frameRate(15);
  z = p.createP('Your score was:' + '' + score)
  gameEndVar = p.createP('GAME OVER')
//  z = p.select('#score')
//  gameEndVar = p.select('#eog')
  snake = new Snake();
  foodLocation();
 //  button = p.select('#button')
  button = p.createButton('Play Snake');
  button.parent('#butt')
 // let button = p.createButton('Play Games');
  button.mousePressed(restartGame);
}

function foodLocation() {
  let x = p.floor(p.random(w));
  let y = p.floor(p.random(h));
  food = p.createVector(x, y);

}

  
//function keyPressed() {
//  if (keyCode === LEFT_ARROW) {
//    snake.setDir(-1, 0);
//    console.log('left');
//  } else if (keyCode === RIGHT_ARROW) {
//    snake.setDir(1, 0);
//  } else if (keyCode === DOWN_ARROW) {
//    snake.setDir(0, 1);
//  } else if (keyCode === UP_ARROW) {
//    snake.setDir(0, -1);
//  } else if (key == ' ') {
//    snake.grow();
//  }

//}

p.draw = function() {
//  z = createP() 
  
  z.remove();
  gameEndVar.remove();
  
//  button = p.createButton('Play Games');
//  button.id = ('play')
 // button = p.select('#button')
//  button.position(200, 200);
//  let button = select('#button')
//  button.mousePressed(restartGame);
//  button.style('background-color', '#00539CFF')
  
//  z = createP()
  
  p.scale(rez);
  p.background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
      
  if (p.keyIsDown(65) ) {
      snake.setDir(-1, 0);
      console.log('left');
    }
  else if (p.keyIsDown(68) ) {  
    snake.setDir(1, 0);
  }
  else if (p.keyIsDown(87) ) {
    snake.setDir(0, -1);
  }
  else if (p.keyIsDown(83)) {
    snake.setDir(0, 1);
  }
    

  if (snake.endGame()) {
    p.print("END GAME");
//    background(255, 0, 0);
    p.background('#EEA47FFF')
    scoreCard();

      z = p.createP('Your score was:' + '' + score) 
  //  gameEndVar = p.createP('End of Game')
  //  gameEndVar.position(p.width/3, p.height/3)
      gameEndVar.parent('#blankP')
      z.parent('#blankP')
//    z.remove();
//    z.html('Your score was:' + '' + score)
//    z.position(p.width/3, p.height/2)
//    z.position(800, 800)
    p.noLoop();
  }

  p.noStroke();
 // fill(255, 0, 0);
  p.fill('#EEA47FFF')
  p.rect(food.x, food.y, 1, 1);
}

function restartGame() {
  endGame = false;
  p.loop();
//  z.remove();
  snake = new Snake();
//  background(0, 255, 0);
}

function scoreCard() {
  console.log('your score was' + score)
}
  
  class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = p.createVector(p.floor(w/2), p.floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  update() {
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  grow() {
  	let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
    score = this.len
  }
  
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	p.fill(0);
      p.noStroke();
      p.rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}
  
  
}

let myp521 = new p5(t2, 'c3');