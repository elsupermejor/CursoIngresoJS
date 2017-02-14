function Mostrar()
{	var edad;
	var estado;
	edad=document.getElementById('edad').value;
	estado=document.getElementById('estadoCivil').value;
	if(edad<18 && estado!="Soltero") //&& (Y) / != (no es igual)
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN