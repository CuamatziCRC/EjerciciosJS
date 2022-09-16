//Uso este ejemplo de JavaScript para el uso correcto de variables
//Globales y locales 
"use strict" //Uso estricto de JavaScript

var nombre = "Cristian"; //Variable Global

console.log(nombre)//Se imprime en consola la variable Global

//Se declara la funcion para el uso de la misma variable pero de manera local
function saludo() {
	let nombre = "Cuama";
	console.log(nombre) //en este caso se imprime "Cuama" y no "Cristian"

	let edad = 25;
	console.log(edad);//Se imprime edad

}

console.log(nombre); // Imprime "Cristian" y no "Cuama"

saludo(); //Imprime "Cuama" y no "Cristian" y el dato de edad

