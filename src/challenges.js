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
  let arrayDePalavras = string.split(' ', (string.length - 1));
  return arrayDePalavras;
}

// Desafio 4 ==============================================================
function concatName(arrayDeStrings) {
  // seu código aqui
  let ultimoIndice = arrayDeStrings.length - 1;
  let ultimoItem = arrayDeStrings[ultimoIndice];
  let primeiroItem = arrayDeStrings[0];

  return ultimoItem + ', ' + primeiroItem;
}

// Desafio 5 ==============================================================
function footballPoints(wins, ties) {
  // seu código aqui
  let pontuação = (wins * 3 + ties * 1);
  return pontuação;
}

// Desafio 6 ==============================================================
function highestCount(arrayDeNumeros) {
  // seu código aqui
  let maior = 0;
  let contador = 0;
  let elemento;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    elemento = arrayDeNumeros[index];
    if (index === 0) {
      maior = elemento;
    } else if (elemento >= maior) {
      maior = elemento;

    }
  }

  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    elemento = arrayDeNumeros[index];
    if (maior === elemento) {
      contador += 1;

    }
  }

  return contador;
}

// Desafio 7 ==============================================================
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distânciaCat1 = mouse - cat1;
  let distânciaCat2 = mouse - cat2;
  let resposta;

  if (distânciaCat1 < 0) {
    distânciaCat1 = distânciaCat1 * -1;
  }
  if (distânciaCat2 < 0) {
    distânciaCat2 = distânciaCat2 * -1;
  }

  if (distânciaCat1 < distânciaCat2) {
    resposta = 'cat1';
  } else if (distânciaCat1 > distânciaCat2) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }

  return resposta;
}

// Desafio 8 ==============================================================
function fizzBuzz(array) {
  // seu código aqui
  let resposta = [];
  for (let indice = 0; indice < array.length; indice += 1) {

    let letraString = array[indice];
    let condiçãoPorTres = (letraString % 3 === 0);   //vai sair false ou true
    let condiçãoPorCinco = (letraString % 5 === 0);

    if (condiçãoPorTres === true && condiçãoPorCinco === true) {
      resposta.push('fizzBuzz');
    } else if (condiçãoPorTres === true) {
      resposta.push('fizz');
    } else if (condiçãoPorCinco === true) {
      resposta.push('buzz');
    } else {
      resposta.push('bug!');
    }

  }
  return resposta;
}

// Desafio 9 ==============================================================
function encode(string) {
  // seu código aqui[
  let resposta = "";
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = ["1", "2", "3", "4", "5"];
  for (let indiceString = 0; indiceString < string.length; indiceString += 1) {
    let letraString = string[indiceString];

    for (let indiceVogais = 0; indiceVogais < vogais.length; indiceVogais += 1) {
      let letraVogais = vogais[indiceVogais];

      if (letraString === letraVogais) {
        letraString = numeros[indiceVogais];
      }
    }

    resposta += letraString;
  }
  return resposta;
}

function decode(string) {
  // seu código aqui
  let resposta = "";
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = ["1", "2", "3", "4", "5"];
  for (let indiceString = 0; indiceString < string.length; indiceString += 1) {
    let letraString = string[indiceString];
    for (let indiceNumeros = 0; indiceNumeros < numeros.length; indiceNumeros += 1) {
      if (letraString === numeros[indiceNumeros]) {
        letraString = vogais[indiceNumeros];
      }
    }
    resposta += letraString;
  }
  return resposta;
}


// Desafio 10 ==============================================================
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


