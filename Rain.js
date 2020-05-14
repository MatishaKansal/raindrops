class Rain {
    constructor(x, y) {
    var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,5,15,options);
      this.width = 5;
      this.height =15;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position
      // pos.x = random(0, 400);
      // pos.y = random(0, 800);
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
     }
  };
