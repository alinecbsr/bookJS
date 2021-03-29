// Calculando e exibindo o resultado de uma tabuada

function showResult() {
  var inNumber = document.getElementById("inNumber");
  var outMultiplicationTable = document.getElementById("outMultiplicationTable");
  
  var number = Number(inNumber.value);

  if (number == 0 || isNaN(number)) {
    alert("Informe um número válido...");
    inNumber.focus();
    return;
  }

  // cria uma variável do tipo String, que irá concatenar a resposta
  var answer = "";

  // cria um laço de repetição
  for (var i = 1; i <= 10; i++) {
    // a variável answer vai acumulando os novos conteúdos
    answer = answer + number + " x " + i + " = " + number * i + "\n";
  }

  outMultiplicationTable.textContent = answer;
}

var btnShow = document.getElementById("btnShow");
btnShow.addEventListener("click", showResult);
