//manipulando parametros-----------------------------
function exponencial(array, num = 1) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** num)
  }

  return result
}

{
  ;[1, 2, 3, 4]
}
{
  ;[1, 2, 3, 4], 4
}

//objeto argumentos----------------------------------------
function findMax() {
  let max = -Infinity

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }

  return max
}

//ARRAYS-----------------------------
//spread = lida com os elementos de forma diferente
function SubmitEvent(x, y, z) {
  return x + y + z
}

const numbers = [1, 2, 3]

console.log(sum(...numbers))

//rest = combinar argumentos em um array
function confereTamanho(...args) {
  console.log(args.length)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(3, 4, 5)

//OBJETOS-----------------------------
//OBJECT DESTRUCTURING

const user = {
  id: 42,
  displayName: 'Jose',
  fullName: {
    fristName: 'João',
    lastName: 'Doe'
  }
}

function userIde({ id }) {
  return id
}

function getFullName({ FullName: { fristName: first, lastName: last } }) {
  return `${first} ${last}`
}

userIde(user)

getFullName(user)
