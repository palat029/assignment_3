function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// clear the background
	background(0, 0, 0);

	// set a fill color
	fill(255, 255, 255);

	// draw the ellipse
	var x = random(-10, 10);
	ellipse(mouseX + x, mouseY + x, 50, 50);
}
