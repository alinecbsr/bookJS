// Exibindo numeros descrecentes de valor informado

function listNumbers() {
  var inNumber = document.getElementById("inNumber");
  var outAnswer = document.getElementById("outAnswer");
    
  var number = Number(inNumber.value);   

  if (number == 0 || isNaN(number)) {
    alert("Informe um número válido...");
    inNumber.focus();
    return;
  }

  // inicializa variável resposta
  var answer = "Entre " + number + " e 1: ";

  // cria um for decrescente
  for (var i = number; i > 0; i = i - 1) {
    // resposta vai acumulando números (e vírgulas)
    answer = answer + i + ", ";
  }

  outAnswer.textContent = answer;
}

var btnShow = document.getElementById("btnShow");
btnShow.addEventListener("click", listNumbers);