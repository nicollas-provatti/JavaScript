// 🚀 Operador Ternário (? :) 🚀

// 🔹 Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso;

let idade = 18;

// Se idade for maior ou igual a 18, retorna "Maior de idade", senão "Menor de idade"
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(`Idade: ${idade} → ${status}`);

// 🔹 Comparação com if-else tradicional
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 📌 Exemplo 2: Verificação de número par ou ímpar
let numero = 7;
let resultado = numero % 2 === 0 ? "Par" : "Ímpar";

console.log(`Número: ${numero} → ${resultado}`);

// 🔹 Ternário aninhado: Classificação por idade
let idadePessoa = 10;
let categoria = idadePessoa < 12 ? "Criança" : idadePessoa < 18 ? "Adolescente" : "Adulto";

console.log(`Idade: ${idadePessoa} → Categoria: ${categoria}`);

/*
📌 RESUMO 📌
✔ O operador ternário é uma forma curta de escrever um if-else.
✔ Útil para expressões curtas e diretas.
✔ Pode ser aninhado, mas cuidado para não comprometer a legibilidade.
*/
