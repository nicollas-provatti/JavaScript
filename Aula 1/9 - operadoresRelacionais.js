// 🔹 Definição de valores
let a = 10;
let b = 5;
let c = "10";

// 1️⃣ Maior que (>)
console.log(a > b); // true (10 é maior que 5)

// 2️⃣ Menor que (<)
console.log(a < b); // false (10 não é menor que 5)

// 3️⃣ Maior ou igual (>=)
console.log(a >= b); // true (10 é maior que 5)

// 4️⃣ Menor ou igual (<=)
console.log(a <= b); // false (10 não é menor ou igual a 5)

// 5️⃣ Igualdade solta (==) → Compara só o valor
console.log(a == c); // true (10 é igual a "10", pois converte o tipo)

// 6️⃣ Igualdade estrita (===) → Compara valor e tipo
console.log(a === c); // false (10 é número, "10" é string)

// 7️⃣ Diferente (!=) → Compara só o valor
console.log(a != c); // false (10 não é diferente de "10" após conversão)

// 8️⃣ Diferente estrito (!==) → Compara valor e tipo
console.log(a !== c); // true (10 é número, "10" é string, então são diferentes)

/* 
📌 RESUMO 📌
✔ `>` e `<` verificam se um valor é maior ou menor que o outro.
✔ `>=` e `<=` verificam se um valor é maior/menor ou igual.
✔ `==` compara apenas valores, ignorando tipos.
✔ `===` compara valores e tipos.
✔ `!=` verifica se os valores são diferentes, ignorando tipos.
✔ `!==` verifica se os valores são diferentes, considerando tipos.

⚠ Dica: Sempre prefira `===` e `!==` para evitar conversões implícitas! 🚀
*/