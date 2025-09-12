let valor = 0
let pratos = ""
for (let i=1;i<=3;i++){

let restalrante = Number (prompt(`
=======escolha seu prato${i}=======
1:hamburguer $20
2:pizza $30
3:refrigerante $5
4:batata frita $12

5:sair do programa
ESCOLHA APENAS 3 PRATOS!!!
  `))

switch(restalrante){
case 1:
alert("voce escolheu amburguer $20")
valor += 20
pratos += "amburguer, "
break

case 2:
alert ("voce escolheu pizza $30")
valor +=30
pratos += "pizza, "
break

case 3:
alert ("voce escolheu refrigerante $5")
valor += 5
pratos += "refrigerante, "
break

case 4:
alert ("voce escolheu batata frita $12")
valor += 12
pratos += "batata frita, "
break

case 5:
alert("fim do programa")
i=3
break

default:
alert("escolha invalida")
i--
break
}}

let estudante = prompt("voce e estudante sim/nao")
let desconto = 0

if(estudante === "sim"){
desconto += 10
}

if(valor >50){
desconto += 5
}

let valorFinal = valor - (valor * desconto / 100)

alert(`pratos escolhidos: ${pratos}

valor que vai ter que pagar:$${valor}
Desconto aplicado: ${desconto}%
Valor final: $${valorFinal}`)
    
    
