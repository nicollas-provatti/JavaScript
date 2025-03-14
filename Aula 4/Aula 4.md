#  Arrays e Objetos em JavaScript

##  Definição de Array

Um array é uma estrutura de dados que armazena uma **coleção** ordenada de elementos. Cada elemento pode ser acessado por um índice numérico, que geralmente começa em 0.


![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20240410101419/Getting-Started-with-Array-Data-Structure.webp "Array")

### Arrays em JavaScript
 
Em JavaScript, os arrays são objetos especiais que permitem armazenar **diferentes** tipos de dados (números, strings, objetos, funções, etc.). Eles podem crescer **dinamicamente** e possuem diversos métodos para manipulação de elementos.

---

## Declaração, Atribuição e Inicialização de Array

Existem diferentes formas de declarar um array em JavaScript:
```javascript
// Declaração vazia
let meuArray = [];

// Atribuição
meuArray[0] = 1
meuArray[1] = 2
meuArray[2] = 3  // meuArray = [1, 2, 3]

// Declaração e inicialização
let numeros = [1, 2, 3, 4, 5];

// Com diferentes tipos de dados
const valores = [1, 1.7, "olá", true]
```

---

## Métodos de Arrays

Os arrays possuem diversos métodos para manipulação de elementos:

| Método                          | O que faz                                               |
|---------------------------------|---------------------------------------------------------|
| `push(valor)`                     | Adiciona um elemento ao final do array                  |
| `pop()`                           | Remove o último elemento do array                       |
| `shift()`                         | Remove o primeiro elemento do array                     |
| `unshift(valor)`                  | Adiciona um elemento no início do array                 |
| `delete array[indice]`            | Remove um elemento sem reorganizar os índices           |
| `sort()`                          | Ordena os elementos do array                            |
| `splice(inicio, qtd, ...novosElementos)` | Remove ou substitui elementos em uma posição específica |
| `slice(inicio, fim)`              | Retorna uma parte do array sem modificá-lo              |
| `concat(array2)`                  | Junta dois ou mais arrays e retorna um novo array       |

Para exemplos de cada método consulte o arquivo **2.js**.

---

## Iteráveis: for...of, for...in, forEach

| Laço | O que faz |
|------|-----------|
| `for...of` | Itera sobre os **valores** de um array. |
| `for...in` | Itera sobre os **índices** de um array. |
| `forEach`  |  Executa uma função para cada elemento do array. |

```javascript
let numeros = [10, 20, 30];

// for...of
for (let num of numeros) {
  console.log(num); 
}

// for...in
for (let indice in numeros) {
  console.log(indice, numeros[indice]);
}

// forEach
numeros.forEach((num, indice) => console.log(indice, num));
```

Para mais exemplos consulte o arquivo **3.js**.

### `map`, `filter` e `reduce`

| Método | O que faz |
|--------|-----------|
| `map(callback)` | Cria um **novo array** (com otamanho do array incial) aplicando uma função a cada elemento. |
| `filter(callback)` | Retorna um **novo array** contendo apenas os elementos que atendem a uma condição. |
| `reduce(callback, valorInicial)` | Reduz o array a um **único** valor. |

Para exemplos de cada método consulte os arquivos **4.js, 6.js e 7.js**.

### Difierença entre `map` e `forEach`

- `map` retorna um novo array com os valores transformados.

- `forEach` apenas itera sobre o array sem retornar um novo array.

```javascript
let numeros = [1, 2, 3];

let dobrados = numeros.map(num => num * 2); // [2, 4, 6]
numeros.forEach(num => console.log(num * 2)); // Apenas imprime na tela
```
Para saber mais, consulte o [artigo.](https://www.freecodecamp.org/portuguese/news/as-diferencas-entre-foreach-e-map-que-todo-desenvolvedor-deveria-saber/)

---


## Definição de Objeto

Um objeto é uma **coleção** de **pares chave-valor**, onde cada chave é uma string e pode armazenar diferentes tipos de valores.

### Objetos em JavaScript

Em JavaScript, os objetos são dinâmicos e podem ser modificados em tempo de execução.

---

## Criação de Objetos

- **Objeto Literal:**
    ```javascript
    let pessoa = { 
        nome: "João", 
        idade: 30 
    };
    ```
- **new Object():**
    ```javascript
    let pessoa = new Object();
    pessoa.nome = "Maria";
    pessoa.idade = 25;
    ```
- **Função Construtora:**
    ```javascript
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    let p1 = new Pessoa("Carlos", 40);
    ```
- **Classe (ES6):**
    ```javascript
    class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        }
    }
    let p2 = new Pessoa("Ana", 22);
    ```
---

## Propriedades de Objetos (Objetos Complexos)

Um objeto pode armazenar outros objetos, arrays e funções:

```javascript
let aluno = {
  nome: "Pedro",
  notas: [8, 9, 7],

  endereco: { 
    cidade: "São Paulo", 
    bairro: "Centro" 
    },

  falar: function () {
    console.log("Oi, meu nome é " + this.nome);
  }
};
```

---

## Métodos de Objeto

| Método                | O que faz                                                 |
|-----------------------|-----------------------------------------------------------|
| `keys(obj)`              | Retorna chaves do objeto                                  |
| `values(obj)`            | Retorna valores do objeto                                 |
| `entries(obj)`           | Retorna pares chave/valor                                 |
| `defineProperty(obj, prop, desc)`    | Define uma propriedade com configurações específicas      |
| `assign(destino, origem)`            | Copia propriedades de um ou mais objetos                  |
| `preventExtensions(obj)` | Impede adicionar novas propriedades                       |
| `seal(obj)`              | Impede adicionar/remover, mas permite modificar           |
| `freeze(obj)` |  Impede qualquer modificação no objeto. |

Para exemplos de cada método consulte o arquivo **11.js**.





































