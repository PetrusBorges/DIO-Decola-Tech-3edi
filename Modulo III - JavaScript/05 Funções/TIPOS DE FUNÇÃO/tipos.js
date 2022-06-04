//função

function nome(parametros) {
  //instruções
  return //ele para a função e retorna o valor de dentro dela
}

//função anônima
/*const soma = function (a, b) {
  return a + b
}

soma(1, 2)
soma(1, 2)
*/

//função autoinvocável
;(function () {
  let name = 'Casa'
  return name
})()

//callbacks
const calc = function (operacao, num1, num2) {
  return operacao(num1, num2)
}

const soma = function (num1, num2) {
  return num1 + num2
}

const sub = function (num1, num2) {
  return num1 - num2
}

const resultSoma = calc(soma, 1, 2)
const resultSub = calc(soma, 1, 2)

console.log(resultSub)
console.log(resultSoma)
