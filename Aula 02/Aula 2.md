# 📘 Aula 2 - Conceitos Básicos

### 🔵 Variáveis e Constantes

#### 🔍 O que são variáveis?
Variáveis são **espaços na memória** onde podemos **guardar informações** que serão usadas no nosso programa, como números, textos, ou qualquer outro tipo de dado. Pense numa variável como uma **caixinha com um nome**, onde você coloca algum valor dentro para usar depois.

##### 🔹 Declaração de variáveis:
Declarar uma variável é o mesmo que **criar uma variável**. Ao fazer isso, um espaço na memória é reservado para armazenar algum dado. 

```js
let numero;
```

##### 🔹 Atribuição de variáveis:
Após criar uma variável, é possível **guardar uma informação** dentro dela. Esse processo é chamado de atribuição.

```js
let numero;
numero = 10;
```

##### 🔹 Inicialização de variráveis:
Quando a declaração e a atribuição são feitas na **mesma linha**, chamamos esse processo de inicialização. Inicializar uma variável significa atribuir um valor a ela **no momento em que ela é criada**.

```js
let numero = 10;
```

<br>

#### 🔍 O que são constantes
São variáveis cujo valor **não pode ser alterado** após a atribuição. Para declarar uma constante usamos a palavra reservada `const`.

```js
const NUMERO = 10;
NUMERO = 12;  // ❌ Erro: não é possível reatribuir uma constante
```

Existe uma convenção em programação na qual os nomes (identificadores) de constantes são escritos em **letras maiúsculas**. Essa prática ajuda a diferenciar constantes de outras variáveis no código.

<br>

#### 🔹 Formas de declarar variáveis em JavaScript

No JavaScript moderno, usamos três palavras-chave principais para declarar variáveis:

##### 🔹 `var` (forma antiga)

- Introduzida desde as versões mais antigas do JavaScript.
* Tem **escopo de função** (function scope).
- Pode ser **redeclarada** na mesma função, o que pode causar bugs inesperados.
* É **içada** (hoisted) — ou seja, a variável é “movida” para o topo da função antes da execução, mas sem o valor atribuído.

**Exemplo 1:**
```js
{
    var numero = 10;
}
console.log(numero);
```
Nesse exemplo, a variável `numero` pode ser acessada fora do bloco que ela foi declarada. Esse comportamente seria diferente se tivessemos usado o  `let`.

**Exemplo 2:**
```js
var numero = 10;
var numero = 12;
```
Nesse exemplo, a variável `numero` é declarada duas vezes com `var`, mas não é um comportamento ideal. Isso porque `var` permite **redeclaração no mesmo escopo**, o que pode causar erros difíceis de identificar em códigos maiores, já que uma variável pode ser sobrescrita sem aviso. 

**Exemplo 3:**
```js
console.log(numero);
var numero = 10;
```

O JavaScript realiza o chamado **"hoisting"**, que consiste em elevar a declaração da variável para o topo do escopo. Ou seja, o código acima é interpretado como:

```js
var numero;
console.log(numero);
numero = 10;
```

Por isso, o `console.log(numero)` **não dá erro**, mas imprime `undefined`, pois a variável já foi declarada, mas ainda não foi inicializada com o valor 10.

<br>

##### 🔹  `let` (forma moderna – recomendada)
- Introduzido no ES6 (2015).

* Tem **escopo de bloco** (block scope), ou seja, só existe dentro do `{}` onde foi declarada.

- **Não pode ser redeclarada** no mesmo escopo.

* Também sofre hoisting, **mas não é inicializada**, então acessá-la antes da declaração gera erro.

**Exemplo 1:**
```js
{
    let numero = 10;
}
console.log(numero); // ❌ Erro: numero não esta definido
```
Nesse exemplo, a variável `numero` só pode ser acessada dentro do bloco onde ela foi criada.

**Exemplo 2:**
```js
let numero = 10;
let numero = 12; // ❌ Erro: 'numero' já foi declarado
```
Nesse exemplo, a redeclaração da variável `numero` gera um erro. Diferente se `numero` fosse declarado usando `var`.

**Exemplo 3:**
```js
console.log(numero);  // ❌ Erro: numero não esta definido
let numero = 10;
```
Nesse exemplo, a variável `numero` sofre hoisting, mas não é inicializada. Por isso não pode ser usada antes da declaração o que gera um erro.

