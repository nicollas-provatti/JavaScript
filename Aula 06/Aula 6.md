# 📘 Aula 6 - Objetos

### 🔍 O que são objetos
No JavaScript, objetos são estruturas que armazenam pares de chave e valor. Eles representam coisas do mundo real de maneira organizada. Assim como os arrays os objetos crescem e diminuem dinamicamente.
Por exemplo, podemos representar uma pessoa com características (nome, idade, profissão) usando um objeto:

```js
const pessoa = {
    nome: "Ana",
    idade: 25,
    profissao: "Engenheira"
};
```
- `nome`, `idade` e `profissao` são chamadas de **propriedades** (ou atributos).
- Cada propriedade tem um **valor** associado a ela.

Ou seja, **um objeto é uma coleção de dados relacionados**, que podem ser de diferentes tipos: números, strings, arrays, outros objetos ou funções.

---

### 🔵 Criação de Objetos
Existem várias maneiras de criar objetos em JavaScript. As principais são:

#### 🔹 Usando a notação literal
É a forma mais simples e usada no dia a dia:

**Exemplo:**
```js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};
```
Nesse exemplo, estamos criando um objeto `carro` com três propriedades.

#### 🔹 Usando o `new Object()`
Forma alternativa, menos comum hoje em dia:

**Exemplo:**
```js
const pessoa = new Object();
pessoa.nome = "João";
pessoa.idade = 30;
```
Nesse exemplo, criamos o objeto vazio e adicionamos as propriedades depois.


#### 🔹 Usando funções construtoras
Para criar vários objetos com a mesma estrutura:

**Exemplo:**
```js
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("Maria", 28);
const pessoa2 = new Pessoa("Pedro", 35);
```
Nesse exemplo, usamos `this` para definir as propriedades e criamos novos objetos com `new`.

#### 🔹 Usando classes (ES6)
Forma moderna e parecida com outras linguagens de programação:

**Exemplo:**
```js
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Lucas", 22);
```
Com `class`, deixamos o código mais organizado e claro.

**Em resumo:** o jeito mais comum para objetos simples é notação literal ({}), mas para projetos maiores, usamos funções construtoras ou classes.

---

### 🔵 O `this`
O `this` é uma palavra-chave muito importante em JavaScript. Ele representa o **contexto de execução atual**, ou seja, quem está "falando" ou "executando" o código naquele momento. O valor de `this` pode mudar dependendo de como uma função é chamada.

#### 🔹 Exemplos:

- **Dentro de um objeto:** Quando usamos uma função dentro de um objeto, `this` se refere ao próprio objeto:

```js
const pessoa = {
    nome: "Ana",
    falar: function() {
        console.log(this.nome);
    }
};

pessoa.falar(); // Ana
```
Aqui, `this` aponta para o objeto `pessoa`.

-  **Fora de qualquer objeto:** Se você usar `this` fora de um objeto (no escopo global), ele vai se referir ao **objeto global**:

    - No navegador: `window`
    * No Node.js: `global`

```js
console.log(this); // No navegador, imprime o objeto window
```

- **Em funções normais:** Dentro de funções "soltas", `this` também aponta para o objeto global:

```js
function mostrar() {
    console.log(this);
}

mostrar(); // window (no navegador)
```

- **Em arrow functions:** Arrow functions NÃO criam seu próprio `this`. Elas pegam o `this` de onde foram definidas:

```js
const pessoa = {
    nome: "Carlos",
    falar: () => {
        console.log(this.nome);
    }
};

pessoa.falar(); // undefined
```
Aqui o `this` não aponta para `pessoa`, e sim para o contexto externo (global).

---

### 🔵  Objetos Complexos
Até agora vimos objetos simples, mas em JavaScript objetos podem ficar muito mais ricos, contendo outros objetos, arrays e funções como propriedades. A isso chamamos de objetos complexos. Esses objetos nos permitem modelar estruturas de dados mais realistas e completas!

#### 🔹 Exemplo:
```js
const aluno = {
    nome: "João",
    idade: 20,
    cursos: ["Matemática", "Física", "Programação"],
    endereco: {
        rua: "Rua A",
        numero: 123
    },
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu estudo ${this.cursos.join(", ")}.`);
    }
};
```
Nesse exemplo:

- `cursos` é um **array** dentro do objeto.

* `endereco` é outro **objeto** dentro do objeto principal.

- `apresentar` é uma **função** (ou método) que usa this.

#### 🔹 Acessando os dados

Acessar propriedades simples:
```js
console.log(aluno.nome); // João
console.log(aluno.idade); // 20
```

Acessar elementos do array:
```js
console.log(aluno.cursos[1]); // Física
```

Acessar propriedades de um objeto interno:
```js
console.log(aluno.endereco.rua); // Rua A
```

Chamar um método:
```js
aluno.apresentar(); // Olá, meu nome é João e eu estudo Matemática, Física, Programação.

