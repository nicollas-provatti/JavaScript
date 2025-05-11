// Operadores de Incremento e Decremento
let numero = 5;

// Incremento: adiciona 1 ao valor da variável
console.log("Valor inicial de numero:", numero);
numero++; // Incremento 
console.log("Após incremento (numero++):", numero);

// Decremento: subtrai 1 do valor da variável
numero--; // Decremento 
console.log("Após decremento (numero--):", numero);

// Pós-fixado
console.log(numero++); // Saída: 5 (exibe primeiro, depois incrementa)
console.log(numero);   // Saída: 6

// Pré-fixado
console.log(++numero); // Saída: 7 (incrementa antes de exibir)
console.log(numero);   // Saída: 7
