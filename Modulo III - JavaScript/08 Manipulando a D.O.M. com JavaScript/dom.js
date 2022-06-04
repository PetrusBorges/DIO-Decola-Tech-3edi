//DOM MODIFICA ELEMENTOS DO HTML
//BOM É TUDO QUE ESTA DENTRO DA WINDOW NO NAVEGADOR - document - history - location - screen - navigator

//MANIPULANDO O DOM ------------------------------
//USANDO TAG - ID - CLASS DO HTML
document.getElementById('titulo')
document.getElementsByTagName('li')
document.getElementsByClassName('titulo')

//USANDO TAG COM MAIS DE UMA CLASS DO HTML
document.querySelectorAll('.primeira-classe .segunda-classe')
document.querySelectorAll('li .segunda-classe')

//ADICIONANDO E DELETANDO ELEMENTOS
document.createElement(element) //cria um novo elemento html
document.removeChild(element) //remove um elemento
document.appendChild(element) //adiciona um elemento
document.replaceChild(elementonovo, elementovelho) //substitui um elemento

//TRABALHANDO COM ESTILOS ------------------------------

/*<div id='meu-elemento' class='classe'>
resto do codigo
</div>*/

const meuElemento = document.getElementById('meu-elemento')

meuElemento.classList.add('novo-estilo')
//adiciona a classe 'meu estilo'

meuElemento.classList.remove('classe')
//remove a classe 'classe'

meuElemento.classList.toggle('dark-mode')
//adiciona a classe 'dark-mode' caso ela nao faça parte da lista e remove ela caso faça parte

/*<div id='meu-elemento' class='novo-estilo dark-mode'>
resto do codigo
</div>*/

//TRABALHANDO COM ESTILOS NO CSS ------------------------------

document.getElementsByTagName('p').style.color = 'blue'

//EVENTOS ------------------------------
//EVENTOS DE MOUSE - mouseover / mouseout
//EVENTOS - click / dbclick
//EVENTOS DE ATUALIZAÇÃO - change / load

//EVENT LISTENAR - Cria um evento que acontece quando o usuário faz uma ação
const botao = document.getElementById('meuBotao')

botao.addEventListener('click', outraFuncao)
