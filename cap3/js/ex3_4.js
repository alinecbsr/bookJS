// Calculando fuso horário

function calculateTimeZone() {
  var inHourBrazil = document.getElementById("inHourBrazil");
  var outHourFrance = document.getElementById("outHourFrance");

  var hourBrazil = Number(inHourBrazil.value);

  if (inHourBrazil.value == "" || isNaN(hourBrazil)) {
      alert("Informe a hora no Brasil corretamente");
      inHourBrazil.focus();
      return;
  }

  var hourFrance = hourBrazil + 5;

  if (hourFrance > 24) {
      hourFrance = hourFrance - 24; 
  }

  outHourFrance.textContent = "Hora na França: " + hourFrance.toFixed(2);
}

var btnShow = document.getElementById("btnShow");
btnShow.addEventListener("click", calculateTimeZone);