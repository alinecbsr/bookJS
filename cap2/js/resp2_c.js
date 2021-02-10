// Calculando desconto na compra de três itens

function showResult() {
  var inProduct = document.getElementById("inProduct");

  var inPrice = document.getElementById("inPrice");

  var outSale = document.getElementById("outSale");

  var outDiscount = document.getElementById("outDiscount");


  product = inProduct.value;

  price = Number(inPrice.value);

  discount = price * 0.50;

  sale = (price * 2) + discount;


  outSale.textContent = product + " - Promoção: Leve 3 por R$: " + sale.toFixed(2);

  outDiscount.textContent = "O 3º produto custa apenas R$: " + discount.toFixed(2);
}

var btnCalculation = document.getElementById("btnCalculation");

btnCalculation.addEventListener("click", showResult);