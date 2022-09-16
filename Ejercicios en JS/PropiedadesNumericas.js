"use strict"

/*
Propiedades numericas
*/

console.log('MAX_VALUE: ',Number.MAX_VALUE);

console.log('MIN_VALUE: ', Number.MIN_VALUE);

console.log('NEGATIVE_INFINITY: ',Number.NEGATIVE_INFINITY);

console.log('NEGATIVE_INFINITY: ',Number.POSITIVE_INFINITY);

console.log('NaN: ', Number.NaN);


/*
Metodos de busqueda de texto
indexOf la primera coincidencia
lastIndexOf la ultima coincidencia
search

*/
var mensaje = "Hola estoy aprendiendo JavaScript y estoy aprendiendo mucho";
var resultado;
//search
//resultado = mensaje.search(/letras/indiferente May & Min);

resultado = mensaje.search(/ja/i);
console.log(resultado);