<br>

##### 🔹 `const` (constante – valor fixo)
- Também introduzido no ES6.

* Tem **escopo de bloco**, igual ao `let`.

- **Deve ser** inicializada no momento da declaração.

* **Não pode** ter seu valor reatribuído.

**Exemplo 1:**
```js
{
    const NUMERO = 10;
}
console.log(NUMERO); // ❌ Erro: NUMERO não esta definido
```
Nesse exemplo, `NUMERO` é visível apenas dentro do bloco onde foi declarado.

**Exemplo 2:**
```js
const NUMERO; // ❌ Erro: inicializador ausente na declaração const
NUMERO = 10;
```
Nesse exemplo, por não inicializar a contante `NUMERO` um erro é gerado.

**Exemplo 3:**
```js
const NUMERO = 10; // ❌ Erro: atribuição a variável constante.
NUMERO = 12;
```
Nesse exemplo, ao tentar reatribuir o valor da constante `NUMERO` é gerado um erro.

<br>

#### 🔹 Regras para Nomeação de Variáveis
✅ **Boas práticas:**

- Nomes devem ser descritivos e fáceis de entender (`idade`, `precoProduto`).
- Usar letras minúsculas e `camelCase` para múltiplas palavras (`quantidadeMaxima`).
- Utilizar apenas letras, números e o caractere "_" (`nome_usuario`).
- Sempre começar com uma letra (não pode iniciar com números ou caracteres especiais).

❌ **Evite:**

- Usar acentos e caracteres especiais (`preço`, `número` ❌).
- Começar com números (`1idade`, 2no`me ❌).
- Utilizar palavras reservadas da linguagem (`let`, `const` ❌).

---

### 🔵 Tipos de Dados
JavaScript é uma linguagem de **tipagem dinâmica**, ou seja, você **não precisa declarar o tipo da variável** — o próprio interpretador determina isso com base no valor atribuído.

#### 🔹 Tipos Primitivos
Estes são imutáveis, armazenam **valores diretos**:

|Tipo | O que armazena |
|-----|----------------|
| `Number`| Números inteiros ou decimais| 
| `String` | Textos |
| `Boolean` | Verdadeiro ou falso | 
| `undefined` | Valor não atribuído | 
| `null` | Intencionalmente sem valor | 

Em JavaScript, é possível criar strings utilizando três tipos de aspas: **duplas (" "**), **simples (' ')** ou **crease (\` `\)**

**Exemplo:**
```js
"Olá, mundo"
'Olá, mundo'
`Olá, mundo`
```


#### 🔹 Tipos de Referência 
Estes armazenam **referência na memória** e podem ser modificados internamente:
|Tipo | O que armazena |
|-----|----------------|
| `Function `| Blocos de código reutilizáveis | 
| `Array ` | Lista indexada de valores |
| `Object ` | Coleção de pares chave-valor | 

<br>

O comando `typeof` é usado para saber o tipo de um dado:

```js
console.log(typeof 10);        // number
console.log(typeof "teste");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (comportamento antigo do JS)
```

---

### 🔵 Tipagem Dinâmica
Como já foi dito antes, o JavaScript é uma linguagem de **tipagem dinâmica**, o que significa que o tipo da variável é determinado **automaticamente** de acordo com o valor atribuído, e pode mudar ao longo do tempo. Mas o que significa na prática ?

Você pode declarar uma variável e atribuir a ela diferentes tipos de dados em momentos diferentes do código:

```js
let variavel = 42;        // tipo number
console.log(typeof variavel); // "number"

variavel = "texto";       // agora é uma string
console.log(typeof variavel); // "string"

variavel = true;          // agora é um boolean
console.log(typeof variavel); // "boolean"
```


##### ⚠️ Pontos de Atenção
- Isso traz **flexibilidade**, mas também pode gerar erros difíceis de rastrear se você não for cuidadoso.

* É importante **manter o propósito da variável claro** e consistente, mesmo que o JavaScript permita essa flexibilidade.

---

### 🔵 Operadores
Os operadores são símbolos que instruem o programa a **realizar operações específicas** com variáveis e valores. Em JavaScipt, os operadores estão divididos em várias categorias:

