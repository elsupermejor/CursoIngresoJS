/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	resultado=(largo+ancho)*2;
	alert("la cantidad de alambre necesario es = "+(resultado)+" m");

}
function Circulo () 
{
	var radio;
	var resultado;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	resultado=(radio)*2*3.14;
	alert("la cantidad de alambre necesario es ="+resultado+" m");

}
function Materiales () 
{
	var largo;
	var ancho;
	var resultado;
	var cal;
	var cemento;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	resultado=(largo+ancho);
	cemento=(resultado);
	cal=(resultado)*1.5;
	alert("la cantidad de cemento necesaria es "+cemento+" bolsas, "+"la cantidad de cal necesaria es "+cal+" bolsas");

}