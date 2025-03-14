// Diferença entre map() e forEach()

// 1. Valor de retorno
// forEach(): retorna undefined
// map(): retorna um novo array com o mesmo tamanho do original

const numeros = [1, 2, 3, 4, 5]

console.log(numeros.forEach(x => x * x))
console.log(numeros.map(x => x * x))
console.log(numeros)

// 2. Encadeamento de métodos
//console.log(numeros.forEach(x => x * x).concat([36, 49, 64])) // erro
console.log(numeros.map(x => x * x).concat([36, 49, 64]))

// 3. Mutabilidade
console.log(numeros.forEach((value, index) => { // método mutante.

}))

console.log(numeros.map((value, index) => { // método basea na imutabilidade

}))

/* Conclusão
A escolha entre map() e forEach() sempre dependerá do que você precisa em cada caso. Se você for modificar, substituir ou usar esses dados, você pode escolher o map(), pois ele retorna um novo array com os dados transformados.

Contudo, se você não precisa retornar um array, não utilize o map() - prefira usar o forEach() ou até mesmo um laço for.
*/