// 🔹 Definição de valores
let a = 10;
let b = 5;
let c = 2;

// 1. Adição (+)
let soma = a + b; 
console.log(soma);

// 2. Subtração (-)
let subtracao = a - b; 
console.log(subtracao);

// 3. Multiplicação (*)
let multiplicacao = a * b; 
console.log(multiplicacao);

// 4. Divisão (/)
let divisao = a / b; 
console.log(divisao);

// 5. Módulo (%) → Resto da divisão
let resto = a % b; 
console.log(resto);

// 6. Exponenciação (**)
let potencia = a ** c; 
console.log(potencia);

// 📌 ORDEM DAS OPERAÇÕES (Precedência) 📌
let resultado = a + b * c; 
console.log(resultado); 

/*  
    🔹 Ordem das operações segue a regra matemática (PEMDAS):
    1️⃣ Parênteses ()
    2️⃣ Exponenciação **
    3️⃣ Multiplicação * e Divisão /
    4️⃣ Adição + e Subtração -
*/

// Exemplo com parênteses para alterar a precedência
let resultadoCorrigido = (a + b) * c; 
console.log(resultadoCorrigido);
