# Funções em JavaScript

## Conceito de Função
Uma **função** é um bloco de código reutilizável que executa uma tarefa específica. Podemos compará-la a uma "receita de bolo": você segue um conjunto de instruções (código) para obter um resultado (saída).

```javascript
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}
saudacao(); // Chamada da função
```

## Quase Tudo é Função em JavaScript
Em JavaScript, funções são tratadas como **objetos de primeira classe**, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

```javascript
const mensagem = function() {
    return "Isso é uma função armazenada em uma variável!";
};
console.log(mensagem());
```

## Declaração e Chamada de Funções
Funções podem ser declaradas com a palavra-chave `function` e chamadas pelo seu nome.

```javascript
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
```

## Retorno de Valores
Uma função pode **retornar um valor** usando a palavra-chave `return`. Caso contrário, seu retorno será `undefined`.

```javascript
function quadrado(x) {
    return x * x;
}
console.log(quadrado(4)); // 16
```

## Escopo de Variáveis
O **escopo** determina onde uma variável pode ser acessada.

- **Global:** A variável está disponível em todo o código.
- **Local:** Criada dentro de uma função e acessível apenas dentro dela.

```javascript
let global = "Estou no escopo global";
function testeEscopo() {
    let local = "Estou no escopo local";
    console.log(global);
    console.log(local);
}
testeEscopo();
```

## Em JS, Parâmetros e Retornos São Opcionais
Em JavaScript, uma função pode ser chamada sem passar argumentos.

```javascript
function saudacao(nome) {
    return "Olá, " + (nome || "Visitante");
}
console.log(saudacao()); // "Olá, Visitante"
console.log(saudacao("Maria")); // "Olá, Maria"
```

## `arguments` e Parâmetros Variáveis
A palavra-chave `arguments` permite acessar todos os argumentos passados para uma função.

```javascript
function somaTodos() {
    let total = 0;
    for (let valor of arguments) {
        total += valor;
    }
    return total;
}
console.log(somaTodos(1, 2, 3, 4, 5)); // 15
```

## Operador Spread (`...`)
O operador **spread** permite passar um número indeterminado de argumentos para uma função.

```javascript
function somaComSpread(...numeros) {
    return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
}
console.log(somaComSpread(1, 2, 3, 4, 5));
```

## Valor Padrão para Parâmetros
Podemos definir valores padrão para parâmetros.

```javascript
function cumprimentar(nome = "Visitante") {
    return `Olá, ${nome}!`;
}
console.log(cumprimentar()); // "Olá, Visitante!"
```

## Funções Anônimas
São funções sem nome, geralmente usadas em variáveis.

```javascript
const dobro = function(x) {
    return x * 2;
};
console.log(dobro(5)); // 10
```

## Funções como Argumento (Callback)
Funções podem ser passadas como argumentos para outras funções.

```javascript
function executar(fn, valor) {
    return fn(valor);
}
console.log(executar(dobro, 6));
```

## Arrow Functions
Uma forma mais curta de escrever funções.

```javascript
const triplo = x => x * 3;
console.log(triplo(3));
```

## Formas de Declarar Funções
1. **Function Declaration**:
```javascript
function exemplo() {
    return "Function Declaration";
}
```
2. **Function Expression**:
```javascript
const exemplo = function() {
    return "Function Expression";
};
```
3. **Named Function Expression**:
```javascript
const exemplo = function minhaFunc() {
    return "Named Function Expression";
};
```

## Conceito Léxico
Variáveis de um escopo superior são acessíveis dentro de funções internas.

```javascript
const saudacao = "Oi";
function falar() {
    console.log(saudacao);
}
falar();
```

## Closures
Uma função pode "lembrar" variáveis de seu escopo original.

```javascript
function contador() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const incrementar = contador();
incrementar(); // 1
incrémentar(); // 2
```

## IIFE (Immediately Invoked Function Expression)
Executa imediatamente após a definição.

```javascript
(function() {
    console.log("Executado imediatamente!");
})();
```

## Função que Lida com Diferentes Tipos de Dados
Uma função pode tratar diferentes tipos de entrada.

```javascript
function tipoDeDado(valor) {
    return `O tipo do valor é ${typeof valor}`;
}
console.log(tipoDeDado(10));
console.log(tipoDeDado("Texto"));
console.log(tipoDeDado(true));
```

---
