function repeatFruit() {
  var inFruit = document.getElementById("inFruit");
  var inNumber = document.getElementById("inNumber");
  var outAnswer = document.getElementById("outAnswer");

  var fruit = inFruit.value;
  var num = Number(inNumber.value);

  if (fruit == "" || num == 0 || isNaN(num)) {
    alert("Informe corretamente os dados");
    inFruit.focus();
    return;
  }

  // variável que vai acumular o número repetido das fruits
  var answer = "";   

  // cria uma repetição e...
  for (var i=1; i<num; i++) {
    // ... a cada volta, adiciona uma fruit
    answer = answer + fruit + " * ";
  }

  // isola a última fruit, para não exibir * no final
  answer = answer + fruit;

  outAnswer.textContent = answer;
}

var btnResult = document.getElementById("btnResult");
btnResult.addEventListener("click", repeatFruit);
