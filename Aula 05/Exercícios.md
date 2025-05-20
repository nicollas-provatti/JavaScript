# 📝 Exercícios

---

## Exercício 1 - Gerenciador de Lista de Tarefas
**Descrição:** Crie uma função chamada `gerenciarTarefas` que recebe um array de tarefas e uma ação a ser realizada. As ações possíveis são:

- **"adicionarInicio"**: adiciona uma nova tarefa no início da lista.
- **"adicionarFim"**: adiciona uma nova tarefa no final da lista.
- **"removerInicio"**: remove a primeira tarefa da lista.
- **"removerFim"**: remove a última tarefa da lista.

A função deve receber dois parâmetros: o **array** de tarefas e a **ação** a ser realizada. Se a ação for `"adicionarInicio"` ou `"adicionarFim"`, a função também deve receber um terceiro parâmetro com a tarefa a ser adicionada.

**Exemplo de uso:**
```js
const tarefas = ["Estudar", "Treinar", "Ler"];  

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");  

console.log(tarefas);

// Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]
```

---

## Exercício 2 - Manipulando Notas de um Aluno 
**Descrição:** Crie uma função chamada `calcularMedia` que recebe um array de notas de um aluno e retorna a média das três melhores notas. Ordene o array de forma decrescente usando `sort()`, pegue as três primeiras notas usando `slice()`, calcule e retorne a média dessas notas.

**Exemplo de uso:**
```js
const notas = [5, 8, 9, 3, 10, 7]; 

let mediaTresMelhores = calcularMedia(notas);  

console.log(mediaTresMelhores);

// Resultado esperado: média das três maiores notas (10, 9 e 8) => 9.0
```

---

## Exercício 3 - Somando números
**Descrição:** Crie uma função chamada `somarNumeros` que recebe um array e retorna a soma dos números que são divisíveis por 2 e 3. Use `for...in` para percorrer o array.

**Exemplo de uso:**
```js
const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

let soma = somarNumeros(numeros);

console.log(soma);

// Resultado esperado: 42 (6 + 24 + 12)
```

---

## Exercício 4 - Maior e Menor
**Descrição:** Crie uma duas funções chamadas  `obterMaior` e `obterMenor` que recebem um array de números e retornam o maior e o menor elemento, respectivamente. Use `for...of` para percorrer o array e informe o maior e o menor numero encontrado.

**Exemplo de uso:**
```js
const numeros = [-1, 3, 8, -2, 4, 10];

let maior = obterMaior(numeros);

let menor = obterMenor(numeros);

console.log(maior, menor);

// Resultado esperado: 10 -2
```

---

## Exercício 5 - Exibindo Nomes Formatados
**Descrição:** Crie uma função chamada `exibirNomes` que receba um array com nomes e use `forEach` para exibir no console cada nome com a frase: "Bem-vindo, [nome]!"

**Exemplo de uso:**
```js
const nomes = ['Lucas', 'Marina', 'João'];

exibirNomes(nomes);

// Resultado esperado:
// Bem-vindo, Lucas!
// Bem-vindo, Marina!
// Bem-vindo, João!
```

---

## Exercício 6 - Transformando um Array de Preços
**Descrição:** Crie uma função chamada `converterMoeda` que recebe um array de preços em dólares e retorna um novo array com os valores convertidos para reais (cotação: **1 dólar = 5 reais**). Use `map` para multiplicar cada valor por 5 e retorne o novo array com os preços convertidos.

### 📌 Exemplo de uso:
```javascript
const precosDolares = [10, 20, 30]; 

precoReais = converterMoeda(precosDolares); 

console.log(precoReais);

// Resultado esperado: [50, 100, 150]
```

---

## Exercício 7 - Filtrando Devedores
**Descrição:** Crie uma função chamada `filtrarDevedores` que recebe um array de dívidas e retorna um novo array contendo apenas as as dívidas que ultrapasam **R$ 80,00**. Use `filter` para selecionar apenas os devedores.

### 📌 Exemplo de uso:
```javascript
const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];  

const devedores = filtrarEleitores(dividas);  

console.log(devedores);

// Resultado esperado: [95.90, 180.50, 105.99]
```

---

## Exercício 8 - Total de Vendas
**Descrição:** Crie uma função chamada `calcularTotalVendas` que recebe um array de valores e retorna o total da soma de todos os valores.

### 📌 Exemplo de uso:
```javascript
const vendas = [150, 200, 100, 50];  

let totalVendas = calcularTotalVendas(vendas);  

console.log(totalVendas);

// Resultado esperado: 500
```

---