//tipos primitivos---------------------------

//boolean
var vouf = false
console.log(vouf)

//number
var numeroQualquer = 1
console.log(numeroQualquer)

//string
var nome = 'petrus'
console.log(nome)

//function
var funcao = function () {}
console.log(`${typeof funcao}`)

//declarando valor---------------------------

var variavel = 'petrus'
variavel = 'oi'
console.log(variavel)

let variavel2 = 'oba'
variavel2 = 'oi'
console.log(variavel2)

const constante = 'petrus'
console.log(constante)

//escopo global / local ---------------------------

//global
var escopoGlobal = 'global'
console.log(escopoGlobal)

//local
function escopoLocal() {
  let escopoLocalInterno = 'local'
  console.log(escopoLocalInterno)
}

escopoLocal()

//atribuição/comparação/comparação identica---------------------------

//atribuição
var nome = 'petrus'
console.log(nome)

//comparação
var comparação = '0' == 0
console.log(comparação)

//comparação identica
var comparacao = '0' === 0
console.log(comparacao)

//operadores aritmeticos---------------------------

//adição
var adicao = 1 + 1
console.log(adicao)

//subtração
var subtracao = 1 - 1
console.log(subtracao)

//multiplicação
var multiplicacao = 3 * 5
console.log(multiplicacao)

//divisão
var divisao = 6 / 3
console.log(divisao)

//divisão inteira
var divisaoInteira = 5 % 4
console.log(divisaoInteira)

//potenciação
var potenciacao = 2 ** 10
console.log(potenciacao)

//operadores relacionados---------------------------

//maior que
var maiorQue = 5 > 2
console.log(maiorQue)

//menor que
var menorQue = 5 < 2
console.log(menorQue)

//maior ou igual
var maiorOuIgual = 5 >= 2
console.log(maiorOuIgual)

//menor ou igual
var menorOuIgual = 5 <= 2
console.log(menorOuIgual)

//operadores lógicos---------------------------

//&& e considera que todos sejam true
//|| e considera que qualquer sejam true
//! inverte o valor de true para false

var e = true && false
console.log(e)

var ou = false || true
console.log(ou)

var nao = !true
console.log(nao)
