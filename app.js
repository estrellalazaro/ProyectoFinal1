var textoCifrado = "";											// se declaran variables
var textoDescifrado = "";
var charTexto = "";
var desp = 33;													// se declara valor de desplazamiento para cifrado
var abc = "abcdefghijklmnopqrstuvwxyz";							// se declara abecedario

while (true) {													// se itera en el menu hasta elegir salir
	var pedir = true;											// validacion para string
	var mensaje = "1: Cifrar Texto\n" +							// mensaje menu
		"2: Descifrar Texto \n" +
		"3: Salir \n\n" +
		"El texto codificado es:\t" + textoCifrado + "\n\n" + 
		"El texto descifrado es:\t" + textoDescifrado + "\n\n";

	var option = 0;												// variable opcion menu

	var str = mensaje + " >> Ingrese una opcion:";				// se pide una opcion
	option = parseInt(prompt(str));

	if (option == 3){											// se sale del menu
		break;
	}
	else if (option == 1){										// se entra a cifrado
        while (pedir){											// Se solicita el texto a cifrar
			var texto = prompt("Ingrese el texto a codificar");	// se guarda en la variable
			if (validaSoloTexto(texto)){						// se valida si es string
				pedir = false;
			}
		}
		texto = texto.toLowerCase();							// se pasa el texto ingresado a minusculas
		document.write("El texto a codificar es: " + texto + "<br/><br/>");	// se informa en pantalla el texto a codificar

		textoCifrado += cipher(texto, desp);					// se obtiene el texto cifrado
		document.write("El texto codificado es: " + textoCifrado + "<br/><br/>");	// se informa en pantalla el texto codificado
		alert("El texto codificado es: " + textoCifrado);		// se informa en pantalla el texto codificado
	}
	else if (option == 2){										// se entra a descifrado
		while (pedir){											// Se solicita el texto a descifrar
			var texto = prompt("Ingrese el texto a descifrar");	// se guarda en la variable
			if (validaSoloTexto(texto)){						// se valida si es string
				pedir = false;
			}
		}
		texto = texto.toLowerCase();							// se pasa el texto ingresado a minusculas

		textoDescifrado += decipher(textoCifrado, -desp);		// se obtiene el texto descifrado
		document.write("El texto descifrado es: " + textoDescifrado + "<br/><br/>");	// se informa en pantalla el texto descifrado
		alert("El texto descifrado es: " + textoDescifrado);	// se informa en pantalla el texto descifrado
	}
}

function cipher(txt,desplazar){									// funcion de cifrado
    var desplazar = desplazar % abc.length;						// se calcula desplazamiento
    var resultado = "";											// variable para resultado cifrado
    if(desplazar < 0){											// se valida desplazamiento negativo
    	desplazar = abc.length + desplazar;						// cantidad de posiciones a desplazar
    }

    for (var i = 0; i < txt.length; i++){						// iteracion para todo el texto
    	charTexto = abc.charAt((abc.indexOf(txt.charAt(i)) + desplazar) % abc.length);	// se obtienen caracteres cifrados
    	if (charTexto.length == 0){								// validacion caracter vacio
    		resultado += " ";
    	}
    	else{
    		resultado += charTexto;								// se agregan los caracteres al resultado
    	}
    }
    return resultado;											// se retorna resultado
}

function decipher(txt2, desplazar2){							// funcion de descifrado
	resultado = cipher(txt2, desplazar2);						// se utiliza la funcion de cifrado a la inversa, con desplazamiento negativo
	return resultado;											// se retorna resultado
}

function validaSoloTexto(texto){								//se valida texto
	texto = texto.toString();
	var patronLetras = /^[a-zA-Z]*$/;							//patron solo permite letras
	var patronNumeros = /^\d*$/;								//patron solo permite numeros
	if(!texto.search(patronLetras) && texto.search(patronNumeros) && texto != ""){// se valida que solo permita letras, no numeros, no espacios
		return true;
	}
	else{
		return false;
	}
}

//module.exports = listAllValues;