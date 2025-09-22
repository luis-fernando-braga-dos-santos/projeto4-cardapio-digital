//pedindo o nome e criando variaveis
let nome = prompt("pedimos seu nome por favor")

let prato1 = ""
let valor1 = 0

let prato2 = ""
let valor2 = 0

let prato3 = ""
let valor3 = 0

let valor5 = false

let pedido1 = prompt(`
=======cardapio=======
(1)hamburguer: 20$
(2)pizza: 35$
(3)refrigerante: 5
(4)batata frita: 12
  
escolha ate tres pratos
(5)sair do progrma
  `)

//criando os switch das opções de 1 a 5
//pedido 1

switch(pedido1){
case "1":
prato1 += "hamburguer: $20"
valor1 += 20
alert("voce escolheu um hamburguer que custa: $20")
break

case "2":
prato1 += "pizza: $35"
valor1 +=35
alert("voce escolheu uma pizza que custa: $35")
break

case "3":
prato1 += "refrigerante: $5"
valor1 += 5
alert("voce escolheu um refrigerante que custa: $5")
break

case "4":
prato1 += "batata frita: $12"
valor1 += 12
alert("voce escolheu uma porcao de batata frita que custa: $12")
break

case "5":
valor5 = true
alert("voce saiu do programa, muito obrigado volte sempre")

default:
alert("esse nao e o item do cardapio por favor escolha novamente")
break
}

//pedido 2

let pedido2 = prompt(`
=======cardapio=======
(1)hamburguer: 20$
(2)pizza: 35$
(3)refrigerante: 5
(4)batata frita: 12
  
escolha ate tres pratos
(5)sair do progrma
  `)

switch(pedido2){
case "1":
prato2 += "hamburguer: $20"
valor2 += 20
alert("voce escolheu um hamburguer que custa: $20")
break

case "2":
prato2 += "pizza: $35"
valor2 +=35
alert("voce escolheu uma pizza que custa: $35")
break

case "3":
prato2 += "refrigerante: $5"
valor2 += 5
alert("voce escolheu um refrigerante que custa: $5")
break

case "4":
prato2 += "batata frita: $12"
valor2 += 12
alert("voce escolheu uma porcao de batata frita que custa: $12")
break

case "5":
valor5 = true
alert("voce saiu do programa, muito obrigado volte sempre")

default:
alert("esse nao e o item do cardapio por favor escolha novamente")
break
}

//escolha 3

let pedido3 = prompt(`
=======cardapio=======
(1)hamburguer: 20$
(2)pizza: 35$
(3)refrigerante: 5
(4)batata frita: 12
  
escolha ate tres pratos
(5)sair do progrma
  `)

switch(pedido3){
case "1":
prato3 += "hamburguer: $20"
valor3 += 20
alert("voce escolheu um hamburguer que custa: $20")
break

case "2":
prato3 += "pizza: $35"
valor3 +=35
alert("voce escolheu uma pizza que custa: $35")
break

case "3":
prato3 += "refrigerante: $5"
valor3 += 5
alert("voce escolheu um refrigerante que custa: $5")
break

case "4":
prato3 += "batata frita: $12"
valor3 += 12
alert("voce escolheu uma porcao de batata frita que custa: $12")
break

case "5":
valor5 = true
alert("voce saiu do programa, muito obrigado volte sempre")

default:
alert("esse nao e o item do cardapio por favor escolha novamente")
break
}

//desconto para quem pagar mais de 50$

let valorfinal = valor1 + valor2 + valor3
let desconto1 = 0
let desconto2 = 0

if(valorfinal > 50){
 desconto1 = 5
}

//pergunta se voce e aluno

let aluno = ""
let escola = prompt("voce e estudante: (sim/nao)")

switch(escola){
case "sim":
aluno = "sim"
break

case "nao":
aluno = "nao"

default:
aluno = "nao"
break
}

//se voce for aluno

if(aluno === "sim"){
desconto2 = 10 
}

//criando os desconos

let descontofinal = valorfinal * desconto1 / 100

let ultimoDesconto = valorfinal * desconto2 / 100

alert("muito obrigado aqui esta os seus pedidos e o que voces teram que pagar")

//o que foi pedido

let saida  = (`
=======seus pedidos=======
obrigado ${nome}!
estudante = ${aluno}

pratos escolhidos
 (1)${prato1}
 (2)${prato2}
 (3)${prato3}
  
valor total: ${valorfinal}
desconto acima de $50: - $${descontofinal}
desconto para estudante: - $${ultimoDesconto}
  `)

alert(saida)












