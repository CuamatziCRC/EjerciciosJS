"use strict"

/*
Metodos de generacion remplazo y separacion
*/

var mensaje = "Estoy aprendiendo a programar en JavaScript";

var resultado;

//repeat
//Repite el mensaje tantas veces se indique

resultado = mensaje.repeat(200);
console.log(resultado);

//repleace
//Se busca un texto a remplazar(Palabra,remplazar)
resultado = mensaje.replace("JavaScript", "aprendiendo a programar"); 
console.log(resultado);
//slice
//Busqueda desde una posicion
resultado = mensaje.slice(6);
resultado = mensaje.slice(6,11);
console.log(resultado);
//Split
//Puede ser llamado para el acomodo de un arreglo
resultado = mensaje.split(" ");
console.log(resultado);
//Trim
//(Limpieza de los espacios en las cadenas)

resultado = mensaje.trim();
console.log(resultado);

/*
Metodos de transformacion
*/

var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y programacion";
var total = 12345;

var resultado;

resultado =  total.toString();//Transforma de enteros a cadena de texto;
console.log(resultado);

resultado = mensaje.toLowerCase();//Transforma toda la cadena en Minusculas;
console.log(resultado);

resultado = mensaje.toUpperCase();//Tansforma toda la cadena en Mayusculas;
console.log(resultado);

resultado = mensaje.concat(mensaje2,"."," Y muchas mas ideas");//Concatenacion de cadenas
console.log(resultado);

/*
Plantillas y literales
*/

var lenguaje = "JavaScript";
var lenguaje2 = "HTML";
var mensaje = `Me gusta ${lenguaje} y su integracion con ${lenguaje2}`;
console.log(mensaje);

/*
Plantillas literales multilínea
Las plantillas literales (en-US) son cadena literales que permiten expresiones incrustadas.
 Puedes utilizar cadenas de varias líneas y funciones de interpolación de cadenas con ellas.

Las plantillas literales están encerradas por el carácter (``) (acento grave) en lugar de comillas simples o dobles. 
Las plantillas literales pueden contener marcadores de posición. 
Estos se indican mediante el signo de dólar y llaves (${expresión}).
*/

//Mensaje Multilinea
var mensajeMultilinea = `Hola mundo
estoy aprendiendo ${lenguaje} y me gusta
como integra con HTML y CSS`;

console.log(mensajeMultilinea);

