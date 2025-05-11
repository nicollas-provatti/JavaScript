let num1 = 5, num2 = 2;
let soma, sub, mult, div, resto;

// Operadores aritméticos básicos
soma  = num1 + num2;         // Adição: 5 + 2 = 7
sub   = num1 - num2;         // Subtração: 5 - 2 = 3
mult  = num1 * num2;         // Multiplicação: 5 * 2 = 10
div   = num1 / num2; // Divisão inteira: 5 / 2 = 2 (truncado para inteiro)
resto = num1 % num2;         // Módulo (resto da divisão): 5 % 2 = 1

console.log("Soma:", soma);
console.log("Subtração:", sub);
console.log("Multiplicação:", mult);
console.log("Divisão inteira:", div);
console.log("Resto da divisão:", resto);

// Ordem de precedência dos operadores
let num3 = 4, num4 = 1;
let resultado;

// Exemplo 1: Multiplicação tem precedência sobre a adição.
resultado = num1 + num2 * num3; // 5 + (2 * 4) = 11
console.log("Resultado 1:", resultado);

// Exemplo 2: Parênteses alteram a ordem das operações.
resultado = (num1 + num2) * num3; // (5 + 2) * 4 = 28
console.log("Resultado 2:", resultado);

// Exemplo 3: Operações da esquerda para a direita com mesma precedência.
resultado = num1 * num2 / num4 + num3; // ((5 * 2) / 1) + 4 = 14
console.log("Resultado 3:", resultado);