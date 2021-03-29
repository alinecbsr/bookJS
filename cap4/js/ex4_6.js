function verifyNumber() {
  // cria referência aos elementos da página
  var inNumber = document.getElementById("inNumber");
  var outAnswer = document.getElementById("outAnswer")

  var num = Number(inNumber.value);    // obtém o número informado

  // verifica se preencheu corretamente o campo inNumber
  if (num == 0 || isNaN(num)) {
    alert("Número Inválido...");
    inNumber.focus();
    return;
  }

  // declara e inicializa a variável tipo flag
  var hasDivider = 0;

  // percorre os possíveis divisores do num
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      hasDivider = 1; // muda o flag
      break; // sai da repetição
    }
  }

  // se num > 1 e não possui divisor
  if (num > 1 && !hasDivider) {
    outAnswer.textContent = num + " É primo";
  } else {
    outAnswer.textContent = num + " Não é primo";
  }
}
// referencia elemento e após associa function ao evento click
var btVserify = document.getElementById("btVserify");
btVserify.addEventListener("click", verifyNumber);
