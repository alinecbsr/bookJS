// Exibindo possibilidade e tipo de triângulo

function verificarTriangulo() {
  var inSideA = document.getElementById("inSideA");
  var inSideB = document.getElementById("inSideB");
  var inSideC = document.getElementById("inSideC");
  var outPossibility = document.getElementById("outPossibility");
  var outType = document.getElementById("outType");

  sideA = Number(inSideA.value);
  sideB = Number(inSideB.value);
  sideC = Number(inSideC.value);

  if (sideA == 0 || sideB == 0 || sideC == 0 || isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    alert("Informe lados válidos para o triângulo");
    inSideA.focus();
    return;
  }

  if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB) {
    outPossibility.textContent = "Lados não podem formar um triângulo";
  } else {
    outPossibility.textContent = "Lados podem formar um triângulo";
    if (sideA == sideB && sideA == sideC) {
      outType.textContent = "Tipo: Equilátero";
    } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
      outType.textContent = "Tipo: Isósceles";      
    } else {
      outType.textContent = "Tipo: Escaleno";            
    }
  }

}
var btnCheck = document.getElementById("btnCheck");
btnCheck.addEventListener("click", verificarTriangulo);