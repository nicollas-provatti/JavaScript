// toString(): Número -> String
let numero = 15
let texto = numero.toString()
console.log(texto)
console.log(texto + 10)

// Number(): Converte para número ou NaN
let entradaTexto = "568"
let entradaNumero = Number(entradaTexto)
console.log(entradaNumero)
console.log(entradaNumero + 10)

entradaTexto = "Marcos"
entradaNumero = Number(entradaTexto)
console.log(entradaNumero)

// toFixex(): Casas decimais (retorna uma string)
let imc = 23.3434212
console.log(imc)
console.log(imc.toFixed(2))
console.log(imc.toFixed(2) + 10)

// isInteger(): Verifica se é inteiro
console.log(Number.isInteger(184))
console.log(Number.isInteger(-184))
console.log(Number.isInteger(1.84))
console.log(Number.isInteger('184'))

// isReal(): isFinite() && !isInterger()
let real = 3.14159
let isReal = Number.isFinite(real) && !Number.isInteger(real)
console.log("Real: " + isReal)

// parseInt()
console.log(parseInt(3.1415))
console.log(parseInt('3.1415'))
console.log(parseInt('Olá, mundo'))

// parseFloat()
console.log(parseFloat('10.33'))
