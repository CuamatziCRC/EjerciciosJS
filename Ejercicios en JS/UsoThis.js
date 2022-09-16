"use strict"

/*
Uso del operador This
*/

const boton = document.querySelector('.boton');

//LLamado del metodo cada que es pulsado el boton
boton.addEventListener('click',function () {
	//console.log('Boton Pulsado');
	console.log(this.innerHTML);
})


boton.addEventListener('click', () =>{
	console.log(this)
	this.location = "http://www.google.com";
})	