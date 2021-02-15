function verificarMulta() {
  var inMaxSpeed = document.getElementById("inMaxSpeed");
  var inDriverSpeed = document.getElementById("inDriverSpeed");
  var outSituation = document.getElementById("outSituation");

  var maxSpeed = Number(inMaxSpeed.value);
  var driverSpeed = Number(inDriverSpeed.value);

  if (inMaxSpeed.value == "" || isNaN(maxSpeed) ||
    inDriverSpeed.value == "" || isNaN(driverSpeed)) {
    alert("Informe as velocidades corretamente...");
    inMaxSpeed.focus();
    return;
  }

  if (driverSpeed <= maxSpeed) {
    outSituation.textContent = "Situação: Sem Multa";
  } else {
    var plustwenty = maxSpeed * 1.20;
    if (driverSpeed <= plustwenty) {
      outSituation.textContent = "Situação: Multa Leve";
    } else {
      outSituation.textContent = "Situação: Multa Grave";
    }
  }
}

var btnCheck = document.getElementById("btnCheck");

btnCheck.addEventListener("click", verificarMulta);