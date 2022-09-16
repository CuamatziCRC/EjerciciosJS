"use strict" //Uso estricto de JavaScript

//Un simple ejemplo del uso de REST en JavaScript

function cocinar(ingrediente1, ingrediente2, ...ingredienteExtra){
	console.log('ingrediente1: ', ingrediente1);
	console.log('ingrediente2: ',ingrediente2);
	console.log('ingredienteExtra: ', ingredienteExtra);
}

//Se invoca al metodo cocinar e imprime en consola los parametros
cocinar("Res","Conejo","Pato","Chiva","Salsa");

/*En la variable "...ingredienteExtra" agrupa los demas valores 
.Un parametro de tipo REST es antecede de ... (tres puntos)
,si deseas imprimir todos los parametros sin llamarlos individualmente 
usa console.log('ingredienteExtra: ', ingredienteExtra) y borra los demas 
parametros dejando unicamente ...ingredienteExtra
*/