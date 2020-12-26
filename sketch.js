var input1;
var Nameofsong;

function setup() {
  createCanvas(800,400);
  input1 = createInput("")
  input1.position(100,100)
  var title = createElement('h3');
  title.html("Put the name of a song!:)");
  title. position(100,50);
  
  
}

function draw() {
  background(255,255,255);
  Nameofsong = input1.value();
  text(Nameofsong,100,200);
  drawSprites();
  
}