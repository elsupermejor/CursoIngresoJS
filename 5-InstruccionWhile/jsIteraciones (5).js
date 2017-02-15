function Mostrar()
{
var sexo;
while(!(sexo=="f" || sexo=="m"))

{
	sexo = prompt("ingrese f o m .");
}




document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN