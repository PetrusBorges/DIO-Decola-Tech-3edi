// ARRAY---------------------------------
let array = ['petrus', 'ana']
console.log(array)

let array2 = ['petrus', 'joao', 'lucas']
console.log(array2[2])

//MANIPULANDO ARRAY-------------------------

//forEach() - itera um array
array.forEach(function (item, index) {
  console.log(item, index)
})

//push() - add item no final do array
array.push('novo item')
console.log(array)

//pop() - remoce item no final do array
array.pop()
console.log(array)

//shift() - remove item no inicio do array
array.shift()
console.log(array)

//unshift() - add item no inicio do array
array.unshift('novo item no inicio')
console.log(array)

//indexOf() - retorna o indice de um valor
console.log(array.indexOf['ana'])

//splice() - remoce ou substitui um item pel indice
array.splice(0, 1)
console.log(array)

//slice() - retorna uma parte de um array existente
let novoArray = array.slice(0, 1)
console.log(novoArray)

//OBJETOS/MANIPULANDO-------------------------

//objetos
let object = {
  propriedade1: 'valor1',
  propriedade2: 'valor2'
}

console.log(object)

//manipulando
let string = object.propriedade1

console.log(string)

//manipulando com {}
let { propriedade1, propriedade2 } = object

console.log(propriedade1, propriedade2)
