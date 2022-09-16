"use strict"
/*
Funciones con arreglos
*/

var plantillos = ["Res", "Tacos" , "Pasta"];

var bebidas = new Array("Caguama","Coca","Agua");

console.log(Array.isArray(plantillos),bebidas) //Mostrara True y desplegara el arreglo de bebidas

plantillos.push("Tostadas","Quesadillas");
plantillos.push("Queso");
console.log('Despues de push ', plantillos);

plantillos.pop();//Elimina el ultimo elemento agregado;
console.log('Despues de pop ', plantillos);

plantillos.pop();//Elimina el ultimo elemento agregado;
console.log('Despues de pop ', plantillos);

//Junta todo lo del arreglo
var mensaje = plantillos.join();
console.log(mensaje);

/*
Generacion de arreglos con split(),from() y of()
*/

//split()
var mensaje = "ceviche,tacos,carnitas"
var plantillos = mensaje.split(', ');

//Array.from()
var plantillosHTML = Array.from(document.querySelectorAll('.plantillos p'))
var plantillos = plantillosHTML.map( plantillo => plantillo.textContent )

//Array.of()
var plantillos = Array.of("Conejos","Pollo","carnitas");
console.log(plantillos); 

/*
Ordenacion
Con sort() & reverse()
*/

plantillos.sort(); //Los platillos los ordena de forma alfabetica
console.log(plantillos); 
plantillos.reverse();//Los platillos los ordena de forma inversa 
console.log(plantillos); 
plantillos.reverse();//Los platillos los ordena de forma alfabetica
console.log(plantillos); 

/*
Desestructuracion
*/
var plantillo1 = plantillos[0];
var plantillo2 = plantillos[1];
var plantillo3 = plantillos[2];

var plantillo1 = null;
var plantillo2 = null;
var plantillo3 = null;

var[plantillo1,plantillo2,plantillo3] = plantillos;
console.log(plantillo1,plantillo2,plantillo3);




