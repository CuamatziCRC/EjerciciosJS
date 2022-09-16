"use strict"

const video = document.querySelector('.bostonVideo');

video.addEventListener("play",function(){
	console.log('El video ha iniciado');
});

video.addEventListener("seeking",function(){
	console.log('Se esta buscando el video', this.currentTime);
});

video.addEventListener("ended",function(){
	console.log('El video ha terminado');
});

/*
Temporizadores o timers
*/
/*
var temporizador = setInterval(function(){
	setColor();
}, 2000);
*/

setTimeout(function(){
	setColor();
}, 3000);

function setColor(){
	var pagina = document.body;
	pagina.style.backgroundColor = pagina.style.backgroundColor == "blue"? "red" : "yellow";
}

function stopChangeColor(){
	clearInterval(temporizador)
}