```

Em JavaScript, objetos podem guardar tudo: números, strings, arrays, outros objetos e até funções. Essa flexibilidade é o que torna os objetos tão poderosos!

---

### 🔵 Array de Objetos
Além de termos arrays simples ou objetos isolados, muitas vezes precisamos de um array cheio de objetos — cada objeto representando, por exemplo, uma pessoa, um produto, uma tarefa, etc. Essa estrutura é muito comum em projetos reais!

#### 🔹 Exemplo:
```js
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Smartphone", preco: 1500 },
    { nome: "Tablet", preco: 1200 }
];
```
Nesse exemplo:

- `produtos` é um **array**.

* Cada item dentro do array é um **objeto** com propriedades (`nome` e `preco`).

#### 🔹 Acessando os dados

Acessar o primeiro objeto:
```js
console.log(produtos[0]);
// { nome: "Notebook", preco: 2500 }
```

Acessar uma propriedade específica:
```js
console.log(produtos[0].nome); 
// Notebook
```

#### 🔹 Percorrendo um array de objetos
Podemos usar `for`, `forEach`, `for...of`, ou `map` para percorrer:

```js
produtos.forEach(produto => {
    console.log(`${produto.nome} custa R$${produto.preco}`);
});
```

Um **array de objetos** é uma estrutura poderosa que combina o melhor dos dois mundos: listas organizadas (arrays) + dados ricos (objetos). É super utilizado em sistemas para representar coleções de informações.

---

### 🔵 Métodos de Objetos
O JavaScript oferece vários métodos prontos (da classe `Object`) para **interagir** e **controlar** objetos. Vamos ver os principais:

#### 🔹 `keys()`
Retorna um array com os **nomes (chaves)** de todas as propriedades do objeto.

```js
const pessoa = { nome: "Ana", idade: 25 };
console.log(Object.keys(pessoa)); 
// Saída: ["nome", "idade"]
```

#### 🔹 `values()`
Retorna um array com os **valores** de todas as propriedades do objeto.

```js
console.log(Object.values(pessoa)); 
// Saída: ["Ana", 25]
```

#### 🔹 `entries()`
Retorna um array de arrays, onde cada sub-array contém o **[chave, valor]** de cada propriedade.

```js
console.log(Object.entries(pessoa)); 
// Saída: [["nome", "Ana"], ["idade", 25]]
```

#### 🔹 `defineProperty()`
Permite **criar** ou **modificar** uma propriedade de um objeto de forma mais controlada. Você pode definir:
- se a propriedade aparece em laços (`enumerable`)
* se ela pode ser alterada (`writable`)
- se pode ser deletada (`configurable`)

```js
const produto = {};

Object.defineProperty(produto, 'nome', {
    value: 'Camisa',
    writable: false, // não pode alterar
    enumerable: true, // aparece no for...in
});

console.log(produto.nome); // Camisa
produto.nome = 'Calça';
console.log(produto.nome); // ainda Camisa
```

#### 🔹 `assign()`
**Copia** as propriedades de um ou mais objetos para um objeto destino.

```js
const a = { cor: 'vermelho' };
const b = { tamanho: 'M' };
const c = Object.assign({}, a, b);

console.log(c);
// Saída: { cor: "vermelho", tamanho: "M" }
```

#### 🔹 `preventExtensions()`
**Impede** que novas propriedades sejam adicionadas ao objeto.

```js
const carro = { modelo: "Civic" };
Object.preventExtensions(carro);

carro.marca = "Honda"; 
console.log(carro.marca); 
// undefined (não foi adicionada)
```

#### 🔹 `seal()`
**Não permite** adicionar ou remover propriedades, apenas **modificar** as existentes.

```js
const usuario = { nome: "Lucas" };
Object.seal(usuario);

usuario.idade = 30; 
delete usuario.nome; 
usuario.nome = "Pedro"; 

console.log(usuario);
// Saída: { nome: "Pedro" }
```

#### 🔹 `freeze()`
Congela totalmente o objeto: **não pode** adicionar, remover nem alterar propriedades.

```js
const curso = { nome: "JS" };
Object.freeze(curso);

curso.nome = "Python"; 
curso.duracao = "40h";

console.log(curso);
// Saída: { nome: "JS" }
```

#### 🔹 Resumo

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

---