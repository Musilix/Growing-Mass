
let x;
let y;

let x1;
let y1;

let x2;
let y2;

let counter;

let colorChoice;
let colorChoice2;

let directionChoice;

let radix;
let displacer;

function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(2555);
	noStroke();


	radix = 0;
	displacer = 0;

	//first loc
	x = windowWidth/2;
	y = windowHeight/2;

	//second loc
	x1 = windowWidth/2 + 7;
	y1 = windowHeight/2 + 7;

	x2 = windowWidth/2 + 14;
	y2 = windowHeight/2 + 14;

	colorChoice = 0;

	//for random movements
	colorChoice2 = int(random(5));
	directionChoice = int(random(4));

}

function draw(){
	//drawSquare();
	//drawCircle();
	//drawTriangle();

	randomMovements();



	//radix > 40 for triangles
	if(radix > 80){
		noLoop();
	}
}

function drawTriangle(){
	if(colorChoice < 20){
		fill('red');
	}else if(colorChoice < 30){
		fill('blue');
	}else if(colorChoice < 41){
		fill('green');
	}else{
		fill('orange');
	}

	//triangle pre-programmed
	if(radix <= 20){
		x+=8;
		x1+=8;
		x2+=8;
		y=y;
		y1=y1
		y2=y2;
	}else if(radix <= 30){
		x-=8;
		x1-=8;
		x2-=8;
		y-=8;
		y1-=8;
		y2-=8;
	}else{
		x-=8;
		x1-=8;
		x2-=8;
		y+=8;
		y1+=8;
		y2+=8;
	}

	radix++;

	ellipse(x,y,8,8);
	ellipse(x1,y1,8,8);
	ellipse(x2,y2,8,8);
	ellipse(x2+7,y2+7,8,8);

	directionChoice = int(random(4));
	colorChoice++;
}

function drawSquare(){
	//change to hex colors
	if(colorChoice < 20){
		fill(color(255,0,0));
	}else if(colorChoice < 40){
		fill(color(255,60,50));
	}else if(colorChoice < 60){
		fill(color(0,255,0));
	}else{
		fill('orange');
	}

	//square pre-programmed
	if(radix <= 20){
		x+=8;
		x1+=8;
		x2+=8;
		y=y;
		y1=y1
		y2=y2;
	}else if(radix <= 40){
		x=x;
		x1=x1;
		x2=x2;
		y-=8;
		y1-=8;
		y2-=8;
	}else if(radix <= 60){
		x-=8;
		x1-=8;
		x2-=8;
		y=y;
		y1=y1
		y2=y2;
	}else{
		x=x;
		x1=x1;
		x2=x2;
		y+=8;
		y1+=8;
		y2+=8;
	}

	radix++;

	ellipse(x,y,8,8);
	//ellipse(x1,y1,8,8);
	// ellipse(x2,y2,8,8);
	// ellipse(x2+7,y2+7,8,8);
	// ellipse(x2+14,y2+14,8,8);
	// ellipse(x2+21,y2+21,8,8);

	directionChoice = int(random(4));
	colorChoice++;
}

function drawCircle(){
	if(colorChoice < 20){
		fill(color(255,0,0));
	}else if(colorChoice < 40){
		fill(color(255,60,50));
	}else if(colorChoice < 60){
		fill(color(0,255,0));
	}else{
		fill('orange');
	}

	if(radix <= 20){
		x+=4;
		x1+=4;
		x2+=4;
		y=y;
		y1=y1
		y2=y2;
	}else if(radix <= 30){
		x+=4;
		x1+=4;
		x2+=4;
		y-=4;
		y1-=4;
		y2-=4;
	}else if(radix <= 50){
		x=x;
		x1=x1;
		x2=x2;
		y-=4;
		y1-=4;
		y2-=4;
	}else{
		x=x;
		x1=x1;
		x2=x2;
		y+=8;
		y1+=8;
		y2+=8;
	}

	radix++;

	ellipse(x,y,3,3);
	ellipse(x1,y1,3,3);
	ellipse(x2,y2,3,3);


}


function randomMovements(){
	//for random movements
	if(colorChoice2 ==0){
		fill('red');
	}else if(colorChoice2 == 1){
		fill('blue');
	}else if(colorChoice2 == 2){
		fill('green');
	}else{
		fill('orange');
	}

	if(directionChoice == 0){//up
		y+=int(random(5));
		y1+=int(random(5));
		y2+=int(random(5));
		x=x;
		x1=x1
		x2=x2
	}else if(directionChoice == 1){//eft
		x-=int(random(5));
		x1-=int(random(5));
		x2-=int(random(5));
		y=y;
		y1=y1
		y2=y2;
	}else if(directionChoice == 2){//right
		x+=int(random(5));
		x1+=int(random(5));
		x2+=int(random(5));
		y=y;
		y1=y1
		y2=y2;
	}else{//down
		x=x;
		x1=x1;
		x2=x2;
		y-=int(random(5));
		y1-=int(random(5));
		y2-=int(random(5));
	}

	ellipse(x,y,3,3);
	ellipse(x1,y1,3,3);
	ellipse(x2,y2,3,3);
	colorChoice2 = int(random(5));
	directionChoice = int(random(4));


}