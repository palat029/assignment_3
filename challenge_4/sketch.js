// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 5;
var ballSpeedY = 5;

var ball2X = 200;
var ball2Y = 100;
var ballSpeed2X = 7;
var ballSpeed2Y = 7;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	//////////////////////////////
	// update

	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	ball2X = ball2X + ballSpeed2X;
	ball2Y = ball2Y + ballSpeed2Y;


	// don't let the ball go to far

	// right
	if (ballX > width) {
	if (ball2X > width +10)
		ballSpeedX = -ballSpeedX;
		ballSpeed2X = -ballSpeed2X;
	}

	// bottom
	if (ballY > height)
	if (ball2Y > height - 10) {
		ballSpeedY = -ballSpeedY;
		ballSpeed2Y = -ballSpeed2Y;
	}


	// left
	if (ballX < 0){
	if (ball2X < 20)
		ballSpeedX = -ballSpeedX;
		ballSpeed2X = -ballSpeed2X;
	}


	// top
	if (ballY < 0){
	if (ball2Y < 0)
		ballSpeedY = -ballSpeedY;
		ballSpeed2Y = -ballSpeed2Y ;
	}

//////////////////////////////
	// draw

	background(0);
	ellipse(ballX, ballY, 50, 50);
	ellipse(ball2X - 7, ball2Y - 7, 50, 50);
}
