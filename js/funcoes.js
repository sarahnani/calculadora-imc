function calculaImc (peso,altura) {
	var imc = peso / altura**2;
	return imc;
}

function verficaImc (imc) {
	var situacao = null;
	if (imc < 18.5) {
		situacao = "Magreza";
	} else if (imc <= 24.9) {
		situacao = "Normal";
	} else if (imc <= 30) {
		situacao = "Sobrepeso";
	} else {
		situacao = "Obesidade"
	}
	return situacao;
}

function mostraPaciente (paciente) {
	var imc = calculaImc (paciente.peso,paciente.altura); //objeto.item
	var situacao = verficaImc (imc);

	var elNome = document.getElementById ("nome");
	elNome.innerHTML = paciente.nome;
	var elPeso = document.getElementById ("peso");
	elPeso.innerHTML = paciente.peso;
	var elAltura = document.getElementById ("altura");
	elAltura.innerHTML = paciente.altura;
	var elImc = document.getElementById ("imc");
	elImc.innerHTML = imc.toFixed(2);
	var elSituacao = document.getElementById ("situacao");
	elSituacao.innerHTML = situacao;
}

function lePaciente () {
	var inputNome = document.getElementById ("txtNome");
	var inputPeso = document.getElementById ("numPeso");
	var inputAltura = document.getElementById ("numAltura");

	var paciente = {
		nome: inputNome.value,
		peso: inputPeso.value,
		altura: inputAltura.value
	};

	return paciente;
}

function geraRelatorio (pacientes) {
	var listaNumerada = document.getElementById ("listaNumerada");
	listaNumerada.innerHTML = ""; //limpa lista
	pacientes.forEach ( (paciente) => { // seta é função anônima
		var imc = calculaImc (paciente.peso,paciente.altura);
		var sit = verficaImc (imc);
		listaNumerada.innerHTML += `<li> ${paciente.nome} - Situação: ${sit} </li>`
	});
}

function limpaCampos () {
	var inputNome = document.getElementById ("txtNome");
	inputNome.value = "";
	var inputPeso = document.getElementById ("numPeso");
	inputPeso.value = "";
	var inputAltura = document.getElementById ("numAltura");
	inputAltura.value = "";
}