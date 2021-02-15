// Exibindo quantidade de notas de acordo com o valor 

function calculate() {
  // cria uma referência aos elementos da página
  var inWithdraw = document.getElementById("inWithdraw");
  var outHundred = document.getElementById("outHundred");
  var outFifty = document.getElementById("outFifty");
  var outTen = document.getElementById("outTen");

  // Limpa mensagens (caso, segunda execução)
  outHundred.textContent = "";
  outFifty.textContent = "";
  outTen.textContent = "";

  var withdraw = Number(inWithdraw.value);

  // se não preencheu ou Not-a-Number (NaN)
  if (withdraw == 0 || isNaN(withdraw)) {
    alert("Informe o valor do withdraw corretamente");  
    inWithdraw.focus();
    return;
  }

  // verifica se withdraw não é múltiplo de 10
  if (withdraw % 10 != 0) {
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
    inWithdraw.focus();
    return;
  }

  // calcula notas de 100, 50 e 10
  var hundred = Math.floor(withdraw / 100);
  var rest = withdraw % 100;
  var fifty = Math.floor(rest / 50);
  rest = rest % 50;
  var ten = Math.floor(rest / 10);

  // exibe as notas apenas se houver
  if (hundred > 0) {
    outHundred.textContent = "Notas de R$ 100: " + hundred;
  }
  if (fifty > 0) {
    outFifty.textContent = "Notas de R$ 50: " + fifty;
  }
  if (ten > 0) {
    outTen.textContent = "Notas de R$ 10: " + ten;
  }
}

var btnShow = document.getElementById("btnShow");
btnShow.addEventListener("click", calculate);