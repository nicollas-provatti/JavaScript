# 1️⃣ Listando as Propriedades de um Objeto

## Descrição:
Crie uma função chamada listarPropriedades que recebe um objeto e retorna um array contendo todas as suas chaves (propriedades).

### 📌 Requisitos:
- Utilize `Object.keys()`.

### 📌 Exemplo de uso:
```javascript
let carro = { marca: "Toyota", modelo: "Corolla", ano: 2022 };  
listarPropriedades(carro);  
// Resultado esperado: ["marca", "modelo", "ano"]
```
--- 

# 2️⃣ Obtendo os Valores de um Objeto

## Descrição:
Crie uma função chamada listarValores que recebe um objeto e retorna um array contendo todos os valores das propriedades desse objeto.

### 📌 Requisitos:
- Utilize `Object.values()`.

### 📌 Exemplo de uso:
```javascript
let pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };  
listarValores(pessoa);  
// Resultado esperado: ["Ana", 25, "São Paulo"]
```

--- 

# 3️⃣ Transformando um Objeto em uma Matriz

## Descrição:
Crie uma função chamada objetoParaMatriz que recebe um objeto e retorna uma matriz onde cada elemento é um array com [chave, valor].

### 📌 Requisitos:
- Utilize `Object.entries()`.

### 📌 Exemplo de uso:
```javascript
let produto = { nome: "Notebook", preco: 3000, estoque: 10 };  
objetoParaMatriz(produto);  
/* Resultado esperado:  
[
  ["nome", "Notebook"],
  ["preco", 3000],
  ["estoque", 10]
] */
```

--- 

# 4️⃣ Definindo Propriedades com Restrições

## Descrição:
Crie um objeto usuario e use Object.defineProperty() para adicionar uma propriedade "senha", que:

### 📌 Requisitos:
- **Não pode ser listada** (enumerable: false).
- **Não pode ser alterada** (writable: false).
- **Pode ser lida normalmente**.

### 📌 Exemplo de uso:
```javascript
let usuario = { nome: "Carlos" };
definirSenha(usuario, "12345");

console.log(usuario.senha);  
// Resultado esperado: "12345"

usuario.senha = "novaSenha";  
console.log(usuario.senha);  
// Resultado esperado: "12345" (não altera)

console.log(Object.keys(usuario));  
// Resultado esperado: ["nome"] (senha não aparece)
```

--- 

# 5️⃣ Mesclando Objetos 

## Descrição:
Crie uma função chamada mesclarObjetos que recebe dois objetos e retorna um novo objeto que contém as propriedades dos dois objetos mesclados.

### 📌 Requisitos:
- Utilize `Object.assign()`.

### 📌 Exemplo de uso:
```javascript
let obj1 = { a: 1, b: 2 };  
let obj2 = { b: 3, c: 4 };  
mesclarObjetos(obj1, obj2);  
// Resultado esperado: { a: 1, b: 3, c: 4 }
```

--- 

# 6️⃣ Restringindo Modificações no Objeto

## Descrição:
Crie três funções que recebam um objeto e apliquem as seguintes restrições:

### 📌 Requisitos:
- `impedirExtensao(obj)` → Usa `Object.preventExtensions()` para impedir a adição de novas propriedades ao objeto.
- `selarObjeto(obj)` → Usa `Object.seal()` para impedir a adição e remoção de propriedades.
- `congelarObjeto(obj)` → Usa `Object.freeze()` para impedir qualquer modificação no objeto.

### 📌 Exemplo de uso:
```javascript
let produto = { nome: "Celular", preco: 1500 };

// Aplicando restrições
impedirExtensao(produto);
produto.cor = "Preto";  
console.log(produto.cor);  
// Resultado esperado: undefined (não pode adicionar)

selarObjeto(produto);
delete produto.preco;  
console.log(produto.preco);  
// Resultado esperado: 1500 (não pode remover)

congelarObjeto(produto);
produto.preco = 2000;  
console.log(produto.preco);  
// Resultado esperado: 1500 (não pode alterar)
```

--- 