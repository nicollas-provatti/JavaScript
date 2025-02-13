# Fundamentos do JavaScript

## Estrutura Básica de um Programa JS

Em JavaScript, um programa é composto por **sentenças** e **blocos de código**.

- **Sentença**: Uma instrução individual que pode terminar com `;` (opcional na maioria dos casos).
- **Bloco de Código**: Conjunto de sentenças delimitadas por `{}`.

Exemplo:

```js
// Sentença única
console.log("Olá, Mundo!");

// Bloco de código
{
    let a = 10;
    let b = 20;
    console.log(a + b);
}
```

---

## Comentários em JavaScript

Comentários são usados para documentar o código e torná-lo mais compreensível.

- **Comentário de uma linha**:

```js
// Isso é um comentário de uma linha
console.log("Teste");
```

- **Comentário de múltiplas linhas**:

```js
/*
   Isso é um comentário
   de múltiplas linhas
*/
console.log("Teste");
```

📌 **Evite comentários óbvios**

```js
let idade = 25; // Define a idade como 25 (DESNECESSÁRIO)
```

---

## Variáveis

### Definição
Uma **variável** é um espaço na memória onde armazenamos valores.

### Declaração e Inicialização
```js
let nome; // Declaração
nome = "Ana"; // Inicialização
```

Podemos declarar e inicializar em uma única linha:
```js
let idade = 30;
```

### Diferença entre `var`, `let` e `const`

| Palavra-chave | Escopo          | Pode ser reatribuída? | Hoisting |
|--------------|----------------|----------------------|----------|
| `var`        | Global ou função | Sim                  | Sim      |
| `let`        | Bloco           | Sim                  | Não      |
| `const`      | Bloco           | Não                  | Não      |

Exemplo:
```js
var a = 10; // Global
let b = 20; // Bloco
const c = 30; // Constante
```

---

## Regras para Nomeação de Identificadores

- Pode conter letras, números, `$` e `_`
- Não pode começar com números
- Sensível a maiúsculas e minúsculas (`nome` ≠ `Nome`)
- Evite palavras reservadas (`let`, `const`, `if`, etc.)

Exemplo válido:
```js
let minhaVariavel = "ok";
```

---

## Tipagem Fraca

O JavaScript é **fracamente tipado**, o que significa que as variáveis podem mudar de tipo dinamicamente:

```js
let dado = 10; // Número
console.log(typeof dado); // "number"
dado = "Agora sou um texto!";
console.log(typeof dado); // "string"
```

---

## Tipos Primitivos

Os principais tipos primitivos do JavaScript são:

- `string` (Texto)
- `number` (Números inteiros e decimais)
- `boolean` (true/false)
- `undefined` (variável declarada sem valor)
- `null` (ausência de valor)
- `bigint` (números muito grandes)
- `symbol` (valores únicos)

Exemplo:
```js
let texto = "Olá"; // string
let idade = 25; // number
let ativo = true; // boolean
let indefinido; // undefined
let vazio = null; // null
```

---

## Template String

Permite criar strings com interpolação de variáveis usando crases `` ` ``, sem precisar concatenar com `+`.

```js
let nome = "Lucas";
let idade = 30;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
```

---

## Operadores

### Aritméticos
```js
let soma = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;
let resto = 10 % 3;
```

### Relacionais
```js
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 == "10");  // true (compara valor, não tipo)
console.log(10 === "10"); // false (compara valor e tipo)
```

### Lógicos
```js
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

### Incremento e Decremento
```js
let x = 5;
console.log(++x); // 6 (Pré-incremento)
console.log(x++); // 6 (Pós-incremento, valor atualizado depois)
console.log(x);   // 7
```

### Operador Ternário
```js
let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);
```

---

## Saída de Dados

### `alert()`
Exibe um pop-up na tela.
```js
alert("Olá, usuário!");
```

### `console.log()`
Exibe mensagens no console.
```js
console.log("Mensagem no console");
```

### `document.write()`
Escreve diretamente no HTML.
```js
document.write("<h1>Bem-vindo</h1>");
```

### `innerHTML`
Altera o conteúdo de um elemento HTML.
```js
document.getElementById("texto").innerHTML = "Novo conteúdo";
```

---

## Entrada de Dados

### `prompt()`
Solicita um valor ao usuário **(sempre retorna uma string, então pode ser necessário converter)**.
```js
let idade = prompt("Digite sua idade:");
idade = Number(idade); // Conversão para número
```

### `confirm()`
Exibe uma caixa de confirmação com **OK/Cancelar**.
```js
let resposta = confirm("Você deseja continuar?");
console.log(resposta); // true ou false
```

---

Esses são os fundamentos essenciais do JavaScript para iniciantes! 🚀
