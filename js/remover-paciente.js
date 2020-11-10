var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	// var alvoEvento = event.target;
	// var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover-paciente
	// paiDoAlvo.remove();
	event.target.parentNode.classList.add("fadeOut"); //Em uma linha só
	
	setTimeout(function(){
		event.target.parentNode.remove();

	},500);


});
