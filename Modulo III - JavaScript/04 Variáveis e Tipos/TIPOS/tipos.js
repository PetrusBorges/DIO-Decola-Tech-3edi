/* Tipos em javascript

primitivos///////////escritos em camelCASE
-numbers = numeros
-strings = letras ou todo caracter colocando entre '' ``
-boolean = valores em true of false
-null = nula
-undefined = indefinido

não primitivos///////////escritos em SNAKE_UPPER_CASE
-objects
-arrays
*/

//STRINGS ---------------------------------------------

const DIO = 'Digital Innovation One'

let firstName = 'Petrus'
let secondName = 'João'

let fullName = `Nome completo: ${firstName} ${secondName}`

console.log(fullName)

//NUMBER ---------------------------------------------

let num = 1

console.log(num + 9)
console.log(num)

//BOOLEANS ---------------------------------------------
//or true or false

let validation = 5 === 3

console.log(validation)

let validation1 = 5 === 5

console.log(!validation1)

//ARRAYS ---------------------------------------------
/*['0', '1', '2', '3', '4', '5'] - INDICES
ARRAY.LENGTH IS 6
'1' = INDEX 1
*/

let array = [5]

array.push(4) //coloca um elemento
array.push(7)
array.push(2)
array.push(56)
array.pop() //retira um elemento do final
array.shift() //retira um elemento do inicio
array.unshift(99)
console.log(array)

//OBJETOS ---------------------------------------------

let person = {
  name: 'Jhon',
  age: 54
}

console.log(person)

//EMPTY, NULL E UNDEFINED ---------------------------------------------
//empty
let name = 0
let maca = ''
let nameArray = ['']
let nameObject = {}

console.log(maca)

//null
let boca = null

console.log(boca)

//UNDEFINED

let abacaxi

console.log(abacaxi)
