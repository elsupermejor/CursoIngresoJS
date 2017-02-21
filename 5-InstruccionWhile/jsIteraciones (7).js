function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;

	respuesta=prompt('Ingrese su primer numero a sumar');

	while(respuesta!='fin')
	{
		contador++;
		respuesta=parseInt(respuesta);
		acumulador+=respuesta;
		respuesta=prompt('cantidad de operaciones '+(contador+1)+' suma acumulada '+acumulador+' escriba "fin" para terminar');
		
		
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN