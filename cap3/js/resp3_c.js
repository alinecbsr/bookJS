// Calculando inValue pago e troco em parquímetro de acordo com time de uso

function verification() {
  var inValue = document.getElementById("inValue");
  var autTime = document.getElementById("autTime");
  var outMoney = document.getElementById("outMoney");

  var inValue = Number(inValue.value);

  if (inValue == 0 || isNaN(inValue)) {
    alert("Informe um inValue válido de moedas");
    inValue.focus();
    return;
  }

  if (inValue < 1.00) {
    alert("inValue Insuficiente (no mínimo, R$ 1.00)");
    inValue.focus();
    return;
  }

  var time;
  var money;

  if (inValue >= 3.00) {
    time = 120;
    money = inValue - 3.00;
  } else if (inValue >= 1.75) {
    time = 60;
    money = inValue - 1.75;
  } else {
    time = 30;
    money = inValue - 1.00;
  }

 
  outTime.textContent = "Tempo: " + time + " min";
  if (money > 0) {
    outMoney.textContent = "Troco R$: " + money.toFixed(2);
  }
}
var btnCheck = document.getElementById("btnCheck");
btnCheck.addEventListener("click", verification);