let t = function( p ) {
  
    p.fireworks = [];
    let gravity;
  
  
  function Particle(x, y, hu, firework) {
  this.pos = p.createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;
  this.acc = p.createVector(0, 0);

  if (this.firework) {
    this.vel = p.createVector(0, p.random(-12, -8));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(p.random(2, 10));
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  this.show = function() {
    p.colorMode(p.HSB);

    if (!this.firework) {
      p.strokeWeight(2);
      p.stroke(hu, 255, 255, this.lifespan);
    } else {
      p.strokeWeight(4);
      p.stroke(hu, 255, 255);
    }

    p.point(this.pos.x, this.pos.y);
  };
}
  
  function Firework() {
  this.hu = p.random(255);
  this.firework = new Particle(p.random(p.width), p.height, this.hu, true);
  this.exploded = false;
  this.particles = [];

  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(p.gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(p.gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  };

  this.explode = function() {
    for (var i = 0; i < 100; i++) {
      var p = new Particle(
        this.firework.pos.x,
        this.firework.pos.y,
        this.hu,
        false
      );
      this.particles.push(p);
    }
  };

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  };
}

  p.setup = function() {
    p.createCanvas(400, 300);
    p.colorMode(p.RGB);
    p.gravity = p.createVector(0, 0.2);
    p.stroke(255);
    p.strokeWeight(4);
//    p.background(238, 164, 127);
    createV = p.createVector(p.x,p.y)
  }

  p.draw = function() {
    p.colorMode(p.RGB);
    p.background(238, 164, 127, 25);

    if (p.random(1) < 0.03) {
      p.fireworks.push(new Firework());
    }

    for (var i = p.fireworks.length - 1; i >= 0; i--) {
      p.fireworks[i].update();
      p.fireworks[i].show();

      if (p.fireworks[i].done()) {
        p.fireworks.splice(i, 1);
      }
    }
  }
}

let myp52 = new p5(t, 'c2');

    let hrCol =  [0, 83, 156];
    let minCol = [150, 100, 255];
    let secCol = [254, 231, 21];
    let intCol = [255]
    
let t3 = function( p2 ) {
  
p2.setup = function() {
  p2.createCanvas(400, 400);
  p2.angleMode(p2.DEGREES);
}
  
p2.draw = function() {
  p2.background('#EEA47FFF');
  p2.translate(200, 200);
  p2.rotate(-90);

  let hr = p2.hour();
  let mn = p2.minute();
  let sc = p2.second();

  p2.strokeWeight(8);
  p2.stroke(secCol);
  p2.noFill();
  let secondAngle = p2.map(sc, 0, 60, 0, 360);
  p2.arc(0, 0, 300, 300, 0, secondAngle);

  p2.stroke(minCol);
  let minuteAngle = p2.map(mn, 0, 60, 0, 360);
  p2.arc(0, 0, 280, 280, 0, minuteAngle);

  p2.stroke(hrCol);
  let hourAngle = p2.map(hr % 12, 0, 12, 0, 360);
  p2.arc(0, 0, 260, 260, 0, hourAngle);

  p2.push();
  p2.rotate(secondAngle);
  p2.stroke(secCol);
  p2.line(0, 0, 100, 0);
  p2.pop();

  p2.push();
  p2.rotate(minuteAngle);
  p2.stroke(minCol);
  p2.line(0, 0, 75, 0);
  p2.pop();

  p2.push();
  p2.rotate(hourAngle);
  p2.stroke(hrCol);
  p2.line(0, 0, 50, 0);
  p2.pop();

  p2.stroke(255);
  p2.point(0, 0);

//  textAlign(CENTER);
  p2.rotate(90)
//  fill(150, 255, 100);
  p2.noStroke();
  p2.textSize(32);
 // text(hr + ':' + mn + ':' + sc, 0, 0);

//  text(hr + ':' + mn + ':' + sc, 0, 0);
    p2.translate(-64, -10);
    p2.textAlign(p2.LEFT);

    var string = [
        [hr, hrCol],
        [":", intCol],
        [mn, minCol],
        [":", intCol],
        [sc, secCol]
    ];
    drawtext(0, 0, string );
}







function drawtext( x, y, text_array ) {
  
    var pos_x = x;
    for ( var i = 0; i < text_array.length; ++ i ) {
        var part = text_array[i];
        var t = part[0];
        var c = part[1];
        var w = p2.textWidth( t );
        p2.fill( c );
        p2.text( t, pos_x, y);
     //   text( t, 0, 0);
        pos_x += w;
    }
}
  
}

let myp522 = new p5(t3, 'c5');