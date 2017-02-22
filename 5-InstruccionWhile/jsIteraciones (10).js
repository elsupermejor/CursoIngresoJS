function Mostrar()
{

	
    var respuesta='si';
	var nota=0;
	var contador=0;
	var sumadorNotas=0;
	var promedioNotas=0;
	var edad=0;
	var nombre='';
	var sexo='';
	var masViejo='';
	//MAYOR EDAD
	var edadMasViejo=0;
	//CANTIDAD DE MUJERES APROBADAS
	var mujeresAprobadas=0;
	//CANTIDAD DE HOMBRES MAYORES A 25 APROBADOS
	var hombresVeintiAprobados=0;
	//CANTIDAD DE MUJERES MENORES A 20 AÑOS
	var mujeresMenores=0;
	//MEJORES NOTAS
	var nombreMujerMejorNota='';
	var nombreHombreMejorNota='';
	var mujerMejorNota=0;
	var hombreMejorNota=0;
	//PROMEDIOS
	var cantidadHombres=0;
	var cantidadMujeres=0;
	var sumaHombres=0;
	var sumaMujeres=0;
	var promedioHombres=0;
	var promedioMujeres=0;
	//APROBADOS
	var aprobados=0;
	var porcentajeAprobados=0;
	//DESAPROBADOS
	var desaprobados=0;
	var porcentajeDesaprobados=0;
	//PRIMER 10
	var primerDiez='';
	var sexoPrimerDiez='';
	//RESULTADO
	var resultado='';
	var nuevaLinea='<br>';

	while(respuesta=='si')
	{
		contador+=1;
		nota=prompt('Por favor ingrese su nota');
		nota=parseInt(nota);	
		while(nota<0 || nota>10)
		{
			nota=prompt('Por favor ingrese su nota (Entre 0 y 10)');
			nota=parseInt(nota);
		}
		sumadorNotas+=nota;
		edad=prompt('Ingrese su edad');
		edad=parseInt(edad);
		while(isNaN(edad))
		{
			edad=prompt('Ingrese su edad, entre 0 y 100');
			edad=parseInt(edad);
		}
		while(edad<0 || edad>100)
		{
			edad=prompt('Ingrese su edad, entre 0 y 100');
			edad=parseInt(edad);
		}
		nombre=prompt('Ingrese su nombre');
		sexo=prompt('Ingrese su sexo (M o F)');
		while(sexo!='F' && sexo!='M')
		{
			sexo=prompt('Ingrese su sexo (M o F)');
		}
		//CARGA Y VALIDACION
		//MAYOR EDAD
		if(contador==0)
		{
			masViejo=nombre;
			edadMasViejo=edad;
		}
		else
		{
			if(edad>edadMasViejo)
			{
				masViejo=nombre;
				edadMasViejo=edad;
			}
		}
		//CANTIDAD DE MUJERES APROBADAS
		if(sexo=='F' && nota>3)
		{
			mujeresAprobadas+=1;
		}
		//CANTIDAD DE HOMBRES MAYORES A 25 APROBADOS
		if(sexo=='M' && nota>3 && edad>24)
		{
			hombresVeintiAprobados+=1;
		}
		//CANTIDAD DE MUJERES MENORES A 20 AÑOS
		if(sexo=='F' && edad<20)
		{
			mujeresMenores+=1;
		}
		//PRIMER DIEZ
		if(mujerMejorNota<10 && hombreMejorNota<10 && nota==10)
		{
			primerDiez=nombre;
			sexoPrimerDiez=sexo;
		}
		//MEJORES NOTAS
		if(contador==0)
		{
			nombreMujerMejorNota=nombre;
		}
		else
		{
			if(sexo=='F' && nota>mujerMejorNota)
			{
				nombreMujerMejorNota=nombre;
				mujerMejorNota=nota;
			}
		}
		if(contador==0)
		{
			nombreHombreMejorNota=nombre;
		}
		else
		{
			if(sexo=='M' && nota>hombreMejorNota)
			{
				nombreHombreMejorNota=nombre;
				hombreMejorNota=nota;
			}
		}
		//PROMEDIOS
		if(sexo=='M')
		{
			cantidadHombres+=1;
			sumaHombres+=nota;
		}
		else
		{
			cantidadMujeres+=1;
			sumaMujeres+=nota;
		}
		//APROBADOS Y DESAPROBADOS
		if(nota>3)
		{
			aprobados+=1;
		}
		else
		{
			desaprobados+=1;
		}
		/*
		1- CANTIDAD DE MUJERES APROBADAS
		2- CANTIDAD DE HOMBRES MAYORES A 25 APROBADOS
		3- CANTIDAD DE MUJERES MENORES A 20 AÑOS
		4- EL NOMBRE DE LA MUJER CON MEJOR NOTA
		5- EL NOMBRE DEL HOMBRE CON MEJOR NOTA
		6- PROMEDIO DE NOTA DE LOS HOMBRES
		7- PROMEDIO DE NOTA DE LAS MUJERES
		8- PORCENTAJES DE APROBADOS VS DESAPROBADOS
		9- EL SEXO Y EL NOMBRE DE LA PRIMER PERSONA QUE SE SAQUE 10
		*/
		respuesta=prompt('Ingrese "si" para continuar');
	}
	porcentajeAprobados=aprobados/contador*100;
	porcentajeDesaprobados=desaprobados/contador*100;
	promedioHombres=sumaHombres/cantidadHombres;
	promedioMujeres=sumaMujeres/cantidadMujeres;

	resultado+='Cantidad de mujeres aprobadas :'+mujeresAprobadas+nuevaLinea;
	resultado+='Cantidad de hombres mayores a 25 aprobados :'+hombresVeintiAprobados+nuevaLinea;
	resultado+='Cantidad de mujeres menores a 20 años :'+mujeresMenores+nuevaLinea;
	resultado+='Mujer con mejor nota :'+nombreMujerMejorNota+nuevaLinea;
	resultado+='Hombre con mejor nota :'+nombreHombreMejorNota+nuevaLinea;
	resultado+='Promedio de nota de Hombres :'+promedioHombres+nuevaLinea;
	resultado+='Promedio nota de Mujeres :'+promedioMujeres+nuevaLinea;
	resultado+='El porcentaje de aprobados es de '+porcentajeAprobados+'% y el de desaprobados de '+porcentajeDesaprobados+'%'+nuevaLinea;
	resultado+='El primer diez lo tuvo :'+primerDiez+', sexo :'+sexoPrimerDiez;
	document.write(resultado);
}//FIN DE LA FUNCIÓN