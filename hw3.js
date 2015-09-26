
function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var m4 = twgl.m4;
  var check = document.getElementById('check');  
  //var slider = document.getElementById('slider');
  //slider.value = 0;
  //var slider1 = document.getElementById('slider1');
  //var slider2 = document.getElementById('slider2');
var sliderx = document.getElementById('sliderx');
var slidery = document.getElementById('slidery');
var sliderz = document.getElementById('sliderz');
var sliderxx = document.getElementById('sliderxx');
var slideryy = document.getElementById('slideryy');
var sliderzz = document.getElementById('sliderzz');
var sliderf =  document.getElementById('sliderf');
 // slider1.value = 0;
 // slider2.value = 0;
  //var btn = document.getElementById('onoff').value;
  check.checked = false;
sliderx.value = 150;
slidery.value = 100;
sliderz.value = -350;
   sliderf.value = 10;
sliderxx.value = 150;
slideryy.value = 100;
sliderzz.value = -350;


             
  function moveToTx(x,y,z,Tx) {
    var loc = [x,y,z];
    var locTx = m4.transformPoint(Tx,loc);
    context.moveTo(locTx[0],locTx[1]);
  }

  function lineToTx(x,y,z,Tx) {
    var loc = [x,y,z];
    var locTx = m4.transformPoint(Tx,loc);
    context.lineTo(locTx[0],locTx[1]);
  }
                
  function drawCube(Tx) {
/*moveToTx(0,500,-1000,Tx);lineToTx(0,5000,1000,Tx);context.stroke();
moveToTx(0,500,-1000,Tx);lineToTx(0,1000,-1000,Tx);context.stroke();
moveToTx(0,500,-1000,Tx);lineToTx(1000,500,-1000,Tx);context.stroke();*/
  context.translate(300,0,0);
    // base
    moveToTx(50,300,100,Tx);lineToTx(250,300,100,Tx);context.stroke();
    moveToTx(60,330,100,Tx);lineToTx(240,330,100,Tx);context.stroke();
    moveToTx(60,330,100,Tx);lineToTx(50,300,100,Tx);context.stroke();
    moveToTx(240,330,100,Tx);lineToTx(250,300,100,Tx);context.stroke();
    
    moveToTx(50,300,-100,Tx);lineToTx(250,300,-100,Tx);context.stroke();
    moveToTx(60,330,-100,Tx);lineToTx(240,330,-100,Tx);context.stroke();
    moveToTx(60,330,-100,Tx);lineToTx(50,300,-100,Tx);context.stroke();
    moveToTx(240,330,-100,Tx);lineToTx(250,300,-100,Tx);context.stroke();
    
    moveToTx(240,330,-100,Tx);lineToTx(240,330,100,Tx);context.stroke();
    moveToTx(250,300,-100,Tx);lineToTx(250,300,100,Tx);context.stroke();
    
    moveToTx(60,330,-100,Tx);lineToTx(60,330,100,Tx);context.stroke();
    moveToTx(50,300,-100,Tx);lineToTx(50,300,100,Tx);context.stroke();
    
    //legs
    moveToTx(65,330,95,Tx);lineToTx(235,330,95,Tx);context.stroke();
    moveToTx(65,330,95,Tx);lineToTx(50,400,95,Tx);context.stroke();
    moveToTx(250,400,95,Tx);lineToTx(235,330,95,Tx);context.stroke();
    moveToTx(50,400,95,Tx);lineToTx(90,400,95,Tx);context.stroke();
    moveToTx(250,400,95,Tx);lineToTx(210,400,95,Tx);context.stroke();
    moveToTx(100,350,95,Tx);lineToTx(200,350,95,Tx);context.stroke();
    moveToTx(210,400,95,Tx);lineToTx(200,350,95,Tx);context.stroke();
    moveToTx(90,400,95,Tx);lineToTx(100,350,95,Tx);context.stroke();
    
    moveToTx(65,330,-95,Tx);lineToTx(235,330,-95,Tx);context.stroke();
    moveToTx(65,330,-95,Tx);lineToTx(50,400,-95,Tx);context.stroke();
    moveToTx(250,400,-95,Tx);lineToTx(235,330,-95,Tx);context.stroke();
    moveToTx(50,400,-95,Tx);lineToTx(90,400,-95,Tx);context.stroke();
    moveToTx(250,400,-95,Tx);lineToTx(210,400,-95,Tx);context.stroke();
    moveToTx(100,350,-95,Tx);lineToTx(200,350,-95,Tx);context.stroke();
    moveToTx(210,400,-95,Tx);lineToTx(200,350,-95,Tx);context.stroke();
    moveToTx(90,400,-95,Tx);lineToTx(100,350,-95,Tx);context.stroke();
    
    moveToTx(235,330,-95,Tx);lineToTx(235,330,95,Tx);context.stroke();
    moveToTx(250,400,95,Tx);lineToTx(250,400,55,Tx);context.stroke();
    moveToTx(250,400,-95,Tx);lineToTx(250,400,-55,Tx);context.stroke();
    moveToTx(239,350,-50,Tx);lineToTx(239,350,50,Tx);context.stroke();
    moveToTx(239,350,-50,Tx);lineToTx(250,400,-55,Tx);context.stroke();
    moveToTx(239,350,50,Tx);lineToTx(250,400,55,Tx);context.stroke();
    
    moveToTx(65,330,-95,Tx);lineToTx(65,330,95,Tx);context.stroke();
    moveToTx(50,400,95,Tx);lineToTx(50,400,55,Tx);context.stroke();
    moveToTx(50,400,-95,Tx);lineToTx(50,400,-55,Tx);context.stroke();
    moveToTx(61,350,-50,Tx);lineToTx(61,350,50,Tx);context.stroke();
    moveToTx(61,350,-50,Tx);lineToTx(50,400,-55,Tx);context.stroke();
    moveToTx(61,350,50,Tx);lineToTx(50,400,55,Tx);context.stroke();
    
    //body
    
    moveToTx(130,300,45,Tx);lineToTx(170,300,45,Tx);context.stroke();
    moveToTx(130,100,25,Tx);lineToTx(170,100,25,Tx);context.stroke();
    moveToTx(130,100,25,Tx);lineToTx(130,300,45,Tx);context.stroke();
    moveToTx(170,100,25,Tx);lineToTx(170,300,45,Tx);context.stroke();
    
    moveToTx(130,300,-45,Tx);lineToTx(170,300,-45,Tx);context.stroke();
    moveToTx(130,100,-25,Tx);lineToTx(170,100,-25,Tx);context.stroke();
    moveToTx(130,100,-25,Tx);lineToTx(130,300,-45,Tx);context.stroke();
    moveToTx(170,100,-25,Tx);lineToTx(170,300,-45,Tx);context.stroke();
    
    moveToTx(195,300,-20,Tx);lineToTx(195,300,20,Tx);context.stroke();
    moveToTx(175,100,-20,Tx);lineToTx(175,100,20,Tx);context.stroke();
    moveToTx(175,100,-20,Tx);lineToTx(195,300,-20,Tx);context.stroke();
    moveToTx(195,300,20,Tx);lineToTx(175,100,20,Tx);context.stroke();
    
    moveToTx(105,300,-20,Tx);lineToTx(105,300,20,Tx);context.stroke();
    moveToTx(125,100,-20,Tx);lineToTx(125,100,20,Tx);context.stroke();
    moveToTx(125,100,-20,Tx);lineToTx(105,300,-20,Tx);context.stroke();
    moveToTx(105,300,20,Tx);lineToTx(125,100,20,Tx);context.stroke();
    
    moveToTx(105,300,-20,Tx);lineToTx(130,300,-45,Tx);context.stroke();
    moveToTx(195,300,-20,Tx);lineToTx(170,300,-45,Tx);context.stroke();
    moveToTx(105,300,20,Tx);lineToTx(130,300,45,Tx);context.stroke();
    moveToTx(195,300,20,Tx);lineToTx(170,300,45,Tx);context.stroke();
    
    moveToTx(130,100,25,Tx);lineToTx(125,100,20,Tx);context.stroke();
    moveToTx(170,100,25,Tx);lineToTx(175,100,20,Tx);context.stroke();
    moveToTx(130,100,-25,Tx);lineToTx(125,100,-20,Tx);context.stroke();
    moveToTx(170,100,-25,Tx);lineToTx(175,100,-20,Tx);context.stroke();
    
    //head
    moveToTx(200,50,20,Tx);lineToTx(200,50,-20,Tx);context.stroke();
    moveToTx(100,50,20,Tx);lineToTx(100,50,-20,Tx);context.stroke();
    moveToTx(130,50,50,Tx);lineToTx(170,50,50,Tx);context.stroke();
    moveToTx(130,50,-50,Tx);lineToTx(170,50,-50,Tx);context.stroke();
    
    moveToTx(130,50,50,Tx);lineToTx(100,50,20,Tx);context.stroke();
    moveToTx(130,50,-50,Tx);lineToTx(100,50,-20,Tx);context.stroke();
    moveToTx(170,50,50,Tx);lineToTx(200,50,20,Tx);context.stroke();
    moveToTx(170,50,-50,Tx);lineToTx(200,50,-20,Tx);context.stroke();
    
    moveToTx(100,50,20,Tx);lineToTx(125,100,20,Tx);context.stroke();
    moveToTx(100,50,-20,Tx);lineToTx(125,100,-20,Tx);context.stroke();
    
    moveToTx(200,50,20,Tx);lineToTx(175,100,20,Tx);context.stroke();
    moveToTx(200,50,-20,Tx);lineToTx(175,100,-20,Tx);context.stroke();
    
    moveToTx(130,50,50,Tx);lineToTx(130,100,25,Tx);context.stroke();
    moveToTx(130,50,-50,Tx);lineToTx(135,100,-25,Tx);context.stroke();
    
    moveToTx(170,50,50,Tx);lineToTx(170,100,25,Tx);context.stroke();
    moveToTx(170,50,-50,Tx);lineToTx(170,100,-25,Tx);context.stroke();
    
    // Twelve edges of a cube
    moveToTx(130,10,-20,Tx);lineToTx(170,10,-20,Tx);
    lineToTx(170,50,-20,Tx);lineToTx(130,50,-20,Tx);context.stroke();
    moveToTx(170,10,-20,Tx);lineToTx(170,10,20,Tx);
    lineToTx(170,50,20,Tx);lineToTx(170,50,-20,Tx);context.stroke();
    moveToTx(170,10,20,Tx);lineToTx(130,10,20,Tx);
    lineToTx(130,50,20,Tx);lineToTx(170,50,20,Tx);context.stroke();
    moveToTx(130,10,20,Tx);lineToTx(130,10,-20,Tx);
    lineToTx(130,50,-20,Tx);lineToTx(130,50,20,Tx);context.stroke();
  context.translate(-300,0,0);
 /* moveToTx(50,50,50,Tx);lineToTx(150,50,50,Tx);
  context.stroke();
  moveToTx(50,50,50,Tx);lineToTx(50,150,50,Tx);
  context.stroke();
  moveToTx(50,150,50,Tx);lineToTx(150,150,50,Tx);
  context.stroke();
  moveToTx(150,150,50,Tx);lineToTx(150,50,50,Tx);
  context.stroke();
//left eye
moveToTx(50,50,50,Tx);lineToTx(65,60,70,Tx);
    context.stroke();
    moveToTx(65,60,70,Tx);lineToTx(90,50,80,Tx);
    context.stroke();
    moveToTx(65,40,70,Tx);lineToTx(90,50,80,Tx);
    context.stroke();
    moveToTx(65,40,70,Tx);lineToTx(50,50,50,Tx);
    context.stroke();
//right eye
moveToTx(50,50,50,Tx);lineToTx(65,60,30,Tx);
    context.stroke();
    moveToTx(65,60,30,Tx);lineToTx(90,50,20,Tx);
    context.stroke();
    moveToTx(65,40,30,Tx);lineToTx(90,50,20,Tx);
    context.stroke();
    moveToTx(65,40,30,Tx);lineToTx(50,50,50,Tx);
    context.stroke();
//face
 moveToTx(65,60,70,Tx);lineToTx(40,110,80,Tx);
    context.stroke();
    moveToTx(65,60,30,Tx);lineToTx(40,110,20,Tx);
    context.stroke();
    moveToTx(40,110,80,Tx);lineToTx(90,100,100,Tx);
    context.stroke();
    moveToTx(40,110,20,Tx);lineToTx(90,100,0,Tx);
    context.stroke();
    moveToTx(90,50,80,Tx);lineToTx(90,100,100,Tx);
    context.stroke();
    moveToTx(90,50,20,Tx);lineToTx(90,100,0,Tx);
    context.stroke();
    moveToTx(70,140,50,Tx);lineToTx(90,100,100,Tx);
    context.stroke();
    moveToTx(70,140,50,Tx);lineToTx(90,100,0,Tx);
    context.stroke();
//strange head
    moveToTx(50,50,50,Tx);lineToTx(100,20,50,Tx);
    context.stroke();
    moveToTx(100,20,50,Tx);lineToTx(200,15,50,Tx);
    context.stroke();
    moveToTx(200,15,50,Tx);lineToTx(100,40,80,Tx);
    context.stroke();
    moveToTx(200,15,50,Tx);lineToTx(100,40,20,Tx);
    context.stroke();
    moveToTx(90,50,20,Tx);lineToTx(100,40,20,Tx);
    context.stroke();
    moveToTx(90,50,80,Tx);lineToTx(100,40,80,Tx);
    context.stroke();
    moveToTx(100,40,80,Tx);lineToTx(100,20,50,Tx);
    context.stroke();
    moveToTx(100,20,50,Tx);lineToTx(100,40,20,Tx);
    context.stroke();
//nose
moveToTx(50,50,50,Tx);lineToTx(30,80,50,Tx);
    context.stroke();
    moveToTx(50,50,50,Tx);lineToTx(40,90,60,Tx);
    context.stroke();
    moveToTx(50,50,50,Tx);lineToTx(40,90,40,Tx);
    context.stroke();
    moveToTx(30,80,50,Tx);lineToTx(40,90,60,Tx);
    context.stroke();
    moveToTx(30,80,50,Tx);lineToTx(40,90,40,Tx);
    context.stroke();
    
    moveToTx(40,90,60,Tx);lineToTx(35,95,50,Tx);
    context.stroke();
    moveToTx(40,90,40,Tx);lineToTx(35,95,50,Tx);
    context.stroke();
    moveToTx(35,95,50,Tx);lineToTx(40,105,50,Tx);
    context.stroke();
//mouth
moveToTx(40,105,50,Tx);lineToTx(40,110,80,Tx);
    context.stroke();    
    moveToTx(40,110,80,Tx);lineToTx(40,110,20,Tx);
    context.stroke();
    moveToTx(40,105,50,Tx);lineToTx(40,110,20,Tx);
    context.stroke();
    moveToTx(40,110,20,Tx);lineToTx(40,120,50,Tx);
    context.stroke();
    moveToTx(40,110,80,Tx);lineToTx(40,120,50,Tx);
    context.stroke();
    moveToTx(40,120,50,Tx);lineToTx(70,140,50,Tx);
    context.stroke();*/
    //m4.rotateY(Tx,Math.PI/2);
  }
 /* function change(){
    var currentvalue = document.getElementById('onoff').value;
    if(currentvalue == "Off"){
      document.getElementById("onoff").value="On";
    }else{
      document.getElementById("onoff").value="Off";
    }
  }*/
  function draw() {
    
    canvas.width = canvas.width;
    //var z = sliderp.value;
    var cc = check.checked;
    var lx = sliderx.value;
    var ly = slidery.value;
    var lz = sliderz.value;
    var lxx = sliderxx.value;
    var lyy = slideryy.value;
    var lzz = sliderzz.value;

    //var angle = slider.value*0.01*Math.PI;
   // var angle1 = slider1.value*0.01*Math.PI;
    //var angle2 = slider2.value*0.01*Math.PI;
    var axis = [1,0,0];
    //var axis1 = [0,1,0];
    //var axis2 = [0,0,1];
var Tx = m4.identity();
  //var Tx=m4.axisRotation(axis,0);
  //  var Ty=m4.axisRotation(axis1,angle1);
  //  var Tz=m4.axisRotation(axis2,angle2);
    var fov = sliderf.value;
   // var t=m4.frustum(0, 300,0, 600, -500, 500);
    var t = m4.perspective(fov*Math.PI/180, 1, 0.1,2000);
    //m4.rotateY(Tx, Math.PI/2, Tx);
  //  m4.multiply(Tx, Ty, Tx);
   // m4.multiply(Tx, Tz, Tx);
 //   m4.translate(Tx,[lxx,lyy,lzz],Tx);
    var camera = m4.lookAt([lx,ly,lz],[150,100,0],[0,10,0]);
	//var camera = m4.lookAt([lx,ly,lz],[lxx,lyy,lzz],[0,1,0]);
	var view = m4.inverse(camera);
	var viewProjection = m4.multiply(view,t);
	//m4.inverse(viewProjection,viewProjection);
	//var m = m4.translate(Tx,[0,100,-100]);
	//m4.multiply(Tx, m, Tx);
  var Tv=m4.lookAt([150,100,-100],[lxx,lyy,lzz],[0,10,0]);
 // m4.inverse(Tv,Tv);
    m4.multiply(Tx,Tv,Tx);
	
   //m4.setTranslation(Tx,[lxx,lyy,lzz],Tx);
//var c = document.getElementById('onoff').value;
   if(cc)
   { 
      m4.multiply(Tx,viewProjection,Tx);
	  var s = m4.scaling([30,30,30]);
	  m4.multiply(Tx,s,Tx);
	  //m4.inverse(Tx,Tx);
      drawCube(Tx);
   }
   else
   {
	 m4.multiply(Tx,camera,Tx);//??
    drawCube(Tx);
   }
  }
  //sliderp.addEventListener("input",draw);
  check.addEventListener("input",draw);
  sliderx.addEventListener("input",draw);
  slidery.addEventListener("input",draw);
  sliderz.addEventListener("input",draw);
  sliderxx.addEventListener("input",draw);
  slideryy.addEventListener("input",draw);
  sliderzz.addEventListener("input",draw);
  sliderf.addEventListener("input",draw);
  //btn.addEventListener("input",draw);
  //slider.addEventListener("input",draw);
  //slider1.addEventListener("input",draw);
  //slider2.addEventListener("input",draw);
  draw();

}
window.onload = setup;

