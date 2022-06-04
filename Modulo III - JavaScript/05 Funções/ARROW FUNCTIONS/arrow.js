//SINTAXE DE ARROW
//forma sem arrow
const helloWorld = function () {
  return 'Hello World'
}

//forma com arrow
const helloWorld = () => {
  return 'Hello World'
}

//forma arrow em uma linha
const helloWorld = () => 'Hello World'

console.log(helloWorld)

//-------------------------------

const soma = (a, b) => a + b

soma(4, 6)

//-------------------------------

const soma = a => a

soma(4)

//-------------------------------

soma(2, 4)

function soma(a, b) {
  return a + b
}
