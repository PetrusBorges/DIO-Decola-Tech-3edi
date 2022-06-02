function calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação(**)'
    )
  )

  if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida!')
    calculadora()
  } else {
    let n1 = Number(prompt('Insira o primeiro valor'))
    let n2 = Number(prompt('Insira o segundo valor'))
    let resultado

    if (!n1 || !n2) {
      alert('Erro - parâmetros inválidos!')
      calculadora()
    } else {
      function soma() {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperação()
      }
      function subtração() {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperação()
      }
      function multiplicação() {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperação()
      }
      function divisaoReal() {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperação()
      }
      function divisaoInteira() {
        resultado = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperação()
      }
      function potenciação() {
        resultado = n1 ** n2
        alert(`${n1} elevado à ${n2}ª potência é ${resultado}`)
        novaOperação()
      }

      function novaOperação() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')

        if (opcao == 1) {
          calculadora()
        } else if (opcao == 2) {
          alert('Até mais')
        } else {
          alert('Digite uma opção válida')
          novaOperação()
        }
      }
    }

    /*if (operacao == 1) {
      soma()
    } else if (operacao == 2) {
      subtração()
    } else if (operacao == 3) {
      multiplicação()
    } else if (operacao == 4) {
      divisaoReal()
    } else if (operacao == 5) {
      divisaoInteira()
    } else if (operacao == 6) {
      potenciação()
    }*/

    switch (operacao) {
      case 1:
        soma()
        break
      case 2:
        subtração()
        break
      case 3:
        multiplicação()
        break
      case 4:
        divisaoInteira()
        break
      case 5:
        divisaoReal()
        break
      case 6:
        potenciação()
        break
    }
  }
}

calculadora()
