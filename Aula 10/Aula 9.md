# 📘 Aula 10 - Criação de Elementos

### 🔵 Navegando entre Elementos HTML
O DOM permite que a gente navegue entre os elementos de uma página usando algumas propriedades que representam as relações entre eles — como pai, filho, irmão. Aqui estão as principais:

#### 🔹 `parentElement`
A propriedade `parentElement` é usada para acessar o **elemento pai** de um nó.

**Exemplo:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    const item = document.querySelector('li');
    console.log(item.parentElement); // Exibe o elemento pai (ul)  
</script>
```

#### 🔹 `children`
A propriedade `children` é usado para acessar os **elementos filhos** de um nó.

**Exemplo:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    const lista = document.querySelector('ul');
    console.log(lista.children);   // HTMLCollection com os elementos 
</script>
```

#### 🔹 `firstElementChild`
A propriedade `firstElementChild` é usado para acessar o **primeiro elemento filho** de um nó.

**Exemplo:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    const lista = document.querySelector('ul');
    console.log(lista.firstElementChild); // Primeiro <li>
</script>
```

#### 🔹 `lastElementChild`
A propriedade `lastElementChild` é usado para acessar o **último elemento filho** de um nó.

**Exemplo:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    const lista = document.querySelector('ul');
    console.log(lista.lastElementChild); // Último <li>
</script>
```

#### 🔹 `nextElementSibling`
A propriedade `nextElementSibling` é usado para acessar o **próximo elemento irmão** de um elemento.

**Exemplo:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    const primeiroItem = document.querySelector('li');
    console.log(primeiroItem.nextElementSibling); // Próximo <li>
</script>
```

#### 🔹 `previousElementSibling`
A propriedade `previousElementSibling` é usado para acessar o **elemento irmão anterior** de um elemento.

**Exemplo:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
    const primeiroItem = document.querySelector('li');
    const segundoItem = primeiroItem.nextElementSibling;
    console.log(segundoItem.previousElementSibling); // Primeiro <li>
</script>
```

#### 🔹 Resumo 

| Propriedade              | Descrição                                                                 |
|--------------------------|---------------------------------------------------------------------------|
| `parentElement`          | Retorna o elemento pai de um elemento.                                   |
| `children`               | Retorna uma coleção (HTMLCollection) com os filhos elementos.            |
| `firstElementChild`      | Retorna o primeiro filho que é um elemento (ignora nós de texto).        |
| `lastElementChild`       | Retorna o último filho que é um elemento.                                |
| `nextElementSibling`     | Retorna o próximo irmão que é um elemento.                               |
| `previousElementSibling` | Retorna o irmão anterior que é um elemento.                              |

---

### 🔵 Criando e Adicionando Elementos


No DOM, podemos criar novos elementos dinamicamente e adicioná-los à página. Isso é útil quando queremos modificar ou expandir a estrutura da nossa página sem recarregar a página inteira. Aqui estão os principais métodos para criar e adicionar elementos ao DOM:

#### 🔹 `createElement() `
Esse método é usado para **criar um novo elemento HTML**. O método recebe como argumento o nome da tag do elemento que você deseja criar.

**Exemplo**
```js
const novoItem = document.createElement('li');
novoItem.textContent = 'Item criado dinamicamente'; // Adiciona texto ao elemento
```

Agora que temos o elemento, podemos manipulá-lo e adicioná-lo ao DOM.

#### 🔹 `appendChild()`
O método `appendChild()` permite que você **adicione** um nó como filho de outro elemento. Esse método é muito útil para adicionar o elemento recém-criado à árvore do DOM.

**Exemplo**
```html
<ul>
</ul>

<script>
    const lista = document.querySelector('ul');
    lista.appendChild(novoItem); // Adiciona o novo <li> como filho da <ul>
</script>
```

Isso vai adicionar o item criado ao final da lista (`<ul>`).

#### 🔹 ``insertBefore()``
O método `insertBefore()` **insere** um nó antes de outro nó dentro do mesmo pai. Ele é útil quando você quer adicionar um elemento em um ponto específico de uma lista, por exemplo.

**Exemplo**
```js
const primeiroItem = document.querySelector('li');
lista.insertBefore(novoItem, primeiroItem); // Insere o novo <li> antes do primeiro <li>
```

#### 🔹 `cloneNode()`
O método `cloneNode()` cria uma **cópia** exata do nó (elemento ou texto). A cópia pode ser profunda (copiando também os filhos) ou superficial (somente o próprio nó).

**Exemplo**
```js
const itemOriginal = document.querySelector('li');
const itemClone = itemOriginal.cloneNode(true); // true para copiar os filhos também
```

---

#### 🔹 Resumo 
| Método            | Descrição                                                                  |
|-------------------|----------------------------------------------------------------------------|
| `createElement()`  | Cria um novo elemento HTML.                                                |
| `appendChild()`    | Adiciona um elemento como último filho de outro elemento.                 |
| `insertBefore()`   | Insere um elemento antes de outro elemento filho especificado.            |
| `cloneNode()`      | Clona um elemento (podendo incluir ou não seus filhos).                   |

---

### 🔵 Removendo e Substituindo Elementos
Além de criar e adicionar elementos ao DOM, é igualmente importante saber remover e substituir elementos existentes. Isso permite que o conteúdo da página seja dinâmico e interativo. Aqui estão os principais métodos:

#### 🔹 `removeChild()`
O método `removeChild()` **remove um elemento filho** de um elemento pai. Você precisa primeiro selecionar o pai e depois o filho que quer remover.

**Exemplo**
```js
const lista = document.querySelector('ul');
const primeiroItem = lista.querySelector('li');
lista.removeChild(primeiroItem); // Remove o primeiro <li> da lista
```

**Atenção:** Se tentar remover um filho que não pertence ao pai selecionado, ocorrerá um erro.Atenção: Se tentar remover um filho que não pertence ao pai selecionado, ocorrerá um erro.

#### 🔹 `remove()`
O método `remove()` é mais direto: ele remove o próprio elemento sem precisar do pai.
É mais moderno e simples de usar.

**Exemplo**
```js
const item = document.querySelector('li');
item.remove(); // Remove o próprio <li>
```

Esse método é suportado na maioria dos navegadores modernos.

#### 🔹 `replaceChild()`
O método `replaceChild()` permite substituir um filho existente por outro.

A ordem dos parâmetros é:
```js
const lista = document.querySelector('ul');
const novoItem = document.createElement('li');
novoItem.textContent = 'Novo item substituído';

const primeiroItem = lista.querySelector('li');
lista.replaceChild(novoItem, primeiroItem); // Substitui o primeiro <li> pelo novo
```

#### 🔹 Resumo
| Método            | Descrição                                                                  |
|-------------------|----------------------------------------------------------------------------|
| `removeChild()`    | Remove um elemento filho de um elemento pai.                              |
| `remove()`         | Remove o próprio elemento do DOM.                                          |
| `replaceChild()`   | Substitui um elemento filho por outro elemento.                           |

---
