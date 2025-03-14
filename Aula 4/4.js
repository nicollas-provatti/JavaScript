// map(): aplica uma função para elemento do array. Não altera o array original.
const numeros = [1, 4, 9, 16, 25]

const array1 = numeros.map(Math.sqrt)

console.log(numeros)
console.log(array1)

const array2 = numeros.map(vezes10)

function vezes10(num) {
    return num * 10
}

console.log(array2)

const array3 = numeros.map((value) => {
    if (value % 2 == 0) return value
})

console.log(array3) // sempre retorna a quantidade de elementos do array original


