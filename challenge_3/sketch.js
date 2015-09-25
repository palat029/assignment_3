function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

}

function draw() {
	// clear the background
	background(150, 26, 30);

	// set a fill color
	fill(150, 26, 30);
	stroke(255, 255, 255);
	// draw the ellipse
	line(mouseX, 0, mouseX, 640);
	line(640, mouseY, 0, mouseY);
	ellipse(mouseX, mouseY, 30, 30);

	if(mouseIsPressed){
		  background(50, 50, 100);
			fill(50, 50, 100);
			stroke(255, 255, 255);
			line(mouseX, 0, mouseX, 640);
			line(640, mouseY, 0, mouseY);
			ellipse(mouseX,mouseY,30, 30);
	} else {
			background(150, 26, 30);
			fill(150, 26, 30);
			stroke(255, 255, 255);
			line(mouseX, 0, mouseX, 640);
			line(640, mouseY, 0, mouseY);
			ellipse(mouseX, mouseY, 30, 30);

	}



}
