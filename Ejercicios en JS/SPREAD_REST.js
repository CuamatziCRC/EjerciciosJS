"use strict"

/*
En este ejemplo se usaran los parametros de tipo
REST y SPREAD
La diferencia de cada uno es que en REST es declarado
y en SPREAD invocado
*/

function cocinar(ingrediente1, ingrediente2, ingrediente3 , ...Otros){
	console.log('Ingrediente1 : ', ingrediente1);
	console.log('Ingrediente2 : ', ingrediente2);
	console.log("Ingrediente3 : ", ingrediente3);
	console.log("Otros : ", Otros);	
}

var ingredientesBase = ["Pollo","Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");
