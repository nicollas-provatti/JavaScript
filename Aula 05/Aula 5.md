# 📘 Aula 5 – Arrays

### 🔍 O que são Arrays ?
Arrays são **estruturas de dados** que permitem armazenar **múltiplos valores em uma única variável**. Em JavaScript, um array pode conter **qualquer tipo de dado**, incluindo números, strings, objetos, outras arrays, ou até mesmo funções. Essa capacidade de armazenar vários itens em uma única estrutura faz com que arrays sejam essenciais quando precisamos trabalhar com coleções de dados.

#### 🔹 Características dos Arrays

- **Índice:** Cada valor dentro de um array é armazenado em uma posição específica chamada índice. O índice de um array em JavaScript começa sempre do zero (0).

* **Tipos de Dados Mistos:** Um array em JavaScript pode conter diferentes tipos de dados ao mesmo tempo, o que significa que você pode misturar números, strings, objetos, e até mesmo outros arrays dentro de um mesmo array.

- **Tamanho Dinâmico:** O tamanho de um array pode ser alterado a qualquer momento, e não é necessário especificar o número de elementos ao declarar um array. Ou seja, você pode adicionar ou remover elementos de um array conforme necessário.

---

### 🔵 Usando Arrays

#### 🔹 Declaração:
A declaração de um array é o processo de criar um array vazio ou com elementos, utilizando a notação de colchetes `[]`.

```js
const frutas = []; // Um array vazio
``` 

#### 🔹 Inicizalição:
A declaração de um array é o processo de atribuir valores ao array na hora de declaração.

```js
const numeros = [1, 2, 3, 4, 5]; // Array com números iniciais
const frutas = ['maçã', 'banana', 'laranja']; // Array com strings iniciais

```

#### 🔹 Atribuição:
A atribuição de um array é quando você associa um valor para uma posição do array.

```js
const frutas = []; // Array vazio
frutas[0] = 'maçã'; // Atribuindo um valor à posição 0
frutas[1] = 'banana'; // Atribuindo um valor à posição 1
console.log(frutas); // ['maçã', 'banana']
```

Você pode adicionar elementos a um array existente simplesmente atribuindo um valor a um índice específico.

#### 🔹 Acesso:
O acesso a um elemento do array pode ser feito usando o indice.

```js
const numeros = [1, 2, 3, 4, 5];
const primeiro = numeros[0];
console.log(primeiro); // 1
```

**Exemplo:**
```js
const numeros = [1, 2, 3];

numeros.push(4); // OK: adiciona um elemento
console.log(numeros); // [1, 2, 3, 4]

// numeros = [10, 20]; // ERRO: não pode reatribuir o array
```

---

### 🔵 Constantes em Arrays e Objetos
Quando criamos arrays e objetos em JavaScript, é considerado boa prática usar a palavra-chave const para declará-los. Por quê? Porque `const` protege a variável contra reatribuição. Ou seja, você não poderá substituir o array ou o objeto por outro valor acidentalmente.
**Mas atenção:** mesmo com `const`, o conteúdo interno (elementos ou propriedades) pode ser alterado!

---

### 🔵 Métodos de Arrays
JavaScript oferece diversos métodos para manipular arrays. Vamos detalhar os métodos mais comuns e importantes.

#### 🔹 `push()`
O método `push()` adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

**Exemplos:**
```js
const frutas = ['maçã', 'banana', 'laranja'];
frutas.push('morango');
console.log(frutas); // ['maçã', 'banana', 'laranja', 'morango']
```

Você também pode adicionar vários elementos de uma vez:

```js
frutas.push('uva', 'kiwi');
console.log(frutas); // ['maçã', 'banana', 'laranja', 'morango', 'uva', 'kiwi']
```

#### 🔹 `pop()`
O método `pop()` remove o último elemento de um array e o retorna. Este método altera o tamanho do array.

```js
const frutas = ['maçã', 'banana', 'laranja'];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // 'laranja'
console.log(frutas); // ['maçã', 'banana']
```

#### 🔹 `shift()`
O método `shift()` remove o primeiro elemento de um array e o retorna. Ele também altera o comprimento do array.

```js
const frutas = ['maçã', 'banana', 'laranja'];
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // 'maçã'
console.log(frutas); // ['banana', 'laranja']
```

#### 🔹 `unshift()`
O método `unshift()` adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.

```js
const frutas = ['banana', 'laranja'];
frutas.unshift('maçã');
console.log(frutas); // ['maçã', 'banana', 'laranja']
```

Assim como o `push()`, você pode adicionar vários elementos de uma vez:

```js
frutas.unshift('morango', 'kiwi');
console.log(frutas); // ['morango', 'kiwi', 'maçã', 'banana', 'laranja']

```

#### 🔹 `splice()`
O método `splice()` altera o conteúdo de um array removendo, substituindo ou adicionando elementos a qualquer posição do array. Ele recebe pelo menos dois parâmetros:

- O índice a partir do qual começar a modificar o array.
- O número de elementos a serem removidos a partir desse índice.

