//Estruturas de descisão---------------------------------

var jogador1 = 0
var jogador2 = 0
var placar

//ninho de if
if ((jogador1 = 0)) {
  if (jogador1 > 0) {
    console.log('jogador1 marcou um')
  } else if (jogador2 > 0) {
    console.log('jogador 2 marcou um')
  } else {
    console.log('ninguem marcou ponto')
  }
}

//if ternário
jogador1 != 0 && jogador2 != 0
  ? console.log('jogadores válidos')
  : console.log('jogadores nao válidos')

//usando if
if (jogador1 > 0 && jogador2 == 0) {
  console.log('jogador 1 fez ponto')
  placar = jogador1 > jogador2
} else if (jogador2 > 0 && jogador1 == 0) {
  console.log('jogador 2 fez ponto')
  placar = jogador2 > jogador1
} else {
  console.log('ninguém fez ponto')
}

//switch case
switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log('jogador 1 ganhou')
    break

  case (placar = jogador2 > jogador1):
    console.log('jogador 2 ganhou')
    break

  default:
    console.log('ninguem ganhou')
}

//Estruturas de repetição---------------------------------

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {
  propriedade1: 'valor1',
  propriedade2: 'valor2',
  propriedade3: 'valor3'
}

//for - executa instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
  console.log(indice)
}

//for/in - executa retepetição a partir de uma propriedade
//array
for (let i in array) {
  console.log(i)
}

//object
for (i in object) {
  console.log(i)
}

//for/of - executa rtepetição a partir de um valor
//array
for (i of array) {
  console.log(i)
}

//object
for (i of object.propriedade1) {
  console.log(i)
}

//while - executa função "enquanto" determinada condição seja true
var a = 0

while (a < 10) {
  a++
  console.log(a)
}

//do/while - executa função "até que" o valor de var seja false
var a = 0

do {
  a++
  console.log(a)
} while (a < 50)
