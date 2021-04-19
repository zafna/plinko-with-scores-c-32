const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var polygon_img, backgroundImg;
var bg = "images/light.jpg";

function preload(){
  getBackgroundImage();
    polygonImg=loadImage("images/polygon.png");

}

function setup(){
    var canvas=createCanvas(1200,800);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(600,790,1200,10);
    ground1=new Ground(790,500,250,10);
    ground2=new Ground(980,300,170,10)

    block1 = new Block(700,475,30,40);
    block2 = new Block(730,475,30,40);
    block3 = new Block(760,475,30,40);
    block4 = new Block(790,475,30,40);
    block5 = new Block(820,475,30,40);
    block6 = new Block(850,475,30,40);
    block7 = new Block(880,475,30,40);
    //level two
    block8 = new Block(730,435,30,40);
    block9 = new Block(760,435,30,40);
    block10 = new Block(790,435,30,40);
    block11 = new Block(820,435,30,40);
    block12 = new Block(850,435,30,40);
    //level three
    block13 = new Block(760,395,30,40);
    block14 = new Block(790,395,30,40);
    block15 = new Block(820,395,30,40);
    //top
    block16 = new Block(790,355,30,40);

    //set 2 for second stand
    //level one
    blocks1 = new Block(920,275,30,40);
    blocks2 = new Block(950,275,30,40);
    blocks3 = new Block(980,275,30,40);
    blocks4 = new Block(1010,275,30,40);
    blocks5 = new Block(1040,275,30,40);
    //level two
    blocks6 = new Block(950,235,30,40);
    blocks7 = new Block(980,235,30,40);
    blocks8 = new Block(1010,235,30,40);
    //top
    blocks9 = new Block(980,195,30,40);

    polygon=Bodies.circle(100,600,20);
    World.add(world,polygon);
    

    slingshot = new Slingshot(this.polygon,{x:100,y:550});



}

function draw(){
    //background(0);
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

    textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  text("SCORE : "+score,750,40);

    ground.display();
    ground1.display();
    ground2.display();

    strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();

  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

  
  imageMode (CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,50,50)

  textSize(20);
  fill("yellow");
  text("Drag the polygon and Release it, to launch it towards the blocks",100,30);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
    if(keyCode===32){
      slingshot.attatch(this.polygon);
    }
  }
  
  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      bg = "images/light.jpg";
    } else {
      bg = "images/dark.jpg";
    }
 
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
 }