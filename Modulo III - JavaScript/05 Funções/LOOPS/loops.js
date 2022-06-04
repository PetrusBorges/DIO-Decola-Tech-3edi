//IF ELSE
//forma numero um-----------------------------
function numeroPositivo(num) {
  let resultado

  if (num < 0) {
    resultado = false
  } else {
    resultado = true
  }

  return resultado
}

console.log(numeroPositivo(-5)) //false-----------------------------

//forma numero dois
function numeroPositivo(num) {
  let resultado

  const ehNegativo = num < 0

  if (ehNegativo) {
    resultado = false
  } else {
    resultado = true
  }

  return resultado
}

console.log(numeroPositivo(-5)) //false-----------------------------

//forma numero três
function numeroPositivo(num) {
  const ehNegativo = num < 0

  if (ehNegativo) {
    return false
  }

  return true
}

console.log(numeroPositivo(5)) //true

//forma numero quatro
function numeroPositivo(num) {
  const ehNegativo = num < 0
  const maiorQueDez = num > 0

  if (ehNegativo) {
    return 'Esse número é negativo'
  } else if (!ehNegativo && maiorQueDez) {
    return 'Esse número é negativo maior que dez'
  }

  return 'esse numero é positivo'
}

console.log(numeroPositivo(5)) //esse numero é positivo

//SWITCH----------------------------------------
function getAnimal(id) {
  switch (id) {
    case 1:
      return 'cao'
    case 2:
      return 'gato'
    case 3:
      return 'pássaro'
    default:
      return 'peixe'
  }
}

getAnimal(1) //cao
getAnimal(4) //peixe
getAnimal('1') //peixe

//for----------------------------------------
function multiplicaPorDois(arr) {
  let multiplicados = []

  for (let i = 0; i < arr.lengh; i++) {
    multiplicados.push(arr[i] * 2)
  }

  return multiplicados
}

const meusNumeros = [2, 33, 456, 356, 40]

multiplicaPorDois(meusNumeros)

//for in ----------------------------------------
function forInExemplo(obj) {
  for(prop in obj) {
    console.log(prop)
  }
}

const meuObjeto = {
  nome: 'João',
  idade: '20,'
  cidade: 'Salvador'
}

forInExemplo(meuObjeto)
// nome
// idade
// city

//for of ----------------------------------------
function logLetras(palavras) {
  for(letra of palavra) {
    console.log(letra)
  }
}

const palavra = 'abacaxi'

logLetras(palavra)
//a
//b
//a
//c
//a
//x
//i

function logNumeros(nums) {
  for(letra of nums) {
    console.log(num)
  }
}

const nums = [30, 20, 50, 40]

logNumeros(nums)
//30
//20
//50
//40

//WHILE-------------------------------------------------

function exemploWhile() {
  let num = 0

  while(num <= 5) {
    console.log(num)
    num++
  }
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5

//DO WHILE-------------------------------------------------
function exemploWhile() {
  let num = 0

  do {
    console.log(num)
    num++
  } while(num <= 5)
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5

//----------------------------------------------------
function exemploWhile() {
  let num = 6

  do {
    console.log(num)
    num++
  } while(num <= 5)
}

exemploWhile()
// 6