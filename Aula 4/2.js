// MÉTODOS

// Método de inserção e removção
// push(): insere no fim
const alunos =  ['Bia', 'Carlos', 'Ana', 'Maria']
alunos[4] = 'Marcos' 
alunos.push('Júlia')
alunos.push('Antônio', 'Clara')
alunos.push(['Lucas', 'Paulo']) // ?
let x = alunos.push('Luna') // retorna o novo comprimento do array
console.log(x)
console.log(alunos)

// pop(): remove do fim
alunos.pop()
let ultimo = alunos.pop() // retorna o elemento
console.log(ultimo)
console.log(alunos)

// shift(): remove do início
let primeiro  = alunos.shift() // retorna o elemento
console.log(primeiro)
console.log(alunos)

// unshift(): insere no início
alunos.unshift('Lisa') // retorna o novo comprimento do array
console.log(alunos)

// delete (não recomendado, pois deixa furos)
delete alunos[0]
console.log(alunos)

// Outros métodos
// sort(): ordena (altera o array original)
const numeros = [5, 6, 3, 1, -1, 0, 10, 31, 5]
console.log(numeros.sort())
console.log(numeros.sort((a, b) => a - b)) // crescente
console.log(numeros.sort((a, b) => b - a)) // decrescente
console.log(numeros)
 
// splice(): remove e adiciona elementos (altera o array)
// toSpliced(): (não altera o array)
const frutas = ['Banana', 'Laranja', 'Maça', 'Manga']
frutas.splice(4, 0, 'Limão', 'Kiwi') // inserindo
let removidos = frutas.splice(2, 2) // removendo
console.log(removidos)
frutas.splice(2, 2, 'Limão', 'Kiwi') // inserindo e removendo
console.log(frutas)


// slice(): retorna um array a partir de um indicie (não altera o array)
console.log(frutas.slice(1))
console.log(frutas.slice(1, 3))
console.log(frutas)


// concat(): unir arrays (não altera o array)
const arr1 = [1, 2]
const arr2 = [3, 4, 5]
const arr3 = [6, 7]

//const newArr = arr1.concat(arr2)
const newArr = arr1.concat(arr2, arr3)
console.log(newArr)