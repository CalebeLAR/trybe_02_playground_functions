// Desafio 1 ==============================================================
function compareTrue(valor1, valor2) {

  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }

}

// Desafio 2 ==============================================================
function calcArea(base, height) {

  area = (base * height) / 2;
  return area;

}

// Desafio 3 ==============================================================
function splitSentence(string) {

  let arrayDePalavras = string.split(' ', (string.length - 1));
  return arrayDePalavras;
}

// Desafio 4 ==============================================================
function concatName(arrayDeStrings) {

  let ultimoIndice = arrayDeStrings.length - 1;
  let ultimoItem = arrayDeStrings[ultimoIndice];
  let primeiroItem = arrayDeStrings[0];

  return ultimoItem + ', ' + primeiroItem;
}

// Desafio 5 ==============================================================
function footballPoints(wins, ties) {

  let pontuação = (wins * 3 + ties * 1);
  return pontuação;
}

// Desafio 6 ==============================================================
function highestCount(arrayDeNumeros) {

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

  let resposta = [];
  for (let indice = 0; indice < array.length; indice += 1) {

    let letraString = array[indice];
    let condiçãoPorTres = (letraString % 3 === 0);   //Vai sair false ou true
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

  let resposta = "";
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = ["1", "2", "3", "4", "5"];
  for (let indiceString = 0; indiceString < string.length; indiceString += 1) {
    let letraString = string[indiceString];

    for (let indiceVogais = 0; indiceVogais < vogais.length; indiceVogais += 1) {
      let letraVogais = vogais[indiceVogais];

      if (letraString === letraVogais) {
        letraString = numeros[indiceVogais];     //A letra "o" está na posição 3 do array vogais, ele vai no array de numeros e pega o elemento na mesma posição: 3, e atribui a variavel letra. 
      }
    }

    resposta += letraString;
  }
  return resposta;
}

function decode(string) {

  let resposta = "";
  let regra = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5" }
  for (let letra of string) {

    for (let key in regra) {
      if (letra === regra[key]) {
        letra = key;
      }
    }
    resposta += letra;
  }
  return resposta;
}


// Desafio 10 ==============================================================
function techList(array, string) {

  if (array.length === 0 || string.length === 0) {
    return "Vazio!";

  } else {
    let arrayOrdenado = array.sort()
    let listaDeObjetos = [];
    let indiceArray = 0

    for (let tech of arrayOrdenado) {
      let objeto = {};        // No início de toda repetição cria-se um objeto vazio, isso não deixa acumular elementos dentro dele.

      objeto['tech'] = arrayOrdenado[indiceArray];
      objeto['name'] = string;
      listaDeObjetos.push(objeto);

      indiceArray += 1;       // Ao final de toda repetição encrementa-se 1 ao indiceArray

    }
    return listaDeObjetos;
  }
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


