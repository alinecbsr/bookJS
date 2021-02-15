// Exibindo mensagens condicionadas a nota do aluno

function showResult() {
  var inName = document.getElementById("inName");

  var inGrade1 = document.getElementById("inGrade1");

  var inGrade2 = document.getElementById("inGrade2");

  var outAverage = document.getElementById("outAverage");

  var outSituation = document.getElementById("outSituation");


  var name = inName.value;

  var grade1 = Number(inGrade1.value);

  var grade2 = Number(inGrade2.value);


  average = (grade1 + grade2) / 2;

  
  outAverage.textContent = "Média das notas: " + average.toFixed(1);

  if (average >= 7) {
    outSituation.textContent = "Parabéns " + name + "! Você foi aprovado(a)";
    outSituation.style.color = "blue";
  } else if (average >= 4) {
    outSituation.textContent = "Atenção " + name + ". Você está em exame";
    outSituation.style.color = "green";
  } else {
    outSituation.textContent = "Ops " + name + "... Você foi reprovado(a)";
    outSituation.style.color = "red";
  }
}

var btnShowResult = document.getElementById("btnShowResult");

btnShowResult.addEventListener("click", showResult);
