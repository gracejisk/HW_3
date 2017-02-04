function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(250);

var x=0;
	var x2=mouseX;
	var y=400;
	var y2=mouseY;
	while (x<400){
		line(x,400,mouseX,mouseY);
		x=x+10;
	}
}
