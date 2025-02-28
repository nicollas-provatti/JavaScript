// Um novo recurso que foi adicionado do EJ6 (ECMAScript 6, de 2015) foi o parâmetro padrão, que permite definir um valor padrão para um parâmetro. Porém, é possível fazer isso sem usar o recurso introduzido no EJ6

// Antes do EJ6
// Usando o operador ||
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(2, 3, 4))
console.log(soma1(2, 3)) 
console.log(soma1(2, 3))
console.log(soma1(0, 0, 0)) // bug

// Estratégias 2, 3 e 4 para gerar um valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(2, 3, 4))
console.log(soma2(2, 3))
console.log(soma2(0, 0, 0)) // resolvido

// Depois do EJ6: Exemplo para valores númericos
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(2, 3, 4))
console.log(soma3(2, 3))
console.log(soma3(0, 0, 0))