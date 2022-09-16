"use strict"
/*
Ejemplo de como usar CALLBACKS en JavaScript
Es el llamado de funciones dentro de funciones
*/

function calcular(datoA, datoB,sumar,resta) {
	var suma  = datoA + datoB
	var restar = datoA - datoB
	//SUGERENCIA procura que coincidan los nombres o llamalos igual
	//de tus metodos en los parametros como en el llamado
	sumar(suma);
	resta(restar);
}

//Parametro1,Parametro2,FuncionImplicita1,FuncionImplicita2
calcular(2, 3, function(resultado){
	console.log("Suma ", resultado) //Solamente Imprime en consola
},function(resultado){
	console.log('Resta', resultado) //Solamente Imprime en consola
})

//Resumiendo el metodo Calcular
//calcular(d1,d2,func,func)