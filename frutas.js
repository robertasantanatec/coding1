let frutas = ["maça","banana","kiwi"]
console.log(frutas[3-1]);
let consulta = frutas.indexOf("kiwi")
console.log(consulta)
frutas.pop();
frutas.push('melão')
frutas.unshift('limão')
console.log(frutas)
let inserir = prompt("Digite o nome da fruta: ")
frutas.push(inserir)
console.log(frutas)
