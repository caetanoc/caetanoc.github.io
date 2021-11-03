document.getElementById('amarelo0').style.background="blue";
document.getElementById('verde0').style.background="pink";
document.getElementById('vermelho0').style.background="pink";

start();
var speed =0,
interval;
function start(){
interval = setInterval(timeIt, 100);
}
function stop(){
clearInterval(interval);
interval =0;
}
function timeIt(){
if (speed ==1)
{
document.getElementById('amarelo').style.background="white";
document.getElementById('vermelho').style.background="white";
document.getElementById('verde').style.background="green";
document.getElementById('verde1').style.background="white";
document.getElementById('vermelho1').style.background="red";
document.getElementById('amarelo1').style.background="white";
document.getElementById('amarelo0').style.background="yellow";
}
else if (speed ==31)
{
document.getElementById('verde').style.background="white";
document.getElementById('amarelo').style.background="yellow";
document.getElementById('amarelo0').style.background="white";
}
else if (speed ==36)
{
document.getElementById('amarelo').style.background="white";
document.getElementById('verde').style.background="white";
document.getElementById('vermelho').style.background="red";
document.getElementById('verde1').style.background="green";
document.getElementById('vermelho1').style.background="white";
document.getElementById('amarelo0').style.background="yellow";
}
if (speed == 61){
document.getElementById('verde1').style.background="white";
document.getElementById('amarelo1').style.background="yellow";
document.getElementById('amarelo0').style.background="white";
}
else if(speed == 67){
speed = 0;
}
speed++;
}