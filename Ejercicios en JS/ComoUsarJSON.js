"use strict"

// JSON -> JavaScript Object Notation

//Se crea el objeto persona con los atributos nombre y twitter
var persona = { nombre : "Cristian" , Twitter : "Cuama"};

//Se crea un arreglo de "personas" e incluso llamar a uno individual
var personas = [
	{nombre : "Hugo" , Twitter: "ElHugo"},
	{nombre : "Paco" , Twitter: "ElPaco"},
	{nombre : "Luis" , Twitter: "ElLuis"},
	persona
]

// En personaJSON se almacena "TODA LA INFORMACION COMO UNA CADENA DE TEXTO"

var personaJSON = JSON.stringify(persona);

// En nuevaPersona se convierte de cadena a objetos tipo JSON

var nuevaPersona = JSON.parse(personaJSON)

//Puedes manipular este ejemplo en consola de cualquier navegador

