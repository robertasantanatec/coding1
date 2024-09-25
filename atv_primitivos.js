nome = "Roberta"
idade = 23 
cidade = "Recife"
console.log(`Olá meu nome é ${nome} minha idade é ${idade}, minha cidade é ${cidade}`)

num1 = 8
num2 = 10
soma = num1 + num2
sub = num1 - num2
mult = num1 * num2
div = num1 / num2
console.log(`A soma é ${soma}
a subtração é ${sub}
a multiplicação é ${mult}
a divisão é ${div}`)

base = 10
altura = 2
area = (base * altura)/2
console.log(`a area do triangulo é ${area}`)

n1 = 8
n2 = 10
n3 = 8
media = (n1 + n2 + n3)/3
console.log(`a média é ${media.toFixed(2)}`)
if (media>=7){
    console.log("O aluno está aprovado")
}
else {
    console.log("O aluno está reprovado")
}

valor = 100
desconto = 50
calculo_desconto = (valor*desconto)/100
valor_novo = valor-calculo_desconto
console.log(`O desconto é de ${valor_novo}. valor original: ${valor}`)

reais = 100
dolar = 5.53
conversao = reais/dolar
console.log(`O total de reais, convertido é ${conversao.toFixed(2)}`)

celsius = 100
conv = (celsius * 9/5) +32
console.log(`A temperatura em Farenheit é ${conv}`)

peso = 50
altura = 1.60
imc = peso/(altura + altura)
console.log(`O IMC deste paciente é ${imc.toFixed(2)}`)

salario_bruto = 2500
rrpf = salario_bruto * 0.075
salario_liquido = salario_bruto - rrpf + 169.75
console.log(`seu salário liquido é de ${salario_liquido} reais e o salário bruto é de ${salario_bruto}`)

console.log("testando github pelo vscode")