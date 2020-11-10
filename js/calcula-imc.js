
var titulo = document.querySelector(".titulo");
titulo.textContent = "Gustavo nutrições"

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;



var tdImc = paciente.querySelector(".info-imc");

var pesoValido = validaPeso(peso);
var alturaValido = validaAltura(altura);

if (!pesoValido) {
	console.log("Peso inválido");
	var pesoValido = false;
	tdImc.textContent = "Peso inválido";
	paciente.classList.add("paciente-invalido");
}

if (!alturaValido) {
	console.log("Altura invalida");
	var alturaValido = false;
	tdImc.textContent = "altura inválido";
	paciente.classList.add("paciente-invalido");
}

if(alturaValido && pesoValido){

	var imc = calculaImc(peso,altura);

	tdImc.textContent = imc;// imc na linha da tabela
}

}

function validaPeso(peso){

	if (peso >= 0 && peso < 1000) {

		return true;
	}else{

		return false;
	}

}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}


}

function calculaImc(peso,altura){
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}




titulo.addEventListener("click", function(){
	console.log("Olha só, eu posso chamar uma função anonima :P");
});
// função não anonima
function mostraMensagem(){

	console.log("Olá eu fui clicado")
}

