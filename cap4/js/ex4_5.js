// declara e inicializa contadores e acumuladores (variáveis globais)
var numAccount = 0;
var finishResult = 0;

// variável string que acumula as contas
var answer = "";

function registerAccount() {
  // cria referência aos elementos da página manipulados pela function
  var inDescription = document.getElementById("inDescription");
  var inValue = document.getElementById("inValue");
  var list = document.getElementById("list");
  var total = document.getElementById("total");

  // obtém conteúdo dos campos
  var description = inDescription.value;
  var amount = Number(inValue.value);

  // verifica preenchimento dos campos
  if (description == "" || amount == 0 || isNaN(amount)) {
    alert("Informe os dados corretamente...");
    inDescription.focus();
    return;
  }

  // adiciona valores ao contador e acumulador
  numAccount++;
  finishResult = finishResult + amount;

  // concatena as contas
  answer = answer + description + " - R$: " + amount.toFixed(2) + "\n";

  // altera o conteúdo das tags de answer
  list.textContent = answer + "--------------------------------";
  total.textContent = numAccount + " Conta(s) - Total R$: " + finishResult.toFixed(2);

  // limpa campos e posiciona cursor em inDescription
  inDescription.value = "";
  inValue.value = "";
  inDescription.focus();
}
// referencia elemento e após associa function ao evento click
var register = document.getElementById("register");
register.addEventListener("click", registerAccount);
