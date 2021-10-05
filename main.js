canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");


var rover="rover.png"
var mars="mars.jpg"

var rover_height="90"
 var rover_width="100"
 var rover_X=100
 var rover_Y=100

 function add(){

background= new Image()
background.onload= mars1
background.src=mars


 }
function mars1(){
ctx.drawImage(background,0,0,canvas.width,canvas.height)
}