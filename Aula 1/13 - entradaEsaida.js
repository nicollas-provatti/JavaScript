// 🚀 SAÍDA DE DADOS 🚀

// Exibe uma caixa de alerta com uma mensagem
alert("Eiii!"); 

// Mostra uma mensagem no console do navegador (usado para depuração)
console.log("Olá!");

// Escreve diretamente no corpo da página HTML
document.write("<h1>Seja Bem-Vindo(a)</h1>");

// Modifica o conteúdo de um elemento HTML com id="texto"
document.getElementById("texto").innerHTML = "Meu novo parágrafo";


/* 🚀 ENTRADA DE DADOS 🚀 */

// Exibe uma caixa de diálogo pedindo um dado ao usuário
// ⚠️ O prompt() retorna uma STRING por padrão
let nome = prompt("Qual o seu nome ?"); 

// Exibe o valor digitado pelo usuário no console
console.log(nome);

// Exibe uma caixa de confirmação com botões "OK" e "Cancelar"
// Retorna true se o usuário clicar em "OK" e false se clicar em "Cancelar"
let resposta = confirm("Você deseja continuar?");
console.log(resposta);


/* 🚀 Exemplo: Soma de dois números 🚀 */

// Solicita um número do usuário
// ⚠️ Como prompt() retorna uma STRING, usamos Number() para converter para número
let numero1 = Number(prompt("Digite um número"));

// Solicita outro número e converte para número
let numero2 = Number(prompt("Digite um número"));

// Realiza a soma dos dois números
let soma = numero1 + numero2;

// Exibe o resultado da soma em um alerta
// ⚠️ Usamos Template String para formatar a mensagem (${numero1} + ${numero2} = ${soma})
alert(`${numero1} + ${numero2} = ${soma}`);
