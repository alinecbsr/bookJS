// Aplicando desconto no valor total na compra de duas unidades

function showResult() {
  // cria referência aos elementos da página

  var inProduct= document.getElementById("inProduct");

  var inPrice = document.getElementById("inPrice");

  var outSale = document.getElementById("outSale");

  var outValue = document.getElementById("outValue");


  // obtem conteudo dos campos de entrada

  var product = inProduct.value;

  var price = Number(inPrice.value);

  // calcula valor da promoção (arredonda para baixo)

  var sale = Math.floor(price * 2);

  // exibe resultado

  outSale.textContent = "Promoção de " + product;

  outValue.textContent = "Leve 2 por apenas R$: " + sale.toFixed(2);
}

  // cria referência ao elemento btnCalculation

  var btnCalculation = document.getEmentById("btnCalculation");

  // registra um evento associado ao botão para carregar uma função

  btnCalculation.addEventListener("click", showResult)