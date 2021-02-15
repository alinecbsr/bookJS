// Calculando raiz quadrada

function calculateSquareRoot() {
  var inNumber = document.getElementById("inNumber");
  var outAnswer = document.getElementById("outAnswer");

  var number = Number(inNumber.value);

  if (number == 0 || isNaN(number)) {
    alert("Informe um número válido..."); 
    inNumber.focus(); 
    return;
  }

  var root = Math.sqrt(number);

  if (root == Math.floor(root)) {
    outAnswer.textContent = "Raiz: " + root;
  } else {
    outAnswer.textContent = "Não há raiz exata para " + number;
  }
}

var btnShow = document.getElementById("btnShow");
btnShow.addEventListener("click", calculateSquareRoot);