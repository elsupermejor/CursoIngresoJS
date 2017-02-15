function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;
	while(contador<5)
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		while(numero<-10||numero>10)
		{
			numero=prompt("ingrese numero correcto");
			numero=parseInt(numero);
		}
		acumulador=acumulador+numero;
	}
promedio=acumulador/5;
alert(promedio);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
/*if(numero<0)
{negativo=negativo*numero;
}else
{acumulador=acumulador+numero;
}//while(contador<5)
*/
}//FIN DE LA FUNCIÓN