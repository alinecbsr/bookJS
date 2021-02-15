// Calculando peso ideal de acordo com altura e sexo

function calculateWeight () {
  // cria referência aos elementos manipulados pela function
  var inName = document.getElementById("inName");
  var rbMale = document.getElementById("rbMale");
  var rbFemale = document.getElementById("rbFemale");
  var inHeight = document.getElementById("inHeight");
  var outResult = document.getElementById("outResult");

  // obtém o conteúdo dos campos de edição da página
  var nome = inName.value;
  var masculino = rbMale.checked;
  var feminino = rbFemale.checked;
  var altura = Number(inHeight.value);

  // verifica se nome foi preenchido e sexo selecionado
  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inName.focus(); // posiciona (joga o foco) no campo de edição inName
    return;
  }

  // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente...");
    inHeight.focus();
    return;
  }

  // se masculino (significa se masculino == true)
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2);     // Math.pow eleva ao quadrado
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  // apresenta a resposta (altera o conteúdo da linha outResult) 
  outResult.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}
// cria referência ao elemento btCalcular e registra evento associado a calcularPeso
var btnResult = document.getElementById("btnCalculation");
btnResult.addEventListener("click", calculateWeight);

function limparCampos() {
  // Limpa os conteúdos dos elementos
  document.getElementById("inName").value = "";
  document.getElementById("rbMale").checked = false;
  document.getElementById("rbFemale").checked = false;
  document.getElementById("inHeight").value = "";
  document.getElementById("outResposta").textContent = "";
  // ou...Recarrega a página
  // location.reload();
  // posiciona (joga o foco) no elemento inName
  document.getElementById("inName").focus();
}
var btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", limparCampos);