```js
// Removendo elementos
const frutas = ['maçã', 'banana', 'laranja', 'morango'];
frutas.splice(1, 2); // A partir do índice 1, remove 2 elementos
console.log(frutas); // ['maçã', 'morango']

```

```js
// Adicionando elementos
const frutas = ['maçã', 'banana', 'laranja'];
frutas.splice(1, 0, 'kiwi', 'cabeludinha'); // A partir do índice 1, não remove nada, apenas adiciona
console.log(frutas); // ['maçã', 'kiwi', 'cabeludinha', 'banana', 'laranja']

```

```js
// Substituindo elementos
const frutas = ['maçã', 'banana', 'laranja'];
frutas.splice(1, 1, 'morango', 'kiwi'); // Remove 1 elemento a partir do índice 1 e adiciona dois novos
console.log(frutas); // ['maçã', 'morango', 'kiwi', 'laranja']

```

#### 🔹 `slice()`
O método `slice()` retorna uma cópia rasa de uma parte do array original em um novo array, sem alterar o array original. Ele recebe dois parâmetros:

- O índice inicial (inclusivo).
- O índice final (exclusivo), que é opcional. Se não fornecido, o array é copiado até o final.

```js
let frutas = ['maçã', 'banana', 'laranja', 'morango'];
let algumasFrutas = frutas.slice(1, 3); // Copia do índice 1 ao 2
console.log(algumasFrutas); // ['banana', 'laranja']
console.log(frutas); // ['maçã', 'banana', 'laranja', 'morango'] - O array original não é modificado
```

Se o índice final não for fornecido, ele copia até o final:

```js
let algumasFrutas = frutas.slice(2);
console.log(algumasFrutas); // ['laranja', 'morango']
```

#### 🔹 `sort()`
O método `sort()` ordena os elementos de um array no local, alterando o array original. Por padrão, ele converte os elementos em strings e os ordena lexicograficamente. Para uma ordenação numérica ou personalizada, você pode fornecer uma função de comparação.

```js
const frutas = ['banana', 'laranja', 'maçã', 'morango'];
frutas.sort();
console.log(frutas); // ['banana', 'laranja', 'maçã', 'morango'] - Ordenação alfabética
```

```js
const numeros = [10, 5, 100, 25];
numeros.sort();
console.log(numeros); // [100, 10, 25, 5] - Ordem lexicográfica, não numérica

// Para ordenação correta de números (crescente):
numeros.sort((a, b) => a - b);
console.log(numeros); // [5, 10, 25, 100]

// Para ordenação correta de números (decrescente):
numeros.sort((a, b) => b - a);
console.log(numeros); // [5, 10, 25, 100]

```

#### 🔹 Resumo

| Método                          | O que faz                                               |
|---------------------------------|---------------------------------------------------------|
| `push(valor)`                     | Adiciona um elemento ao final do array                  |
| `pop()`                           | Remove o último elemento do array                       |
| `shift()`                         | Remove o primeiro elemento do array                     |
| `unshift(valor)`                  | Adiciona um elemento no início do array                 |
| `splice(inicio, qtd, ...novosElementos)` | Remove ou substitui elementos em uma posição específica |
| `slice(inicio, fim)`              | Retorna uma parte do array sem modificá-lo              |
| `sort()`                          | Ordena os elementos do array                            |

---

### 🔵 Iteráveis
Em JavaScript, você pode iterar sobre arrays e outros tipos de objetos iteráveis (como strings, mapas e conjuntos) de diferentes maneiras. Vamos explorar três das formas mais comuns de fazer isso: 

#### 🔹 `for...of`
O loop `for...of` é utilizado para iterar sobre objetos iteráveis, como arrays, strings, mapas, conjuntos e outros tipos de coleções. Ele é uma maneira simples e clara de acessar o valor de cada elemento dentro de uma estrutura iterável.

**Exemplo:**
```js
const frutas = ['maçã', 'banana', 'laranja'];

for (let fruta of frutas) {
    console.log(fruta);
}
// Saída:
// maçã
// banana
// laranja
```

- O `for...of` é especialmente útil quando você quer acessar **diretamente o valor** de cada item em uma coleção.

#### 🔹 `for...in`
O loop for...in é usado para iterar sobre as propriedades de um objeto, ou os índices de um array. Ele retorna as chaves (ou índices) dos elementos, e não os próprios valores. É mais indicado para objetos e não para arrays, pois não garante a ordem dos elementos.

**Exemplo:**
```js
const frutas = ['maçã', 'banana', 'laranja'];

for (let index in frutas) {
    console.log(index); // Exibe os índices: 0, 1, 2
    console.log(frutas[index]); // Exibe os valores: 'maçã', 'banana', 'laranja'
}
// Saída:
// 0
// maçã
// 1
// banana
// 2
// laranja
```

- O `for...in` é útil quando você precisa acessar as propriedades de um objeto, ou os índices de um array.

