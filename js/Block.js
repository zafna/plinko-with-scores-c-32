class Block {
  constructor(x,y,width,height) {
    var options = {
      'restitution':1,
      'friction':0.1
       // isStatic: true
    }
    this.visiblity=225;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image=loadImage("images/block.png");
    World.add(world, this.body);
  }
  score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }
  }
  display(){

    var pos =this.body.position;
    if(this.body.speed<3){
      imageMode(CENTER);
      image (this.image,pos.x,pos.y,this.width,this.height)
    }
    
    else{
      World.remove(world,this.body);
      push();
      this.visiblity=this.visiblity-5;
      tint(255,this.visiblity);
        image(this.image,pos.x,pos.y,this.width,this.height);
      pop();

    }
  }
};
