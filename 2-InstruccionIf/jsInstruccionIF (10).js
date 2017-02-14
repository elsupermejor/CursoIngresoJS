function Mostrar()
{var random;
	random=Math.floor(Math.random() * 10) + 1;
/*	if(random>8)
	{
		alert(random+" exelente");
	}
	else
	{
		if(random<4)
			{alert(random+" vamos, la proxima se puede");
			}
		else
			{alert(random+" Aprovo");
			}
	}*/
	//Genero el número RANDOM entre 1 y 10 
	
if(random>8)
{
	alert("nota: "+random+ " exelente");
}
	else
	{if(random<4)
		{
		alert("nota: "+random+ " Vamos, la proxima se puede");
		}
		else
		{
		alert("nota: "+random+ " Aprovo");
		}
	}
}//FIN DE LA FUNCIÓN