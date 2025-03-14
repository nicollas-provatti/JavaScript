// filter(): cria uma nova matriz preenchida com elementos que passam em um teste fornecido por uma função. Não altera o array original.

const idades = [12, 33, 16, 40, 25, 60]

const maioresDeIdade = idades.filter(maiorIdade)

function maiorIdade(idade) {
    return idade >= 18
}

console.log(maioresDeIdade)

// Encadeando

const numeros = [1, 2, 3, 4, 5]
console.log(numeros.filter(value => value >= 3).map(value => value * value))

//numeros.filter(value => value >= 3) retorna: [ 3, 4, 5 ]
// [ 3, 4, 5 ].map(value => value * value) retorna: [ 9, 16, 25 ]