class Bird {
    constructor(m, a,n,i) {
     
      this.body= Bodies.rectangle(m, a, n, i);
    
      World.add(world, this.body);
      this.width = n;
      this.height = i;
    }
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY
    
     rectMode(CENTER)
      fill  ("red")  
     rect(this.body.position.x,this.body.position.y,this.width,this.height)
     pop ();
 
    }
  };
  