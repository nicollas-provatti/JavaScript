let i = 0

while (i < 5) {
    console.log(i)
    i++
}

// Exemplo (quando são sabemos a quantidade de repetição):
let soma = 0

while (true) {
    let numero = Number(prompt("Digite um número"))

    if (numero === 0) {
        console.log('Saindo do laço')
        break
    }

    soma += numero
}

console.log(`A soma foi ${soma}`)