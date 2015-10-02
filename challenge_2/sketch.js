function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(130, 130, 170);

	//draw ellipses
	// noFill();
	// 	for(var i = 0; i < 100; i ++) {
	// 	stroke(255, 255, 255);
	// 	ellipse( 320, 180, i * 20, i * 20);
	// 	}
	//
	// for(var blk = 0; blk < 100; blk ++) {
	// 	stroke(0, 0, 0);
	// 		ellipse( 320, 180, blk * 30, blk * 30);
	// 	}


	////// percentage is similar to having a remainder
	//draw the ellipse
	noFill();
	for (var i = 0; i < 100; i++) {
		if (i % 2) {
			stroke(255);
		} else {
			stroke(1);
		}
		ellipse(320, 180, i * 20, i * 20);
	}
}
