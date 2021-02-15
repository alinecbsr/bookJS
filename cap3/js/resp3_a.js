function checkNumber() {
  var inNumber = document.getElementById("inNumber");
  var outAnswer = document.getElementById("outAnswer");

  var number = Number(inNumber.value);

  if (number == 0 || isNaN(number)) {
    alert("Informe um número válido");
    inNumber.focus();
    return;
  }

  if (number % 2 == 0) {
    outAnswer.textContent = "Resposta: " + number + " é Par";
  } else {
    outAnswer.textContent = "Resposta: " + number + " é Ímpar";
  }
}

var btnCheck = document.getElementById("btnCheck");

btnCheck.addEventListener("click", checkNumber);