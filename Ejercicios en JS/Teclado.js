"use strict"
/*
	Eventos de teclado
	* Keydown
	* Keypress
	* Keyup
*/

window.addEventListener("keydown",function(event){
	console.log('Pulsando tecla');
	console.log(String.fromCharCode(event.keyCode));
})

window.addEventListener("keypress",function(event){
	console.log('Tecla pulsada');
})

window.addEventListener("keyup",function(event){
	console.log('Tecla liberada');
})

/*
	Carga de documento
*/

window.addEventListener("load",function() {
	console.log('El contenido de la ventana se ha cargado');
});