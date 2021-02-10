// Calculando valor de entrada e parcelamento 

function showResult() {
  // cria referência aos itens da página

  var inCar = document.getElementById("inCar");

  var inPrice = document.getElementById("inPrice");

  var outCar = document.getElementById("outCar");

  var outEntry = document.getElementById("outEntry");

  var outInstallment = document.getElementById("outInstallment");

  // obtem conteudo dos campos de entrada

  var car = inCar.value;

  var price = inPrice.value;

  // calcular 50% do valor para entrada do carro

  var entry = price * 0.50;

  // obtem a divisão em parcelas do resto do saldo

  var installment = (price * 0.50) / 12;

  // altera o conteúdo exibindo as resposta

  outCar.textContent = "Promoção: " + car;

  outEntry.textContent = "Entrada de R$: " + entry.toFixed(2);

  outInstallment.textContent = " + 12x de R$: " + installment.toFixed(2);
}

  // cria referência ao elemento btnCalculation

  var btnCalculation = document.getEmentById("btnCalculation");

  // registra um evento associado ao botão para carregar uma função

  btnCalculation.addEventListener("click", showResult)