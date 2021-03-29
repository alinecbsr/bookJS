function starsResult() {
  // cria referência aos elementos html manipulados pela function
  var inNumber = document.getElementById("inNumber");
  var outAnswer = document.getElementById("outAnswer");

  var num = Number(inNumber.value);   // obtém conteúdo do campo inNumber

  if (num == 0 || isNaN(num)) {
    alert("Número Inválido...");
    inNumber.focus();
    return;
  }

  var estrelas = "";    // declara variável que irá concatenar as estrelas/traços

  // cria um laço de repetição de 1 até o número informado
  for (var i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + "*";        // na posição ímpar do i: *
    } else {
      estrelas = estrelas + "-";        // na posição par: -
    }
  }

  outAnswer.textContent = estrelas;    // exibe as estrelas  
}
// cria referência ao botão e após associa function ao evento click
var btnResult = document.getElementById("btnResult");
btnResult.addEventListener("click", starsResult);