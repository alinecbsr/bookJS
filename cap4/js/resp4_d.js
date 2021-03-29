function createStars() {
  var inLines = document.getElementById("inLines");
  var outAnswer = document.getElementById("outAnswer");

  var lines = Number(inLines.value);

  if (lines == 0 || isNaN(lines)) {
    alert("Informe um número válido");
    inLines.focus();
    return;
  }

  // variável que irá concatenar as estrelas
  var stars = "";

  // cria uma repetição (até o número de linhas informado)
  for (var i = 1; i <= lines; i++) {
    // dentro dessa repetição é criada uma outra (para cada linha, até i)
    for (var j = 1; j <= i; j++) {
      stars = stars + "*"
    }
    stars = stars + "\n";     // faz uma quebra de linha
  }

  outAnswer.textContent = stars;
}
var btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", createStars);