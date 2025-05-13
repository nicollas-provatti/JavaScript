# 📘 Aula 3 – Decisão e Repetição
### 🔍 O que são comandos de decisão ?
Os comandos de decisão, também conhecidos como estruturas condicionais, são instruções que permitem ao programa **tomar diferentes caminhos** com base em **condições específicas**. Eles são essenciais para controlar o fluxo de execução do programa, permitindo que ele reaja de maneira diferente a diferentes entradas ou estados.

---

### 🔵 O comando `if`
O comando `if` é uma estrutura condicional que permite ao programa **executar um bloco** de código apenas se uma condição específica for **verdadeira**. 

**Sintaxe:**
```js
if (condição) {
    // Código a ser executado se a condição for verdadeira
}
```

**Como funciona ?**
O programa avalia a expressão dentro dos parênteses após `if`. Se a condição for verdadeira, o bloco de código entre as chaves `{}` é executado. Se a condição for falsa, o bloco de código entre as chaves `{}` é ignorado.

**Exemplo:**
```js
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
}
```

**Observação:**
Se você tiver vários comandos `if`, **todos** eles serão analisados individualmente. Isso significa que cada condição será avaliada, independentemente das outras.

---

### 🔵 O comando `if-else`
O comando `if-else` é uma extensão do comando `if` que permite especificar um **bloco de código alternativo** a ser executado quando a condição `if` é falsa. Ele é usado para criar uma ramificação no fluxo do programa, onde uma condição determina qual bloco de código será executado.

**Sintaxe:**
```js
if (condição) {
    // Código se a condição for verdadeira
} else {
    // Código se a condição for falsa
}
```

**Como funciona ?**
O programa avalia a expressão dentro dos parênteses após `if`. Se a condição for verdadeira, o bloco de código entre as primeiras chaves `{}` é executado. Se a condição for falsa, o bloco de código entre as segundas chaves `{}` é executado.

