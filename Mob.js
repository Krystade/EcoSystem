function Mob (r,g,b,x,y,rad,lifeSpan){
	//Location and Speed
	this.x = x;
	this.y = y;
	
	
	this.display = function(){
		stroke(0);
		strokeWeight(1);
		fill(this.color);
		ellipse(this.x, this.y, this.rad, this.rad);
		noFill();
		textAlign(CENTER);
		textSize(this.rad * .75);
		text(ceil((this.lifeSpan * 30 - this.age)/30),this.x,this.y - this.rad);
	}
	
	this.eats = function(food){
		if(dist(this.x, this.y, food.x, food.y) < (this.rad/2 + 10)){
		   return true;
		   }else{
		   return false;
		   }
	}
}