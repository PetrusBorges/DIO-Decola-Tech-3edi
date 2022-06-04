//THIS
//É uma referencia ao objeto da função
const pessoa = {
  firstName: 'André',
  lastName: 'Soares',
  id: 1,
  fullName: function() {
    return this.firstName + "" + this.lastName
  }
  getId: function() {
    return this.id
  }
}

pessoa.fullName()
//"André Soares"

pessoa.getId()
//1

//Fora da função é um objeto vazio
console.log(this)

//dentro de uma função
(function () {
  console.log(this)
})()

//dentro de um objeto
console pessoa = {
  firstName: 'Diego',
  lastName: 'Vieira',
  getFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`)
  }
}

pessoa.getFullName()

//MANIPULANDO THIS ----------------------------------------
//CALL
const pessoa = {
  nome: 'Miguel'
}

const animal = {
  nome: 'Murphy'
}

function getSomething() {
  console.log(this.nome)
}

getSomething.call(pessoa)
//----------------------
const myObj = {
  num1: 2
  num2: 4
}

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, 1, 5) // 12

//APPLY----------------------------------------
const pessoa = {
  nome: 'Miguel'
}

const animal = {
  nome: 'Murphy'
}

function getSomething() {
  console.log(this.nome)
}

getSomething.apply(pessoa)
//----------------------
const myObj = {
  num1: 2
  num2: 4
}

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b)
}

soma.apply(myObj, [1, 5]) // 12
//BIND----------------------------------------
//clona a estrutura da função onde é chamada e aplica no objeto passado como parametro
const retornaNomes = function () {
  return this.nome
}

let bruno = retornaNomes.bind({ nome: 'Bruno' })

bruno()