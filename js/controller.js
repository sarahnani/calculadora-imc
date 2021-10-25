var pacientes = []; //array

var botaoCalcular = document.getElementById ("calcular");
botaoCalcular.addEventListener ('click', function () {
									var paciente = lePaciente (); //recebe objeto paciente
									pacientes.push (paciente); //armazenar objeto paciente no array pacienteS
									mostraPaciente (paciente);
									limpaCampos ()
								});

var botaoRelatorio = document.getElementById ("relatorio");
botaoRelatorio.addEventListener ('click', function () {
											geraRelatorio (pacientes)
										});

//console.log (nome);
//console.log (`Peso: ${peso} - Altura: ${altura}`);
//console.log (`Cálculo do IMC: ${imc.toFixed(2)}`);
