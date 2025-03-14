// Formas de percorrer um array
// Esses métodos permitem que você faça um loop em estruturas de dados iteráveis, como arrays, strings, mapas, listas de nós e muito mais.

// for...of
const numeros = [10, 20, 30, 40, 50]
let soma = 0

for (let numero of numeros) {
    soma += numero
}
console.log(soma)

// for...in
for (let index in numeros) {
    console.log(numeros[index])
}

// forEach()
numeros.forEach(callback)

function callback(value, index, array) {
    console.log(value)
    console.log(`${index}: ${value}`)
    console.log(array)
}

numeros.forEach((value) => {
    if (value >= 30) {
        console.log(value)
    } 
})

// Outas estruturas iteráveis
let linguagem = "JavaScript"
let texto = ""

for (let letra of linguagem) {
    texto += letra
}

console.log(texto)