#### 🔹 `forEach()`
O método `forEach()` é uma função de ordem superior que itera sobre os elementos de um array. Ele executa uma função de callback para cada elemento, passando o valor, o índice e o array original como parâmetros. forEach() não pode ser usado com objetos genéricos, apenas com arrays.

**Exemplo:**
```js
const frutas = ['maçã', 'banana', 'laranja'];

frutas.forEach(function(fruta, index) {
    console.log(index, fruta);
});
// Saída:
// 0 maçã
// 1 banana
// 2 laranja
```

Você também pode usar arrow functions para uma sintaxe mais curta:

```js
frutas.forEach((fruta, index) => {
    console.log(index, fruta);
});
```

- O `forEach()` é útil para quando você precisa executar uma operação em cada elemento de um array e não precisa de um valor de retorno (ele sempre retorna  `undefined`).

#### 🔹 Resumo

- O `for...of` é melhor para iterar sobre os **valores** de arrays e outros iteráveis.

* O `for...in` é melhor para iterar sobre as **propriedades** de objetos ou os **índices** de arrays.

- O `forEach()` é melhor para **arrays**, executando uma função para cada elemento, sem precisar de um retorno.

---

### 🔵 Métodos Importantes para Manipulação de Arrays
Esses métodos são ferramentas poderosas e essenciais em JavaScript para transformar e manipular dados dentro de arrays de forma funcional. Vamos explorar cada um deles!

#### 🔹 `map()` - Transformando Elementos
O método` map()` cria um **novo array** com os resultados da execução de uma função em cada elemento do array original. Ele é utilizado quando você deseja **transformar** os dados sem alterar o array original.

**Sintaxe:**
```js
array.map(callback(currentValue, index, array))
```
- **callback**: A função que é chamada em cada item do array.

- **currentValue**: O valor atual do elemento.

- **index**: O índice do item no array.

- **array**: O array original.

**Exemplo:**
```js
const numeros = [1, 2, 3, 4, 5];

let quadrados = numeros.map(function(num) {
    return num * num;
});

console.log(quadrados); // [1, 4, 9, 16, 25]
```

- **O que faz o** `map()`? Ele aplica a função fornecida em cada elemento do array e retorna um novo array com os resultados.


#### 🔹 `filter()`
O método `filter()` cria um **novo array** com todos os elementos que **passam em um teste** implementado pela função fornecida. Ele é útil quando você deseja **filtrar** dados de acordo com uma condição específica.

**Sintaxe:**
```js
array.filter(callback(currentValue, index, array))
```

- **callback**: A função que testa se o elemento deve ser incluído no novo array.
- **currentValue**: O valor atual do elemento.
- **index**: O índice do item no array.
- **array**: O array original.

**Exemplo:**
```js
const numeros = [1, 2, 3, 4, 5];

let pares = numeros.filter(function(num) {
    return num % 2 === 0;
});

console.log(pares); // [2, 4]
```

- **O que faz o** `filter()`? Ele retorna um novo array contendo apenas os elementos que atendem à condição especificada na função de callback.

#### 🔹 `reduce()`
O método `reduce()` executa uma função **reducedora** (que aplica uma operação cumulativa) em cada elemento de um array, resultando em um único valor. Ele é utilizado quando você quer **reduzir** o array a um único valor, como somas ou multiplicações.

**Sintaxe:**
```js
array.reduce(callback(acumulador, currentValue, index, array), valorInicial)
```

- **callback**: A função que define como o acumulador e o valor atual são manipulados.

- **acumulador**: O valor acumulado ao longo das iterações.

- **currentValue**: O valor atual do elemento.

- **index**: O índice do item no array.

- **array**: O array original.

- **valorInicial**: O valor inicial para o acumulador (opcional).

**Exemplo:**
```js
const numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0);

console.log(soma); // 15
```

#### 🔹 Resumo
- `map()`: **Transforma** os elementos do array, retornando um novo array com os resultados.

* `filter()`: **Filtra** os elementos com base em uma condição, retornando um novo array apenas com os elementos que passaram no teste.

- `reduce()`: **Reduz** todos os elementos de um array a um único valor, como uma soma ou uma concatenação.

#### 🔹 Quando usar cada um ?
- `map()`: Usado quando você quer **transformar** os dados, mantendo a mesma quantidade de elementos.

* `filter()`: Usado quando você quer **filtrar** os dados, mantendo apenas aqueles que atendem a uma condição.

- `reduce()`: Usado para **reduzir** os dados a um único valor.

---

### 🔵 Difierença entre `map` e `forEach`
O `map` retorna um novo array com os valores transformados. Já o `forEach` apenas itera sobre o array sem retornar um novo array.

```js
let numeros = [1, 2, 3];

let dobrados = numeros.map(num => num * 2); // [2, 4, 6]
numeros.forEach(num => console.log(num * 2)); // Apenas imprime na tela
```

Para saber mais, consulte este [artigo](https://www.freecodecamp.org/portuguese/news/as-diferencas-entre-foreach-e-map-que-todo-desenvolvedor-deveria-saber/).

---