**Exemplo:**
```js
let idade = 16;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

**Observações:**
- O bloco de código dentro do `else` é executado **apenas** se a condição do `if` for falsa.
* O `else` **não pode existir** sem um `if` correspondente.

---

### 🔵 Comandos `if-else` aninhados
Comandos `if-else` aninhados são estruturas condicionais onde um comando `if` ou `else` está contido dentro de outro `if` ou `else`. Eles permitem verificar múltiplas condições em sequência, permitindo que diferentes blocos de código sejam executados com base em várias condições.

**Sintaxe:**
```js
if (condição1) {
    // Código se a condição for verdadeira
} else {
    // Código se a condição for falsa
    if (condição2) {
        // Código se a condição for verdadeira
    } else {
        // Código se a condição for falsa
    }
}
```

**Como funciona ?**
O programa avalia a condição1. Se for verdadeira, executa o bloco de código correspondente. Caso contrário, executa o bloco do `else`. Dentro desse `else`, a condição2 será analisada e o processo se repete: se for verdadeira, executa seu respectivo bloco; caso contrário, executa o segundo `else`.

**Exemplo:**
```js
let idade = 16;
if (idade < 0) {
    console.log("Idade inválida");
} else {
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
```

**Observação:**
- Aninhar múltiplos comandos `if-else` pode **aumentar a complexidade** do código, então é importante manter o código claro e bem organizado.

---

### 🔵 O comando `else if`
O comando `else if` é uma extensão do comando `if-else` que permite adicionar múltiplas condições em sequência. Ele é usado quando há mais de duas possibilidades de fluxo de controle no programa e queremos testar várias condições, uma após a outra.

**Sintaxe:**
```js
if (condição1) {
    // Código se condição1 for verdadeira
} else if (condição2) {
    // Código se condição2 for verdadeira
} else {
    // Código se nenhuma das condições anteriores for verdadeira
}
```

**Como funciona ?**
O programa avalia a condição1. Se condição1 for verdadeira, o bloco de código associado é executado, e todas as outras condições são ignoradas. Se condição1 for falsa, o programa avalia a condição2. Se condição2 for verdadeira, o bloco de código associado é executado, e todas as outras condições são ignoradas. Se todas as condições forem falsas, o bloco de código associado ao `else` é executado.


**Exemplo:**
```js
let idade = 16;
if (idade < 0) {
    console.log("Idade inválida.");
} else if (idade >= 18) {
    console.log("Maior de idade");
}else {
    console.log("Menor de idade");
}
```

**Observações:**
- As condições são avaliadas em sequência, e a execução **para na primeira condição verdadeira**. Diferente se tivéssemos vários comandos `if`.
* O bloco `else` é opcional, mas é **uma boa prática** incluí-lo para lidar com casos onde todas as outras condições são falsas.

---

### 🔵 O comando `switch`
O comando `switch` é uma estrutura de controle de fluxo que permite a execução de diferentes blocos de código com base no valor de uma variável. Ele é particularmente útil quando se deseja **comparar a mesma variável com diferentes valores** de maneira eficiente.

**Sintaxe:**
```js
switch (variável) {
    case valor1:
        // Código a ser executado se a variável for igual a valor1
        break;
    case valor2:
        // Código a ser executado se a variável for igual a valor2
        break;
    default:
        // Código a ser executado se a variável não corresponder a nenhum caso
}
```

**Como funciona ?**
O programa avalia a variável dentro dos parênteses após `switch`. O valor da variável é comparado sequencialmente com cada `case`. Quando uma correspondência é encontrada, o bloco de código associado ao `case` correspondente é executado. A instrução `break` termina a execução do bloco de código do `case` atual e impede que o controle passe para o próximo `case`.
Se nenhum dos cases corresponder ao valor da expressão, o bloco de código dentro de `default` é executado.


**Exemplo:**
```js
let dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
}
```

**Observação:**
- Cada `case` **deve terminar** com uma instrução `break` para evitar que o controle passe para o próximo case (efeito conhecido como "fall through").

* O bloco `default` é opcional, mas é uma **boa prática** incluí-lo para lidar com valores inesperados.

- O comando `switch` é mais eficiente que uma série de comandos `if-else` quando se trata de comparar **a mesma variável** com **vários valores diferentes**.

---

### 🔵 Boas práticas no uso de decisões
- **Evite usar muitas condições aninhadas:** Em vez de muitos `if-else` dentro de outros `if-else`, considere usar `switch-case` ou criar funções para tornar o código mais legível.

* **Use a estrutura mais apropriada:** Se você tiver apenas duas opções (verdadeiro ou falso), o `if-else` é a melhor escolha. Se você tiver muitas opções, o `switch-case` é mais limpo.

- **Mantenha o código organizado:** Sempre use chaves `{}` mesmo que haja apenas uma linha de código dentro de um bloco condicional. Isso ajuda a evitar erros futuros e torna o código mais fácil de manter.

* **Cuidado com a condição no if:** Evite expressões complexas ou difíceis de entender. Torne as condições simples e claras.

---

### 🔵  Falsy e Truthy
Em JavaScript, o `if` pode ser usado para verificar se uma expressão é verdadeira ou falsa. No entanto, ele não apenas verifica valores booleanos (`true` ou `false`), mas também qualquer tipo de dado que seja avaliado como verdadeiro (truthy) ou falso (falsy). Isso ocorre porque o JavaScript realiza type coercion (conversão implícita de tipos), avaliando o valor de uma expressão em termos de verdadeiro ou falso.

#### 🔹 Valores Falsy
Valores **falsy** são aqueles que, quando avaliados em uma expressão booleana (como um if), resultam em false. São eles:

- `undefined`: uma variável declarada, mas não inicializada.
* `null`: um valor que indica a ausência de um objeto ou valor.
- `NaN`: significa "Not-a-Number", utilizado quando há um erro numérico.
* `''` (string vazia): uma string sem nenhum caractere.
- `0`: o número zero.
* `false`: o próprio valor booleano false.

Esses valores serão avaliados como `false` dentro de um `if` ou qualquer outra estrutura condicional.

#### 🔹 Valores Truthy
Valores **truthy** são os que, quando avaliados, resultam em `true`, mesmo que não sejam do tipo booleano. Em outras palavras, qualquer valor que não seja falsy é truthy. Exemplos de valores truthy incluem:

- Qualquer número diferente de 0 (inclusive números negativos ou positivos como 1, -1, 1000).
* Qualquer string não vazia (como `' '`, `'texto'`).
- Arrays: mesmo que estejam vazios (`[]`), arrays são considerados truthy.
* Objetos: objetos, mesmo que vazios (`{}`), também são truthy.

**Exemplo:**
```js
let valor;

// Testando diferentes valores de 'valor'
valor = null;
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = NaN;
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = '';
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = 0;
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = -1;
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = 1;
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = ' ';
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = '?';
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = [];
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}

