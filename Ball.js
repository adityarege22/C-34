class Ball {
    constructor(x, y,width, height, angle) {
      var options = {
          //'restitution':0.5,
          'frictionAir':0.005,
          'density':1
      }
      this.body = Bodies.circle(x, y, width, height, angle, options);
      this.width = width;
      this.height =height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("blue");
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  