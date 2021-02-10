// Calculando valor a ser pago por tempo de uso

function showResult() {
  // cria referência aos elementos da página

  var inTax = document.getElementById("inTax");

  var inTime = document.getElementById("inTime");

  var outValue = document.getElementById("outValue");

  // obtem conteudo dos campos de entrada

  tax = Number(inTax.value);

  time = Number(inTime.value);

  // calculca valor a ser pago de acordo com o tempo

  value = Math.ceil(time / 15) * tax;

  // exibe resibe resultado

  outValue.textContent = "Valor a Pagar R$: " + value.toFixed(2);
}

// captura botão e associa evento, ao clicar, aciona função showResult

var btnCalculation = document.getElementById("btnCalculation");

btnCalculation.addEventListener("click", showResult);