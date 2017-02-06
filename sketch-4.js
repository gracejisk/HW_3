function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);

	var x=200;
	var x2=200;
	
	noFill();
	for(var y=0;y<200;y=y+10){
		x=x-10;
		x2=x2+10;
		line(x,y,x2,y);
	}
	var x3=0;
	var x4=400;
	for(var y2=200; y2<400; y2=y2+10){
		
		for(var y3=200; y3<400; y3=y3+10){
	x3=x3+10
			x4=x4-10;
		
		}
}
}
