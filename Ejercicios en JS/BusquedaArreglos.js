"use strict"

/*

Interando arreglos con for..in

*/

var platillos = ["ceviche", "tacos", "pasta"];

for (let i in platillos) {
	console.log(platillos[i])
}

/*
Interando arreglos con forEach
*/

/*platillos.forEach( platillo => console.log(platillos))
	//Accede a los contenidos del arreglo
*/

//(dato,indice)
platillos.forEach((platillo, index) => console.log(index,platillo))


var platillos = ["ceviche", "tacos", "pasta"];

//var pElegido = platillos.find( platillo => platillo =="tacos");

var menu = [
	{nombre: "Ceviche",precio:20,pais:"Peru"},
	{nombre: "Tacos",precio:30,pais:"Mexico"},
	{nombre: "Pasta",precio:10,pais:"Italia"},
	{nombre: "Quesadillas",precio:10,pais:"Mexico"}
];

var pElegido = menu.find(platillo => platillo.nombre == "Tacos");
console.log(pElegido); //Mostrara todo el arreglo :	{nombre: "Tacos",precio:30,pais:"Mexico"}



//Busqueda de elementos mediante un indice

var numPlatillo =  platillos.findIndex(platillo => platillo.nombre == "tacos");
console.log("Platillos numero : "numPlatillo);


var numPlatillo =  menu.findIndex(platillo => platillo.nombre == "Tacos");
console.log("Platillos numero : "numPlatillo);

//Arrojara uno en consola en ambas pero se debe de tener cuidado en la busqueda ya que
// Tacos <> tacos


//Filtrado de arreglos

var resultado = null;

/*
Solamente muestra el primero en encontrar
resultado = menu.find(platillo => platillo.pais == "Mexico");
console.log(resultado);
*/

resultado = menu.filter(platillo => platillo.pais == "Mexico");
console.log(resultado);


resultado = menu.some(platillo => platillo.precio ,precio <= 10);//Muestra si un elemento cuesta menos a 10
console.log("¿Hay platillos abajo de 10 ? ",resultado);

resultado = menu.every(platillo => platillo.precio ,precio <= 60);//Muestra si todos los elementos cuesta menos a 60
console.log("¿Todos los platillos cuestan menos de 60 ? ",resultado);