// 🔹 Definição de valores
let a = true;
let b = false;
let c = 10;
let d = 20;

// 1️⃣ Operador Lógico E (&&) → Retorna `true` se ambos os operandos forem `true`
console.log(true && true); // true
console.log(true && false); // false
console.log((c < d) && (c > 5)); // true (10 < 20 e 10 > 5)

// 2️⃣ Operador Lógico OU (||) → Retorna `true` se pelo menos um dos operandos for `true`
console.log(true || false); // true
console.log(false || false); // false
console.log((c > d) || (c === 10)); // true (10 == 10)

// 3️⃣ Operador Lógico NÃO (!) → Inverte o valor lógico
console.log(!true); // false
console.log(!false); // true
console.log(!(c < d)); // false (porque c < d é true)

// 4️⃣ Uso de operadores lógicos em expressões mais complexas
console.log((c < d) && (c > 5) || (a === b));

/* 
📌 RESUMO 📌
✔ `&&` (E): Retorna `true` se todas as condições forem verdadeiras.
✔ `||` (OU): Retorna `true` se pelo menos uma condição for verdadeira.
✔ `!` (NÃO): Inverte o valor lógico.

⚠ Ordem de precedência:
1️⃣ `!` (negação) é avaliado primeiro.
2️⃣ `&&` (E) vem depois.
3️⃣ `||` (OU) é avaliado por último.

🚀 Use parênteses para deixar a lógica clara! 
*/