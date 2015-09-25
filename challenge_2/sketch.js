function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(130, 130, 170);
	// draw the ellipse
	stroke(255, 255, 255);
	noFill();
	var diameter = (53);
	var diameterT = (53);
		for (var y = 0; y < 4; y++)
			if ( y === 2){
					stroke(255, 255, 255);
					noFill();
			}	else {
					stroke(0, 0, 0);
					noFill();
			}
			for (var x = 0; x< 6; x++){
		 		ellipse(x * 70, y * 10 + 220, diameter, diameterT);
}

}
