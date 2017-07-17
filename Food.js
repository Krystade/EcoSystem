function Food (x,y){
	this.x = x;
	this.y = y;
	this.display = function(){
		noStroke();
		fill(color(20,200,40));
		ellipse(this.x,this.y, 20, 20);
	}
}