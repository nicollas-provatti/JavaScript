function inicio() {
    let num1 = 5, num2 = 10;
    let resultado; // Variável para armazenar o resultado das comparações

    // Igualdade
    resultado = num1 == num2; // Verifica se num1 é igual a num2
    console.log(`${num1} == ${num2}: ${resultado}`); // Saída: false

    // Diferença
    resultado = num1 != num2; // Verifica se num1 é diferente de num2
    console.log(`${num1} != ${num2}: ${resultado}`); // Saída: true

    // Maior que
    resultado = num1 > num2; // Verifica se num1 é maior que num2
    console.log(`${num1} > ${num2}: ${resultado}`); // Saída: false

    // Maior ou igual
    resultado = num1 >= num2; // Verifica se num1 é maior ou igual a num2
    console.log(`${num1} >= ${num2}: ${resultado}`); // Saída: false

    // Menor que
    resultado = num1 < num2; // Verifica se num1 é menor que num2
    console.log(`${num1} < ${num2}: ${resultado}`); // Saída: true

    // Menor ou igual
    resultado = num1 <= num2; // Verifica se num1 é menor ou igual a num2
    console.log(`${num1} <= ${num2}: ${resultado}`); // Saída: true

    console.log(""); // Linha em branco para separar

    // Exemplo prático de comparação
    let idadeMinima = 18;
    let idadeUsuario = 20;
    let podeEntrar = idadeUsuario >= idadeMinima; // Verifica se o usuário pode entrar

    console.log(`Idade do usuário: ${idadeUsuario}`);
    console.log(`Idade mínima exigida: ${idadeMinima}`);
    console.log(`O usuário pode entrar? ${podeEntrar}`);
}

inicio();
