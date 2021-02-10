// Calculando valor a ser pago de acordo com peso e valor

function showResult() {
  // cria referência aos itens da página

  var inPrice = document.getElementById("inPrice");

  var inConsumption = document.getElementById("inConsumption");

  var outValue = document.getElementById("outValue");


  // obtem conteudo dos campos de entrada

  var price = inPrice.value;

  var consumption = inConsumption.value;

  // calcular valor a ser pago

  var value = (price / 1000) * consumption;

  outValue.textContent = "Valor a pagar R$: " + value.toFixed(2);
}

  // cria referência ao elemento btnCalculation

  var btnCalculation = document.getEmentById("btnCalculation");

  // registra um evento associado ao botão para carregar uma função

  btnCalculation.addEventListener("click", showResult)