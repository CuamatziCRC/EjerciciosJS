"use strict"

/*
Eventos del mouse con JS
*/

const boton = document.querySelector('.boton');

boton.addEventListener('click', function() {
	console.log('El bóton se ha pulsado');
})

boton.addEventListener('mouseover', function() {
	console.log('El mouse esta sobre el botón');
})


boton.addEventListener('mouseout', function() {
	console.log('El mouse esta fuera del botón');
})
