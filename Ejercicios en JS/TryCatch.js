"use strict"

/*
Manejo de errores
*/

try {
	decodeURIComponent("http://google.com.mx");
} catch(e) {
	console.log(error.message);//Mensaje del error
	console.log(error.name);//Nombre del error
}