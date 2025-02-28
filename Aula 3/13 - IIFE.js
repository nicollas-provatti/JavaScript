// Uma IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é declarada e imediatamente executada no momento em que é definida. Ela é útil para criar um escopo isolado, evitando poluir o escopo global com variáveis e funções auxiliares.

// Exemplo simples:
(function() {
    console.log("Está função foi executada imediatamente!")
})(); // lembrar do ponto e vírgula

// Exemplo com parâmetros:
(function(nome) {
    console.log(`Olá, ${nome}!`)
})('Lucas');

// Exemplo de um escopo isolado
var mensagem = "Olá, mundo!"; // Variável global

(function() {
    var mensagem = "Olá, escopo local!";
    console.log(mensagem); // Saída: "Olá, escopo local!"
})();

console.log(mensagem); // Saída: "Olá, mundo!"






