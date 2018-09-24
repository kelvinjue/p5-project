function preload() {
	// img = loadImage("../image.png");
	// font = loadFont("~/Documents/assetes/Montserrat/Montserrat-Bold.ttf");
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	// R, G & B integer values
	background(160);
	fill(255);

	input = createInput();
	input.position(20, 65);

	// Button for inputting number
	button = createButton('submit');
	button.position(input.x + input.width, 65);
	button.mousePressed(rep);


	value = createElement('h2', 'Enter a number between 1 and 1000');
	value.position(20, 5);

	textAlign(CENTER);
}


function rep() {
	clear();
	background(160);
	var num = parseInt(input.value(), 10);
	var d = decimal(num);
	var b = binary(num);
	var h = hexi(num);


	textAlign(CENTER);
	textSize(1500 / d.length);
	fill(65);
	text(d, window.innerWidth / 2, window.innerHeight / 2 - 100);

	textSize(1500 / b.length);
	fill(190);
	text(b, window.innerWidth / 2 , window.innerHeight / 2);

	textSize(1500 / h.length);
	fill(255);
	text(h, window.innerWidth / 2, window.innerHeight / 2 + 100);
}

function decimal(x) {
	var num = x.toString(10);
	var string = "";
	var i = 0;
	while (x > 0){
		rem = x % 10
		if (!string) {
			string = rem + "*10^0";
		}
		else{
			string = rem + "*10^" + i  + " + " + string;
		}
		x = Math.floor(x / 10);
		i += 1;

	}
	string = "decimal: " + num + ' = ' + string;
	return string;
}

function binary(x) {
	var num = x.toString(2);
	var string = "";
	var i = 0;
	while (x > 0){
		rem = x % 2;
		if (!string) {
			string = rem + "*2^0";
		}
		else{
			string = rem + "*2^" + i  + " + " + string;
		}
		x = Math.floor(x / 2);
		i += 1;

	} 
	string = "binary: " + num + ' = ' + string;
	return string;
}

function hexi(x) {
	var num = x.toString(16);
	var string = "";
	var i = 0;
	while (x > 0){
		rem = x % 16;
		if (!string) {
			string = rem + "*16^0";
		}
		else{
			string = rem + "*16^" + i  + " + " + string;
		}
		x = Math.floor(x / 16);
		i += 1;

	}
	string = "hex: " + num + ' = ' + string;
	return string;
}




