// Desafio 1 ==============================================================
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }

}

// Desafio 2 ==============================================================
function calcArea(base, height) {
  // seu código aqui
  area = (base * height) / 2;
  return area; 
  
}

// Desafio 3 ==============================================================
function splitSentence(string) {
  // seu código aqui
  let arrayDePalavras = string.split(" ", (string.length - 1));
  return arrayDePalavras;
}

// Desafio 4 ==============================================================
function concatName(arrayDeStrings) {
  // seu código aqui
  let ultimoIndice = arrayDeStrings.length - 1;
  let ultimoItem = arrayDeStrings[ultimoIndice];
  let primeiroItem = arrayDeStrings[0];

  return ultimoItem + ", " + primeiroItem;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let pontuação = ( wins * 3 + ties * 1 );
  return pontuação;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};


