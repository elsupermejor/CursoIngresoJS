function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert("tiene 31 días.");
	break;
	case "Febrero":
	alert("tiene 28 días.");
	break;
	default:
	alert("tiene 30 días");
	break;
}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN