class Particle {
    constructor(x,y,r) {
      var options = {
          friction:0,
          restitution: 0.4,
          gravity: gravity
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      this.colr = random(255);
      //this.collisionFilter = 0.5;
      this.colb = random(255);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        stroke(0);
        strokeWeight(2.5);//fill(0)
        if(bSlider.value() === 0){
            fill(this.colr,0,this.colb);
        } else if(bSlider.value() === 1){
            fill(random(255),0,random(255));
        }
        ellipse(0, 0, this.r*2);
        pop();
    }
  };
