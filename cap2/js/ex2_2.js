// Convertendo minutos em horas e minutos

function showResult() {
  // cria referência aos itens da página

  var inTitle = document.getElementById("inTitle");

  var inTime = document.getElementById("inTime");

  var outTitle = document.getElementById("outTitle");

  var outAnswer = document.getElementById("outAnswer");

  // obtem conteudo dos campos de entrada

  var title = inTitle.value;

  var time = inTime.value;

  // arredonda para baixo o resultado da divisão

  var hours = Math.floor(time / 60);

  // obtem o resto da divisão entre os números

  var minutes = time % 60;

  // altera o conteúdo exibindo as resposta

  outTitle.textContent = title;

  outAnswer.textContent = hours + " hora(s) e " + minutes + " minuto(s)";
}

  // cria referência ao elemento btnConvert

  var btnConvert = document.getEmentById("btnConvert");

  // registra um evento associado ao botão para carregar uma função

  btnConvert.addEventListener("click", showResult)
