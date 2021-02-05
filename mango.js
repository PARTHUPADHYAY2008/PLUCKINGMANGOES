class Mangoclass{
    constructor(x, y, radius) {
        this.radius = radius
        this.image = loadImage("Pluckingmangoes/mango.png")
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
      }
}