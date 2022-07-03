// Desafio 11
function generatePhoneNumber(array) {

  function verificaRepetições(array) {
    for (elementoParticular of array) {
      let cont = 0;
      for (elementosDaLista of array) {
        if (elementoParticular === elementosDaLista) {
          cont += 1;
        }

        if (cont >= 3) {
          return false
        }
      }
    }

    return true
  }

  function verificaNumeros(array) {
    for (num of array) {
      if (num >= 10 || num < 0) {
        return false
      }
    }
  }

  function formataNumero(array) {
    let string = ""
    for (let index = 0; index < array.length; index += 1) {
      string += JSON.stringify(array[index])
    }
    return "(" + string[0] + string[1] + ") " + string[2] + string[3] + string[4] + string[5] + string[6] + "-" + string[7] + string[8] + string[9] + string[10]
  }


  if (array.length !== 11) {
    return "Array com tamanho incorreto."

  } else if (verificaNumeros(array) === false || verificaRepetições(array) === false) {
    return "não é possível gerar um número de telefone com esses valores";

  } else {
    return formataNumero(array)
  }

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
