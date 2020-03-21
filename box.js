class Box {
    constructor(x, y, w, h) {
        // add options such as friction and restitution. Experiment with the values
        var options = {
            friction: 1,
            restitution: 0.8,
            gravity: gravity
        };
        // create your box using the function arguments
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.colr = random(255);
        this.colb = random(255);
        // Create a display method which will draw the box every time it is called inside the draw method.
        // remember to push and pop.
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(0);
        strokeWeight(2.5);
        if(bSlider.value() === 0){
            fill(this.colr,0,this.colb);
        } else if(bSlider.value() === 1){
            fill(random(255),0,random(255));
        }
        rect(0, 0, this.w, this.h);
        pop();
    }
}
