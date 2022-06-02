//APROFUNDAMENTO EM FUNÇÕES--------------------------------------------------

//FUNÇÕES DECLARATIVAS
function funcao() {
  console.log('Minha funcao declarativa')
}

funcao()

//EXPRESSÕES DE FUNÇÕES---------------------------------

//COM NOMEAÇÃO
var nomefuncao = function nomefuncao() {
  console.log('nomefuncao')
}

nomefuncao()

//SEM NOMEAÇÃO
var nomefuncao1 = function () {
  console.log('nomefuncao1')
}

nomefuncao1()

//ARROW FUNCTION---------------------------------
var funcao = () => {
  console.log('sou uma arrow funcao')
}

funcao()

//FUNÇÕES ARITMÉTRICAS---------------------------------

//Number() - para converter valores em numeros
//Prompt() - para registrar entradas de usuários
//Alert() - para mostrar mensagem ao usuário
//Template Strings - para usar strings junto com expressões
