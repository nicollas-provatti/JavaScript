console.log('oi')
console.log('oi')
console.log('oi')
console.log('oi')
// Ao invés de declarar várias sentenças podemos declarar apenas uma e colocar dentro de uma estrutura de repetição

for (let i = 0; i < 5; i++) {
    console.log(`oi`)
    console.log(`${i}: oi`)
}
// O i é a variável de controle, pois controla a quantidade de repetição do laço. Sempre que a condição (i < 5) for verdadeira o laço será executado. Por fim, a variável de controle é incrementada e a condição é verificada mais uma vez. O laço só termina quando a condição (i < 5) for falsa.

for (let i = 0; i < 5; i++) { // Executar no navegador
    let numero = prompt('Digite um número')
}

// Exemplo (Executar no navegador):
let qtdNumeros, qtdPares = 0, qtdImpares = 0, soma = 0

qtdNumeros = Number(prompt('Quantos números você vai informar ?'))

for (let i = 0; i < qtdNumeros; i++) {
    let numero = Number(prompt('Digite um número'))

    if (numero % 2 == 0) {
        qtdPares++
    } else {
        qtdImpares++
    }

    soma += numero
}

alert(`Números pares: ${qtdPares}
Números ímpares: ${qtdImpares}
A soma dos números foi ${soma}`)

