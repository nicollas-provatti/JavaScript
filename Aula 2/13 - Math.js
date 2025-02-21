// pow()
console.log(Math.pow(4, 2))
console.log(4 ** 2)

// sqrt()
console.log(Math.sqrt(16))
console.log(Math.pow(27, 1/3)) // Para calcular raiz de ordem superiores a 2

// min() e max()
let menor = Math.min(5, 4, 7, 3, 1, 0 -1)
let maior = Math.max(5, 4, 7, 3, 1, 0 -1)
console.log(menor)
console.log(maior)

// floor() e ceil(): arredondar
let numeroReal = 3.05
console.log(Math.floor(numeroReal))
console.log(Math.ceil(numeroReal))

// random(): retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))