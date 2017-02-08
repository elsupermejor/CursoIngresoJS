/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{	var descuento;
	var resultado;
	descuento=document.getElementById('importe').value;
	descuento=parseInt(descuento);
	descuento=(descuento*0.75);
	alert(descuento);


}
