function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(50, 50, 50);

	// set a fill color
	fill(0, 0, 0);

	// set stroke
	stroke(255, 255, 255);

	// draw the rectangle
	var rectW = (53);{
	var rectH = (53);

	for(var y = 0; y < 4; y++)
	for(var x = 0; x < 10; x++)
			rect(x * 60 + 28, y * 0 + 220, rectW, rectH );
		}


}
