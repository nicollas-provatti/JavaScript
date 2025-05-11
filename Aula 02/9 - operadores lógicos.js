let a = true;
let b = false;

// Operadores Lógicos

// Operador "E" (&&): verdadeiro somente se ambos forem true
let E = a && b;
console.log("Operador E (a && b):", E); // Saída: false

// Operador "OU" (||): verdadeiro se pelo menos um for true
let OU = a || b;
console.log("Operador OU (a || b):", OU); // Saída: true

// Operador "NÃO" (!): inverte o valor lógico
let NAO_A = !a;
let NAO_B = !b;
console.log("Operador NÃO (!a):", NAO_A); // Saída: false
console.log("Operador NÃO (!b):", NAO_B); // Saída: true

// Exemplo Prático: Verificar acesso a um sistema
let idade = 20;
let temPermissao = true;
let acessoLiberado = idade >= 18 && temPermissao;

console.log("\nExemplo Prático:");
console.log("Idade:", idade);
console.log("Tem permissão?", temPermissao);
console.log("Acesso liberado?", acessoLiberado); // Saída: true

// Operador combinado
let resultadoCombinado = (a && !b) || (b && !a);
console.log("\nResultado Combinado ((a && !b) || (b && !a)):", resultadoCombinado); // Saída: true

// Cenário: Verificar se uma pessoa pode votar
let idadeEleitor = 16;
let tituloEleitor = false;
let podeVotar = idadeEleitor >= 16 && tituloEleitor;

console.log("\nCenário Prático:");
console.log("Idade do eleitor:", idadeEleitor);
console.log("Possui título de eleitor?", tituloEleitor);
console.log("Pode votar?", podeVotar); // Saída: false