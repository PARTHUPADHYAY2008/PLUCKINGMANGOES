class boyclass {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,1600,20,options);
       
this.image=loadImage("Pluckingmangoes/boy.png")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
 
      push();
      translate(pos.x, pos.y);
      rectMode(CENTRE)
      fill(255,255,0)
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 400, 400);
      pop();
    }
  };
