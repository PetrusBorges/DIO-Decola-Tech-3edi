const alunos = [
  {
    nome: 'joao',
    nota: 5,
    turma: '18'
  },
  {
    nome: 'sofia',
    nota: 9,
    turma: '18'
  },
  {
    nome: 'paulo',
    nota: 6,
    turma: '20'
  },
  {
    nome: 'miguel',
    nota: 3,
    turma: '20'
  }
]

function alunosAprovados(arr, media) {
  let aprovados = []

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i]

    if (arr[i].nota >= media) {
      aprovados.push(arr[i].nome)
    }
  }

  return aprovados
}

console.log(alunosAprovados(alunos, 5))

//------------------------------------------------

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Maria',
  idade: 30
}

const pessoa2 = {
  nome: 'carla',
  idade: 26
}

const animal = {
  nome: 'fiona',
  idade: 5,
  raca: 'pug'
}

console.log(calculaIdade.call(pessoa2, 30))

console.log(calculaIdade.apply(pessoa2, [30]))
