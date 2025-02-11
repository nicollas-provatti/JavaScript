// Os tipos primitivos são imutáveis e armazenam valores diretamente na memória.

let idade = 25;
console.log(typeof(idade));

let nome = "Maria";
console.log(typeof(nome));

let aprovado = true;
console.log(typeof(aprovado));

let valor;
console.log(typeof(valor)); // undefined (valor padrão)

let semValor = null;
console.log(typeof(semValor)); // "object" (erro histórico)
console.log(semValor === null);

let numeroGigante = 9007199254740991n;
console.log(typeof(numeroGigante));
