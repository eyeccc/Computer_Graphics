"use strict";

function  Mouse(context)
{
   this.context = context;
   this.tailA = 0;
   this.x = 570;
   this.y = 20;
   this.mouth = 1;
}

/*Mouse.prototyoe.drawTail = function()
{
  this.context.save();
  this.context.beginPath();
  this.context.moveTo(180,220);
  this.context.bezierCurveTo(300,220,250,200,250,150);
  this.context.stroke();
};*/

Mouse.prototype.drawBody = function()
{
    //this.context.save();
    this.context.scale(0.7,0.7);
    this.context.translate(this.x,this.y);
    this.context.fillStyle = "black";
    this.context.beginPath();
    this.context.arc(150,200,70,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(150,100,70,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(85,50,25,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(215,50,25,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(85,50,15,0,2*Math.PI);
    this.context.fillStyle="white";
    this.context.fill();

    this.context.beginPath();
    this.context.arc(215,50,15,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(180,80,15,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(120,80,15,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(120,80,10,0,2*Math.PI);
    this.context.fillStyle="black";
    this.context.fill();

    this.context.beginPath();
    this.context.arc(180,80,10,0,2*Math.PI);
    this.context.fill();

    this.context.beginPath();
    this.context.arc(150,100,10,0,2*Math.PI);
    this.context.fillStyle="brown";
    this.context.fill();

    this.context.lineWidth = 2;
    this.context.lineCap = "butt";
    this.context.moveTo(150, 110);
    this.context.lineTo(150, 120);
    this.context.strokeStyle="white";
    this.context.stroke();

 /*   this.context.beginPath();
    this.context.arc(150,120,30,0,Math.PI);
    this.context.fillStyle="red";
    this.context.fill();
    this.context.closePath();
*/
 /*   this.context.fillStyle="white";
    this.context.fillRect(155,120,10,10);
    this.context.fillRect(135,120,10,10);
*/
    this.context.moveTo(180, 110);
    this.context.lineTo(200, 100);

    this.context.moveTo(180, 115);
    this.context.lineTo(200, 120);

    this.context.moveTo(120, 110);
    this.context.lineTo(100, 100);

    this.context.moveTo(120, 115);
    this.context.lineTo(100, 120);

    this.context.stroke();
    this.context.restore();
  };
//function Tail(context)
//{
//	this.context = context;
//}
Mouse.prototype.drawMouth = function()
{
  this.context.scale(0.7,0.7);
  this.context.translate(this.x,this.y);
  this.context.translate(0,120);
  this.context.scale(1,this.mouth);
  this.context.translate(0,-120);
  this.context.beginPath();
  this.context.arc(150,120,30,0,Math.PI);
  this.context.fillStyle="red";
  this.context.fill();
  this.context.closePath();
  this.context.setTransform(1,0,0,1,0,0);
}
Mouse.prototype.drawTail = function()
{
  this.context.strokeStyle="black";	
  this.context.scale(0.7,0.7);
  this.context.rotate(-this.tailA);
  this.context.translate(this.x,this.y);
  this.context.beginPath();
  this.context.moveTo(180,220);
  this.context.bezierCurveTo(300,220,250,200,250,150);
  //this.context.rotate(20*Math.PI/180);
  this.context.stroke();
  this.context.setTransform(1,0,0,1,0,0); //this let the canvas back
};
Mouse.prototype.drawTeeth = function()
{
  this.context.scale(0.7,0.7);
  this.context.translate(this.x, this.y);
  this.context.fillStyle="white";
  this.context.fillRect(155,120,10,10);
  this.context.fillRect(135,120,10,10);
  this.context.setTransform(1,0,0,1,0,0);
}
Mouse.prototype.draw = function ()
{
   // this.context.save();
    this.drawBody();
    this.drawMouth();
    this.drawTeeth();
    this.drawTail();
};
Mouse.prototype.update = function() {
  this.tailA += 0.005;
  this.mouth -= 0.05;
}
Mouse.prototype.update2 = function(){
  this.tailA -= 0.005;
  this.mouth += 0.05;
}
Mouse.prototype.move1 = function(){
  if(this.x <= 0)
  {
   this.x = 570;
  }
  else
  {
   this.x -= 1;
  }
  //this.y += 3;
}
/*Mouse.prototype.move2 = function(){
  this.x -= 3;
  this.y -= 3;
}*/
function Cheese(context)
{
	this.context = context;
	this.ro = 0;
	this.x = 85;
	this.y = 235;
	
}
 Cheese.prototype.draw = function()
 {
	this.context.save();
	this.context.translate(85,235);
	this.context.rotate(this.ro);
	this.context.translate(-85,-235);
	//this.context.translate(this.x, this.y);
	//this.context.translate(this.x,this.y);
	
	  this.context.strokeStyle="#FFCC00";
	  this.context.fillStyle="yellow";
	  
	  this.context.beginPath();
	  this.context.moveTo(20, 200);
	  this.context.lineTo(100, 200);
	  this.context.lineTo(80, 250);
	  this.context.fill();
	  this.context.closePath();
	  this.context.stroke();
	  
	  
	  this.context.beginPath();
	  this.context.moveTo(20, 200);
	  this.context.lineTo(20, 220);
	  this.context.lineTo(80, 270);
	  this.context.lineTo(80, 250);
	  this.context.fill();
	  this.context.closePath();
	  this.context.stroke();
	  
	  this.context.beginPath();
	  this.context.lineTo(80, 250);
	  this.context.lineTo(80, 270);
	  this.context.lineTo(100, 220);
	  this.context.lineTo(100, 200);
	  this.context.fill();
	  this.context.closePath();
	  this.context.stroke();
	  
	  this.context.beginPath();
	  this.context.arc(50,200,10,0,Math.PI);
	  this.context.arc(80,200,10,0,Math.PI);
	  this.context.fillStyle="#FFCC00";
	  this.context.fill();
	  
	  this.context.beginPath();
	  this.context.arc(70,220,8,0,2*Math.PI);
	  this.context.fill();
	  
	  this.context.beginPath();
	  this.context.arc(70,250,5,0,2*Math.PI);
	  this.context.fill();
	  
	  this.context.beginPath();
	  this.context.arc(80,230,5,0,2*Math.PI);
	  this.context.fill();
	  
	  this.context.beginPath();
	  this.context.arc(50,228,5,0,1.5*Math.PI);
	  this.context.fill();
	this.context.setTransform(1,0,0,1,0,0);
  };
Cheese.prototype.update = function(){
	this.ro += 0.004;
//	this.x += 1;
}
  function Cat(context)
{
	this.context = context;
	this.x = 600;
	this.y = 20;
	this.hand = 0;
};
Cat.prototype.update = function()
{
	if(this.x <= 30)
	{
		this.x = 600;
	}
	else
	{
		this.x -= 1;
	}
}
Cat.prototype.handshake1 = function()
{
  this.hand += 0.01;
}
Cat.prototype.handshake2 = function()
{
  this.hand -= 0.01;
}
Cat.prototype.drawRight = function ()
{
   this.context.fillStyle="#FFCC00";
   this.context.scale(0.7,0.7);
   this.context.translate(this.x+520,230);
   this.context.rotate(this.hand);
   this.context.translate(-520-this.x,-230);
  //this.context.translate(this.x, 0);
  this.context.beginPath();
  this.context.moveTo(570+this.x,170);
  this.context.lineTo(570+this.x,150);
  this.context.lineTo(500+this.x,220);
  this.context.lineTo(500+this.x,240);
  this.context.fill();
  this.context.beginPath();
  this.context.arc(570+this.x,150,10,0, 2*Math.PI);
  this.context.arc(580+this.x,157,15,0, 2*Math.PI);
  this.context.arc(575+this.x,170,10,0, 2*Math.PI);
  this.context.fill();
  this.context.setTransform(1,0,0,1,0,0);
}
Cat.prototype.drawHand = function()
{
  //this.context.translate(420,130);
  //this.context.translate(this.x,this.y);
 // this.context.scale(x,y);
  this.context.scale(0.7,0.7);
  //this.context.scale(x,y);
  this.context.translate(570,185);
  this.context.rotate(-this.hand);
  this.context.translate(-570,-185);
//  this.context.translate(z,0);
  //this.context.scale(x,y);
  this.context.fillStyle="#FFCC00";
  this.context.beginPath();
  this.context.moveTo(570,250);
  this.context.lineTo(450,170);
  this.context.lineTo(450,200);
  this.context.lineTo(570,270);
  this.context.fill();
  this.context.beginPath();
  this.context.arc(450,170,10,0, 2*Math.PI);
  this.context.arc(440,185,15,0, 2*Math.PI);
  this.context.arc(450,200,10,0, 2*Math.PI);
  this.context.fill();
  //this.context.restore();
  //this.context.scale(1/0.7,1/0.7);
  this.context.setTransform(1,0,0,1,0,0);
}
Cat.prototype.drawBody = function()
  {
	this.context.save();
	this.context.scale(0.7,0.7);
	this.context.translate(this.x, this.y);
	this.context.beginPath();
  this.context.arc(450,100,80,0,2*Math.PI);
  this.context.fill();

  this.context.beginPath();
  this.context.arc(450,220,80,Math.PI,2*Math.PI);
  this.context.fill();
  this.context.closePath();
  
  this.context.fillRect(370,220,160,50);
  
  this.context.beginPath();
  this.context.moveTo(375, 20);
  this.context.lineTo(375, 70);
  this.context.lineTo(440, 50);
  this.context.fill();
  this.context.closePath();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.moveTo(520, 20);
  this.context.lineTo(525, 70);
  this.context.lineTo(480, 50);
  this.context.fill();
  this.context.closePath();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.fillStyle="white";
  this.context.arc(480,80,20,0, 0.75*Math.PI);
  this.context.fill();
  
  this.context.beginPath();
  this.context.fillStyle="white";
  this.context.arc(410,80,20,0.25*Math.PI,Math.PI);
  this.context.fill();
  
  this.context.beginPath();
  this.context.strokeStyle="brown";
  this.context.lineWidth=5;
  this.context.moveTo(450,20);
  this.context.lineTo(450,50);
  
  this.context.moveTo(420,25);
  this.context.lineTo(420,50);
  
  this.context.moveTo(480,25);
  this.context.lineTo(480,50);
  this.context.stroke();
  
  this.context.beginPath();
  this.context.strokeStyle="black";
  this.context.lineWidth=2;
  this.context.moveTo(180+320, 110+5);
  this.context.lineTo(200+320, 100+5);
 
  this.context.moveTo(180+320, 115+5);
  this.context.lineTo(200+320, 120+5);
  
  this.context.moveTo(120+280, 110+5);
  this.context.lineTo(100+280, 100+5);
 
  this.context.moveTo(120+280, 115+5);
  this.context.lineTo(100+280, 120+5);
  
  
  this.context.stroke();
  this.context.stroke();
  }
Cat.prototype.draw = function()
{
  this.drawBody();
  this.drawHand();
  this.drawRight();
 // this.drawHand(-1,1,-1300);
 // this.context.translate(40,0);
  //this.context.scale(-1,1);
  //this.context.save();
  //this.drawHand(1,1,0);
  //this.context.restore();
}
