// Uma função anônima é uma função que não possui um nome associado a si mesma. Em JavaScript, essas funções são frequentemente usadas como argumentos para outras funções ou armazenadas em variáveis.

// Armazenando uma função em uma variável
const saudacao = function(nome) {
    return `Olá, ${nome}!`
}

console.log(saudacao("João"))

// Passando uma função como argumento
function calcular(a, b, operacao) {
    return operacao(a, b)
}

const soma = function(a, b) {
    return a + b
}

console.log(calcular(2, 3, soma))
console.log(calcular(2, 3, function(a, b) { return a - b} ))

