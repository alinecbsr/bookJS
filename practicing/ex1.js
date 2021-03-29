function somar(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    throw new TypeError("Valores inválidos");
  }
}

function subtrair(x, y) {
  if (!isNaN(x) && !isNaN(y)) {
    return x - y;
  } else {
    throw new TypeError("Valores inválidos");
  }
}

function multiplicar(x, y) {
  if (!isNaN(x) && !isNaN(y)) {
    return x * y;
  } else {
    throw new TypeError("Valores inválidos");
  }
}

function dividir(x, y) {
  if(isNaN(x) || isNaN(y)){
    throw new TypeError('Valores inválidos');
  } else if (x == 0 || y == 0) {
    throw new Error('Número precisa ser maior que zero')
  } else {
    return x / y;
  }
}
