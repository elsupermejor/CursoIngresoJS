nivel 1
ejercicio 1
funtion Mostrar()
{
	var base;
	var perimetro;

	base=document.getElementById('Base').value;
	base=parseInt('base');
	perimetro=(base*4);
	alert("el perimetro del cuadrado es "+perimetro);

}


ejercicio 2
funtion Mostrar()
{
	var preciouno;
	var preciodos;
	var resultado;

	preciouno=prompt("ingrese primer precio");
	preciodos=prompt("ingrese segundo precio");
	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	resultado=(preciouno+preciodos)*1.21;
	alert("el precio con el iva es "+resultado);


}


ejercicio 3
{
	var largo;
	var ancho;
	var resultado;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	resultado=((largo+ancho)*2)*3;
	alert("la cantidad de alambre que nesecita son "+resultado+" metros");


}

nivel 2
ejercicio 4
{
	var numerouno
	var numerodos
	var resultado
	numerouno=prompt("ingrese primer numero");
	numerodos=prompt("ingrese segundo numero");
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	if(numerouno == numerodos)
		{
			resultado = (numerouno * numerodos);
		}
		else
		{
			if(numerouno > numerodos)
				{
					resultado=(numerouno - numerodos);
				}
			else
			{
				resultado=(numerouno + numerodos);
			}
		}
	document.white("el resultado es "+resultado);


}

ejercicio 5
{
	var diadelasemana;
	diadelasemana=prompt("ingrese dia de la semana");
	switch(diadelasemana)
	{
		case Sabado:
		case Domingo:
		alert("es fin de semana");
		break;
		default:
		alert("a trabajar !!!");


	}




}


