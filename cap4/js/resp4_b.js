function showProjection() {
  // cria referencia aos elementos da página
  var inAnimal = document.getElementById("inAnimal");
  var inYears = document.getElementById("inYears");
  var outResult = document.getElementById("outResult");
  
  // obtém os dados de entrada
  var animals = Number(inAnimal.value);
  var years = Number(inYears.value);

  // valida os números (deve ser, no mínimo, um casal)
  if (animals < 2 || isNaN(animals) || years == 0 || isNaN(years)) {
    alert("Informe corretamente os dados...");
    inAnimal.focus();
    return;
  }

  // cria uma variável do tipo String, que irá concatenar a resposta
  var answer = "";
  var total = animals;

  // define o laço de repetição
  for (var i = 1; i <= years; i++) {    
    answer = answer + i + "º Ano: " + total + " Chinchilas\n";
    total = total * 3;
  }

  // altera o conteúdo da tag de resposta
  outResult.textContent = answer;
}
// cria referência ao botão e após associa function ao evento click
var btnShow = document.getElementById("btnShow");
btnShow.addEventListener("click", showProjection);