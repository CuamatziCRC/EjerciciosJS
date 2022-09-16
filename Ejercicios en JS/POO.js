"use strict"
/*
Metodos y propiedas
*/
class Producto{
	constructor(numSerie){
		this.numSerie = numSerie;
		this.tiempoGarantia = 100;
	}

	static get infoTienda(){
		console.log('Producto de la tienda patito 4T');
	}

	set garantia(value){
		this.tiempoGarantia -= value;
	}

	get garantia(){
		return this.tiempoGarantia;
	}
}	


class pantalla extends Producto{
	constructor(numSerie, marca, modelo, pulgadas){
		super(numSerie)
		this.marca = marca;
		this.modelo = modelo;
		this-pulgadas = pulgadas;
	}

	encendido(){
		this.garantia -= value;
		console.log('La pantalla ${this.marca} se ha encendido');
	}

	volumen(){
		console.log('El volumen se modifico');
	}

	info(){
		console.log('La pantalla  ${this.marca} de modelo ${this.modelo} de pulgadas ${this.pulgadas}');
	}

	set peso (value){
		this.kgs = value.trim();
	}

	get peso(){
		return this.kgs;
	}

	const tvSala = new Pantalla('Master', 'Oasis', 55);
	const tvHabitacion = new Pantalla('Origin','Artemis', 90);
}