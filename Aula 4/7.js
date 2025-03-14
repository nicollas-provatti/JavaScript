// reduce(): executa uma função redutora para o elemento da matriz. E retorna um único valor: o resultado acumulado da função. Não altera o array original.

const notas = [7.5, 6.5, 8.5, 5.5]

let somaNotas = notas.reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(somaNotas)

let media = somaNotas / notas.length

console.log(media)