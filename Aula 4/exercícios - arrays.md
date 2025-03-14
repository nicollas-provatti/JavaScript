## 1️⃣ Gerenciador de Lista de Tarefas

### 📖 Descrição:
Crie uma função chamada gerenciarTarefas que recebe um array de tarefas e uma ação a ser realizada. As ações possíveis são:

- **"adicionarInicio"**: adiciona uma nova tarefa no início da lista.
- **"adicionarFim"**: adiciona uma nova tarefa no final da lista.
- **"removerInicio"**: remove a primeira tarefa da lista.
- **"removerFim"**: remove a última tarefa da lista.

### 📌 Requisitos:

- A função deve receber dois parâmetros: o array de tarefas e a ação a ser realizada.
- Se a ação for "adicionarInicio" ou "adicionarFim", a função também deve receber um terceiro parâmetro com a tarefa a ser adicionada.
- Retorne o array atualizado após a operação.

### 📌 Exemplo de uso:
```javascript
const tarefas = ["Estudar", "Treinar", "Ler"];  
gerenciarTarefas(tarefas, "adicionarFim", "Dormir");  
// Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]
```

---

## 2️⃣ Manipulando Notas de um Aluno 

### 📖 Descrição:
Crie uma função chamada calcularMedia que recebe um array de notas de um aluno e retorna a média das três melhores notas.

### 📌 Requisitos:

- Ordene o array de forma decrescente usando sort().
- Pegue as três primeiras notas usando slice().
- Calcule e retorne a média dessas notas.

### 📌 Exemplo de uso:
``` javascript
const notas = [5, 8, 9, 3, 10, 7];  
calcularMedia(notas);  
// Resultado esperado: média das três maiores notas (10, 9 e 8) => 9.0
```

---

## 3️⃣ Mesclando e Manipulando Listas (concat, length, splice)

### 📖 Descrição:
Crie uma função chamada gerenciarListas que recebe dois arrays e uma ação a ser realizada:

- **"juntar"**: mescla os dois arrays em um só usando concat().
- **"removerUltimos"**: remove os últimos n elementos do array resultante usando splice().

### 📌 Requisitos:

- A função deve receber três parâmetros: os dois arrays e a ação a ser realizada.
- Se a ação for "removerUltimos", um quarto parâmetro deve ser informado com a quantidade de elementos a serem removidos.

### 📌 Exemplo de uso:
``` javascript
const lista1 = ["Maçã", "Banana"];  
const lista2 = ["Uva", "Laranja", "Pera"];  

gerenciarListas(lista1, lista2, "juntar");  
// Resultado esperado: ["Maçã", "Banana", "Uva", "Laranja", "Pera"]

gerenciarListas(lista1, lista2, "removerUltimos", 2);  
// Resultado esperado: ["Maçã", "Banana", "Uva"]
```

---

## 4️⃣ Somando números

### 📖 Descrição:
Crie uma função chamada `somarNumeros` que recebe um array e retorna a soma dos números que são divisíveis por 2 e 3.

### 📌 Requisitos:

- Use `for...in` para percorrer o array.

### 📌 Exemplo de uso:
```javascript
const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];
somarNumeros(numeros)
// Resultado esperado: 42 (6 + 24 + 12)
```

--- 

## 5️⃣  Maior e Menor

### 📖 Descrição:
Crie uma duas funções chamadas  `maior` e `menor` que recebem um array de números e retornam o maior e o menor elemento, respectivamente.

### 📌 Requisitos:

- Use `for...of` para percorrer o array.
- Informe o maior e o menor numero encontrado.

### 📌 Exemplo de uso:
```javascript
const numeros = [-1, 3, 8, -2, 4, 10]
maior(numeros)
menor(numeros)
// Resultado esperado: 10 -2
```

---

## 6️⃣ Acima da Média

### 📖 Descrição:

Crie uma função chamada `calcularMedia` que recebe um array de notas e retorna a média delas. Depois crie outra função chamada `acimaMedia` que verifica quantas notas estão acima da média.

### 📌 Requisitos:

- Use `forEach` para somar todas as notas.
- Divida pelo total de notas para calcular a média.
- Use `forEach` para checar quantas notas estão acima da média.

### 📌 Exemplo de uso:
```javascript
const notas = [6, 8, 9, 5]; 
let media = calcularMedia(notas);  
let aprovados = acimaMedia(media);
```

---
## 7️⃣ Transformando um Array de Preços

### 📖 Descrição:
Crie uma função chamada `converterMoeda` que recebe um array de preços em dólares e retorna um novo array com os valores convertidos para reais (cotação: **1 dólar = 5 reais**).

### 📌 Requisitos:
- Use `map` para multiplicar cada valor por 5.
- Retorne o novo array com os preços convertidos.

### 📌 Exemplo de uso:
```javascript
let precosDolares = [10, 20, 30];  
converterMoeda(precosDolares);  
// Resultado esperado: [50, 100, 150]
```
--- 

## 8️⃣ Filtrando Devedores

### 📖 Descrição:
Crie uma função chamada `filtrarDevedores` que recebe um array de dívidas e retorna um novo array contendo apenas as as dívidas que ultrapasam **R$ 80,00**.

### 📌 Requisitos:
Use `filter` para selecionar apenas os devedores.

### 📌 Exemplo de uso:
```javascript
let dividas = [95.90, 180.50, 22.99, 105.99, 30.50];  
filtrarEleitores(idades);  
// Resultado esperado: [95.90, 180.50, 105.99]
```
---

## 9️⃣ Total de Vendas

### 📖 Descrição:
Crie uma função chamada `calcularTotalVendas` que recebe um array de valores e retorna o total da soma de todos os valores

### 📌 Requisitos:

- Use `reduce` para somar os valores do array.

### 📌 Exemplo de uso:
```javascript
let vendas = [150, 200, 100, 50];  
calcularTotalVendas(vendas);  
// Resultado esperado: 500
```
---

