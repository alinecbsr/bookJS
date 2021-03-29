function checkPerfect() {
  // cria referência aos elementos da página
  var inNumber = document.getElementById("inNumber");
  var outSplitter = document.getElementById("outSplitter");
  var outAnswer = document.getElementById("outAnswer");

  // obtém o número
  var number = Number(inNumber.value);

  // verifica validade do número
  if (number == 0 || isNaN(number)) {
    hLista.textContent = "Informe um número válido...";
    inNumber.focus();
    return;
  }

  // como 1 é um divisor universal, já iniciamos com ele
  var splitters = "Divisores do " + number + ": 1";
  var sum = 1;

  // percorre os possíveis divisores e acumula
  for (var i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      splitters = splitters + ", " + i;  // vírgula + i (evita última vírgula) 
      sum = sum + i;
    }
  }
  splitters = splitters + " (Soma: " + sum + ")";

  // altera o conteúdo de outSplitter
  outSplitter.textContent = splitters;

  // verifica se é perfeito e exibe resposta na tag outAnswer
  if (number == sum) {
    outAnswer.textContent = number + " É um Número Perfeito";
  } else {
    outAnswer.textContent = number + " Não É um Número Perfeito";
  }
}
// referencia elemento e após associa function ao evento click
var btnResult = document.getElementById("btnResult");
btnResult.addEventListener("click", checkPerfect);
