//Cree mi metodo y lo nombre numeroEntero
function numeroEntero(){
	//Ahora aqui en mi variable numE guadare el resultado de la pregunta al usuario
	var numE=parseInt(prompt("Ingresa un numero entero"));
	//Con la conficion IF voy a evaluar mi variable para ver si es par o impar
	if (numE%2 == 0) {
		//Se manda un mensaje si cumple la conficion es par sino pasara a ser impar
		alert("El numero es: " + numE + " y es par")
	}
	else{
		alert("El numero es: " + numE + " y es impar")
	}
}

function numerosPrimos(){

	for(var i=2; i<primos; i++){
		if(primos%i === 0){		
			primo=false;
		}
	}
}

function numerosMayor(){
	//Aqui cree en el HTML 3 botones con el ID numero1,etc. por lo que esas variables se guardaran en las creadas como num pero ya en el script
	var num1=document.getElementById("numero1").value;
	var num2=document.getElementById("numero2").value;
	var num3=document.getElementById("numero3").value;
	//Esta variable solo la cree para guardar el resultado
	var total;

	//Atravez de condiciones IF comparare los 3 numeros para ver si realmente cual es el numero mayor Si si se guarda en la variable total mandando un mensaje y concatenando el valor 
	if (num1>num2 && num1>num3) {
		total="El numero "+ num1 + " Es mayor";
	}

	else if (num2>num1 && num2>num3) {
		total="El numero " + num2 + " Es mayor";
	}

	else if(num3>num1 && num3>num2){
		total="El numero "+ num3 + " Es mayor";
	}

	else{
		total="Los numeros son iguales";
	}
	//Aqui atraves de getElementById al id resultado que es una etiqueta H2 en HTML la mandare reemplazar con lo que contenga la variable total.
	document.getElementById("resultado").innerHTML=total;
}
