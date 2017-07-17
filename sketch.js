var entities = [];
var foods = [];

function setup() {
	var width = windowWidth;
	var height = windowHeight;
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	
	for(var i = 0; i < 15; i++){
		foods.push(new Food(random(0,width),random(0,height)));
		entities.push(new Mob(random(0,255), random(0,255), random(0,255), random(0,width), random(0,height), 15, 20));
		//entities.push(new Mob(100, 16, 30,random(0,width),random(0,height)));
	}
}

function draw() {
	background (200);
	//New piece of food is spawned every (foodRate) frames
	if (frameCount % foodRate == 0){
		foods.push(new Food(random(0,width),random(0,height)));	
	}
	for(var i = 0; i < foods.length; i++){
		foods[i].display();
	}
	fill(0);
	strokeWeight(0);
	textSize(30);
	textAlign(LEFT);
	text("Time: " + ceil(frameCount / 30), 50, 100);
	text("Population: " + entities.length, 50, 150 );
}

function mousePressed() {
	entities.push(new Mob(random(0,255), random(0,255), random(0,255), mouseX, mouseY));
	//entities.push(new Mob(100, 16, 30, mouseX, mouseY));
}