valor = {};
if (valor) {
    console.log(`${valor} é verdade`);
} else {
    console.log(`${valor} é falso`);
}
```

O entendimento de **falsy** e **truthy** é importante quando você deseja verificar a presença ou ausência de um valor. Por exemplo:

- Verificar se uma variável tem valor (não é `null`, `undefined`, etc.).
* Garantir que valores numéricos ou strings sejam **válidos** antes de realizar cálculos ou operações.

---

###  🔍 O que são laços de repetição ?
Laços são comandos usados sempre que uma ou mais instruções tiverem de ser repetidas enquanto uma certa condição estiver sendo satisfeita. Em JavaScript existem três comandos de laços: `for`, `while`  e `do-while`.

---

###  🔵 O laço `for`
O laço `for` é uma estrutura de repetição que permite executar um bloco de código um número específico de vezes. Ele é especialmente útil quando sabemos antecipadamente quantas vezes queremos repetir uma instrução ou conjunto de instruções e possui três partes: inicialização, condição e incremento.

**Sintaxe:**
```js
for (inicialização; condição; incremento) {
    // instruções
}
```

**Como funciona ?**
- **Inicialização**: Executada uma vez no início do laço, usada para definir e inicializar variáveis de controle.

* **Condição**: Avaliada antes de cada iteração. Se a condição for verdadeira, o bloco de código é executado.

- **Incremento**: Executado após cada iteração, geralmente usado para atualizar a variável de controle.

**Exemplo:**
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
Define e inicializa a variável `i` com o valor **0**. Esta parte do código é executada **apenas uma vez**, no início do laço.
Antes de cada iteração, a condição `i < 5` é avaliada. Se a condição for **verdadeira**, o bloco de código dentro do laço é executado. Se a condição for **falsa**, o laço termina e a execução continua após o bloco de código do laço.
Após cada iteração, a expressão `i++`é executada, incrementando `i` em **1**. Depois do incremento, o controle volta para a avaliação da condição para a próxima iteração.
O laço `for` nesse exemplo executa o bloco de código **cinco vezes**, imprimindo os valores de **0** a **4**.

---

### 🔵 O laço `while`
O laço `while` é uma estrutura de repetição que executa um bloco de código enquanto uma condição específica for verdadeira. Ele é utilizado quando não sabemos quantas vezes precisamos repetir uma operação, mas sabemos a condição para continuar a repetição.

**Sintaxe:**
```js
// inicialização
while (condição) {
    // instruções
    // incremento
}
```

**Como funciona ?**
A condição é avaliada antes de cada iteração. Se for verdadeira, o bloco de código é executado. Se a condição for falsa, a execução do laço termina e o controle passa para a instrução seguinte.


**Exemplo:**
```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

Inicializamos a variável `i` com o valor **0**. Essa variável será usada como a variável de controle para o laço `while`.
Antes de cada iteração, a condição `i < 5` é avaliada. Se a condição for **verdadeira**, o bloco de código dentro do laço é executado. Se a condição for **falsa**, o laço termina e a execução continua após o bloco de código do laço.

---

###  🔵 O laço `do-while`
O laço `do-while` é semelhante ao laço `while`, mas a condição é avaliada após a execução do bloco de código. Isso garante que o bloco de código seja executado pelo menos uma vez.

**Sintaxe:**
```js
// inicialização
do {
    // instruções

    // incremento
} while (condição);
```

**Como funciona ?**
O bloco de código é executado uma vez antes da avaliação da condição.  Após a execução do bloco de código, a condição é avaliada. Se for **verdadeira**, o bloco de código é executado novamente.

**Exemplo:**
```js
let senha;
do {
    senha = Number(prompt("Digite a senha: "));
} while (senha != 1234);
```

Primeiro, o bloco dentro do `do` é executado, onde é exibida a mensagem `"Digite a senha"` e a entrada é lida com `prompt`. Só depois disso a condição `while` (senha != 1234) é avaliada. Se a condição for verdadeira (ou seja, a senha estiver incorreta), o laço se repete. Esse comportamento é útil quando queremos que determinada ação aconteça ao menos uma vez antes de verificar a condição.

---

### 🔵 Diferença entre os laços

|Estrutura    |	Quando usar|
|-------------|------------|
| `for`	      |Quando não sabemos quantas repetições serão necessárias |
| `while`     |Quando queremos garantir ao menos uma execução |
| `do-while`  | Quandosabemos o número exato de repetições |

---

### 🔵 Controle de laço

#### 🔹 **`break`**
Interrompe o laço imediatamente.

**Exemplo:**

```js
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
// Saída: 1 2 3 4
```

#### 🔹 **`continue`**
Pula o restante do bloco e vai para a próxima iteração.

**Exemplo:**

```js
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
// Saída: 1 2 4 5
```
---

### 🔵  Boas práticas no uso de laços
- Evite laços infinitos: Certifique-se de que a condição de um laço possa eventualmente se tornar falsa para evitar loops infinitos.

* Use o `for` quando souber o número exato de iterações. Ele ajuda a deixar o código mais claro e conciso.

- Use `break` e `continue` com cautela para não tornar o código confuso. Eles são poderosos, mas podem levar a comportamentos inesperados se usados em excesso.
 
---
