# 📝 Exercícios

---

## Exercício 1 - Cadastro de Usuário
**Descrição:** Crie uma função chamada criarUsuário que receba `nome`, `idade` e `e-mail` como parâmetros e retorne um objeto representando o produto com essas propriedades.

**Exemplo de uso:**
```js
const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com");
```

---

## Exercício 2 - Atualizar Idade
**Descrição:** Crie uma função chamada `atualizarIdade` que receba um **objeto** usuario e um **número** representando a nova idade do usuário. A função deve atualizar o valor da propriedade idade.

**Exemplo de uso:**
```js
const usuario = { nome: "Marcos", idade: 19, email: "marquinhos@hotmail.com" };

atualizarIdade(usuario, 25);

console.log(usuario.idade);  
// Resultado esperado: 25
```

---

## Exercício 3 - Explorador de Objetos
**Descrição:** Crie uma função chamada `explorarObjeto` que recebe dois parâmetros um **objeto** e uma **operação**, que pode ser `"chaves"`, `"valores"` ou `"entradas"`. A função deve retornar, respectivamente:

- Para `"chaves"`: um array com as propriedades (usar `Object.keys`)
- Para `"valores"`: um array com os valores (usar `Object.values`)
- Para `"entradas"`: um array com pares [chave, valor] (usar `Object.entries`)

Se for passada uma operação inválida, a função deve retornar a mensagem: `"Operação inválida."`

**Exemplo de uso:**
```js
const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Recife"
};

console.log(explorarObjeto(pessoa, "chaves"));
// Resultado esperado: ["nome", "idade", "cidade"]

console.log(explorarObjeto(pessoa, "valores"));
// Resultado esperado: ["Ana", 28, "Recife"]

console.log(explorarObjeto(pessoa, "entradas"));
// Resultado esperado: [["nome", "Ana"], ["idade", 28], ["cidade", "Recife"]]

console.log(explorarObjeto(pessoa, "teste"));
// Resultado esperado: "Operação inválida."
```

---

## Exercício 4 - Catálogo de Produtos
**Descrição:** Crie uma função chamada `exibirCatalogo` que receba um array de objetos representando produtos e exiba no console o nome e o preço de cada um usando `for...in`.

**Exemplo de uso:**
```js
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Webcam", preco: 250 }
];

exibirCatalogo(produtos);

// Resultado esperado:
// Catálogo de Produtos:
// Teclado - R$100
// Monitor - R$800
// Webcam - R$250
```

---

## Exercício 5 - Proteção de Objetos
**Descrição:** Crie uma função chamada `protegerObjeto` que recebe dois parâmetros um **objeto** e um modo de proteção, que pode ser:

- `"extensivel"`: aplica `Object.preventExtensions`
- `"selado"`: aplica `Object.seal`
- `"congelado"`: aplica `Object.freeze`

A função deve aplicar a proteção correspondente ao objeto e retornar um **resumo** em forma de objeto com as seguintes informações:

- `extensivel`: `true` ou `false` (indica se é possível adicionar novas propriedades)
- `selado`: `true` ou `false` (indica se o objeto está selado)
- `congelado`: `true` ou `false` (indica se o objeto está congelado)

**Exemplo de uso:**
```js
const produto = { nome: "Câmera", preco: 1200 };

const resultado = protegerObjeto(produto, "congelado");

console.log(resultado);
// Resultado esperado: { extensivel: false, selado: false, congelado: true }
```

---

## Exercício 6 - Sistema de Gerenciamento de Produtos
**Descrição:** Crie uma função chamada gerenciarProdutos que simula um sistema de gerenciamento de produtos de uma loja. A função deve receber dois parâmetros:

- Um **array de produtos**, onde cada produto é um objeto com as propriedades:

    - nome (string)
    - preco (número)
    - estoque (número)


* Um **comando** (string) que define a ação a ser realizada no sistema.

As ações disponíveis são:

1. `"listarDisponiveis"`: retorna um novo array contendo apenas os produtos com estoque maior que 0.

2. `"buscarProduto"`: recebe também um terceiro parâmetro com o nome do produto, e retorna o objeto do produto correspondente. Use a função `find` para encontrar o produto pelo nome.

3. `"calcularValorTotal"`: retorna o valor total de todos os produtos em estoque (preço * estoque de cada).

4. `"atualizarEstoque"`: recebe também o nome do produto e a nova quantidade, e atualiza o estoque do produto correspondente.

**Exemplo de uso**:
```javascript
const produtos = [
  { nome: "Celular", preco: 2000, estoque: 5 },
  { nome: "Notebook", preco: 3500, estoque: 0 },
  { nome: "Fone de Ouvido", preco: 250, estoque: 12 }
];

// Listar disponíveis
console.log(gerenciarProdutos(produtos, "listarDisponiveis"));
// Resultado esperado: [Celular, Fone de Ouvido]

// Buscar um produto
console.log(gerenciarProdutos(produtos, "buscarProduto", "Notebook"));
// Resultado esperado: { nome: "Notebook", preco: 3500, estoque: 0 }

// Calcular valor total
console.log(gerenciarProdutos(produtos, "calcularValorTotal"));
// Resultado esperado: 2000*5 + 250*12 = 10000 + 3000 = 13000

// Atualizar estoque
gerenciarProdutos(produtos, "atualizarEstoque", "Notebook", 3);
console.log(produtos[1].estoque);  
// Resultado esperado: 3
```

---