#### 🔹 Aritméticos
São usados para fazer **operações matemáticas**:

|Operador | Operação       | Exemplo|
|---------|----------------|--------|
| `+`       | Soma         |  `x + y` |
|`-`       | Subtração      | `x - y` |
| `*`       | Multiplicação  | `x * y` |
| `/`       | Divisão        | `x / y` |
| `%`       | Módulo (resto) |  `x % y` |
| `**`       | Exponenciação |  `2 ** 3` |


#### 🔹 Atribuição
Usados para **atribuir valores** a variáveis:

|Operador | Operação       | Exemplo|
|---------|----------------|--------|
| `=`       | Atribuição simples         |  `let a = 10` |


#### 🔹 Aritméticos de Atribuição
São formas **resumidas** de aplicar uma operação e atribuir o resultado na mesma variável:

| Operador | Equivalente a | Exemplo   |
|----------|----------------|-----------|
| `+=`     | `x = x + y`    | `x += 2;` |
| `-=`     | `x = x - y`    | `x -= 3;` |
| `*=`     | `x = x * y`    | `x *= 4;` |
| `/=`     | `x = x / y`    | `x /= 2;` |
| `%=`     | `x = x % y`    | `x %= 5;` |
| `**=`     | `x = x ** 2`    | `x **= 2;` |

#### 🔹 Operadores Relacionais (Comparação)
**Comparam valores** e retornam true ou false:

| Operador | Significado       | Exemplo   |
|----------|-------------------|-----------|
| `==`     | Igual  a(valor)          | `a == b`  |
| `===`     | 	Igual a (valor e tipo)          | `5 === '5'`  |
| `!=`     | Diferente de (valor)     | `a != b`  |
| `!=`     | Diferente de (valor e tipo)     | `5 !== '5'`  |
| `>`      | Maior que         | `a > b`   |
| `<`      | Menor que         | `a < b`   |
| `>=`     | Maior ou igual    | `a >= b`  |
| `<=`     | Menor ou igual    | `a <= b`  |

#### 🔹 Lógicos
Combinam **expressões booleanas**:

| Operador | Significado         | Exemplo             |
|----------|---------------------|---------------------|
| `&&`     | E lógico (AND)      | `(x > 0 && x < 100)`|
|  `\|\|`     |  OU lógico (OR)     | `(x > 0 \|\| x < 100)`|
| `!`      | NÃO lógico (NOT)    | `!(x == 0)`         |

#### 🔹 Incremento e Decremento
Servem para **adicionar ou subtrair 1** de uma variável, com dois formatos:

| Operador | Descrição       | Exemplo            |
|----------|------------------|--------------------|
| `++`     | Incrementa em 1  | `x++;` ou `++x;`   |
| `--`     | Decrementa em 1  | `x--;` ou `--x;`   |

A diferença está na **ordem da execução**:
- `++x`: incrementa antes de usar o valor
- `x++`: incrementa depois de usar o valor

#### 🔹 Operador Ternário
Uma forma curta de escrever um `if-else`:

```js
condição ? valor_se_verdadeiro : valor_se_falso;
```

**Exemplo:**

```js
let idade = 16;
let maiorIdade = idade >= 18 ? "Sim" : "Não";
```
Nesse exemplo, usamos o **operador ternário** para atribuir um valor à variável `maiorIdade` com base em uma condição: se a variável `idade` for maior ou igual a 18, `maiorIdade` recebe a string `"sim"` caso contrário, recebe `"não"`. No exemplo, como `idade` é 16, que é menor que 18, a condição é falsa e `maiorIdade` será igual a `não`. Esse operador é uma forma compacta de escrever uma estrutura condicional `if-else`.

---

#### 🔵 Precedência de Operadores
A ordem em que os operadores são avaliados é importante para garantir que o resultado esteja correto.

**Ordem da Precedência (maior para menor):**

1. `()` – Parênteses

2. `!`

3. `*`, `/`, `%`

4. `+`, `-`

5. `<`, `>`, `<=`, `>=`

6. `==`, `!=`

7. `&&`

8. `||`

Use parênteses para garantir clareza:
```js
let resultado = (2 + 3) * 4; // resultado = 20
```

---

### 🔵 Operador de Concatenação e Template String

