"use strict"
/*
Ventana de confirmacion
*/

const video = document.querySelector(".bostonVideo");

video.addEventListener("ended" , function(){
	let resultado = confirm("Deseas ver el video nuevamente?");
	console.log(resultado);
	if (resultado) {
		video.play();
	} else {
		window.location = "http://www.google.com.mx";
	}
});

/*
Ventana para ingreso de datos
*/

const video =  document.querySelector(".bostonVideo");

video.addEventListener("ended",function(){
	let email = prompt("Escribe tu correo para ver el video", "Ejemplo@ejemplo.com");

	if (email == null || email == "") {
		console.log("sin datos");
	} else {
		console.log(email);
	}
});