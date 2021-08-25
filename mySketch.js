var x=250;
var y=250;
var canvas;
var h1;
function setup() {
	canvas = createCanvas(500, 500);
	background(300);
	h1 = createElement("h1","Creativity take Coruage");
	canvas.position(0,0);
	
	
}
function mousePressed(){
createP("");
}
function draw() {
	fill(random(100,225),20,150);
	ellipse(x, y, 20, 20);
	h1.position(x,y);
	x = x+random(-10,10);
	y = y+ random(-10,10);
}