#### 🔹 Concatenação
Concatenação é o ato de **juntar** textos (strings). Em JavaScript, usamos o operador `+`:

**Exemplos:**

```js
let nome = "Ana";
let saudacao = "Olá, " + nome + "!";
console.log(saudacao); // Olá, Ana!
```

Se você usar o + com strings e números, o número é convertido para texto:

```js
let idade = 25;
console.log("Idade: " + idade); // "Idade: 25"
```

#### 🔹  Template String
É uma forma **moderna** e mais **legível** de montar strings com variáveis e quebras de linha. Usa crases (`) em vez de aspas:

**Exemplos:**

```js
let nome = "Carlos";
let idade = 30;

let frase = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(frase); // Olám meu nome é Carlos e tenho 30 anos
```

Você também pode incluir expressões dentro de `${}`:

```js
let a = 5;
let b = 3;

console.log(`A soma de ${a} + ${b} é ${a + b}`); // A soma de 5 + 3 é 8
```

Também facilita a quebra de linha:

```js
let texto = `Essa é uma linha.
E essa é outra.`;
```

---

### 🔵 Saída de Dados
JavaScript oferece várias formas de **exibir informações** para o usuário ou para o desenvolvedor. A seguir, veja os métodos mais usados:

#### 🔹 `console.log()`
Usado para **exibir informações no console do navegador** (geralmente para testes e debug).

```js
let nome = "Lucas";
console.log("Nome: " + nome);
```

#### 🔹 `alert()`
Exibe uma **caixa de diálogo simples** com uma mensagem.

```js
alert("Bem-vindo ao site!");
```

Ideal para mensagens simples, mas não deve ser usado em excesso (pode atrapalhar a experiência do usuário).

---

### 🔵 Entrada de Dados
JavaScript permite **interagir com o usuário** capturando respostas diretamente do navegador por meio de caixas de diálogo simples.

#### 🔹 `prompt()`
Exibe uma **caixa de entrada** onde o usuário pode digitar algo.
O valor digitado é sempre retornado como **string**.

```js
let nome = prompt("Qual é o seu nome?");
console.log("Nome digitado:", nome);
```

Mesmo se o usuário digitar um número, ele será retornado como string. Use `Number()` ou `parseInt()`/`parseFloat()` se quiser converter:

```js
let idade = prompt("Qual sua idade?");
idade = Number(idade);
```

#### 🔹 `confirm()`
Mostra uma **caixa com duas opções**: OK e Cancelar. Retorna `true` se o usuário clicar em OK, ou `false` se clicar em Cancelar.

```js
let resposta = confirm("Deseja continuar?");
console.log(resposta); // true ou false
```

Muito usado em mensagens de confirmação, como "Deseja excluir este item?".

###### ⚠️ Importante 
Essas funções (`prompt` e `confirm`) **bloqueiam a execução do restante do código** até que o usuário responda.
Por isso, são simples e úteis para aprender, mas raramente usadas em aplicações modernas (que preferem elementos gráficos como inputs HTML).

---

### 🔵 Snippets do Google Chrome
Snippets são como pequenos **scripts de JS** que você pode escrever e executar diretamente no navegador.

#### 🔹 Passo a passo:
-  **Abra o navegador Google Chrome** (de preferência com qualquer site aberto).

*  Pressione F12 ou use o atalho:
`Ctrl + Shift + I` (Windows/Linux)
`Cmd + Option + I` (Mac)
Isso abre o **DevTools**.

-  Vá até a aba **"Sources"**.

*  No painel da esquerda, clique em **"Snippets"**.
Se não estiver visível, clique no `>>` e selecione Snippets.

-  Clique com o botão direito e escolha:
➕ **New Snippet** (ou clique com botão direito e "Add new snippet").

*  Dê um nome (ex: `entrada.js`).

-  Escreva seu código JS, como:
```js
let nome = prompt("Qual seu nome?");
alert("Olá, " + nome + "!");
```

* Para executar, clique com o botão direito no snippet e escolha **Run**
ou pressione **Ctrl + Enter**.


#### 🔹 Vantagens de usar Snippets:
- Funciona com qualquer recurso do navegador, como `alert`, `prompt` e `confirm`.

* Você pode salvar e reexecutar quantas vezes quiser.

- Muito útil para testar trechos de código durante os estudos.

---