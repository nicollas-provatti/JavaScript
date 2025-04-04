## Navegando Entre Elementos HTML (Nós)

O DOM (Document Object Model) representa a estrutura da página HTML como uma árvore de nós. Cada elemento pode ter **nós pais, filhos e irmãos**, permitindo a navegação entre eles.

### **Propriedades para Navegação:**

| **Propriedade** | **Descrição** |
|-----------------|---------------|
| `parentElement` | Retorna o elemento pai de um nó. |
| `children`      | Retorna uma coleção HTMLCollection contendo os elementos filhos (excluindo nós de texto e comentários).
| `firstElementChild` | Retorna o primeiro elemento filho (ignorando nós de texto). |
| `lastElementChild`| Retorna o último elemento filho. |
| `nextElementSibling` | Retorna o **próximo** irmão do elemento na árvore DOM. |
| `previousElementSibling`| Retorna o irmão **anterior** do elemento na árvore DOM. |


Essas propriedades são úteis para navegar pela estrutura do HTML sem precisar usar seletores como `querySelector` ou `getElementById`.

---

## Criando Novos Elementos HTML (Nós)

Manipular o DOM dinamicamente permite criar e remover elementos na página sem precisar alterar diretamente o HTML.

### Principais Métodos:
| **Método** | **Descrição** |
|------------|---------------|
| `createElement(tagName)` | Cria um novo elemento HTML.|
| `appendChild(elemento)` | Adiciona um elemento como filho de outro.|
| `removeChild(elemento)` | Remove um nó filho de um elemento pai.|
| `remove()` | Remove o próprio elemento do DOM.|
| `insertBefore(novoElemento, elementoExistente)` | Insere um elemento antes de outro existente.|
| `replaceChild(novoElemento, elementoExistente)` | Substitui um nó filho por outro.|
| `cloneNode(deep)` | Clona um elemento. Se deep for true, também clona seus filhos.|

Esses métodos permitem adicionar, remover e modificar elementos dinamicamente na página, tornando o site mais interativo.

---

## LocalStorage

O LocalStorage é uma API do navegador que permite armazenar dados de forma persistente no navegador do usuário. Os dados armazenados **não são apagados** quando a página é recarregada ou quando o navegador é fechado.

### Principais Métodos:

| **Método** | **Descrição** |
|------------|---------------|
|`localStorage.setItem("chave", "valor")`| Armazena um valor associado a uma chave.|
|`localStorage.getItem("chave")`| Recupera o valor armazenado.|
|`localStorage.removeItem("chave")` | Remove um item do armazenamento.|
|`localStorage.clear()`| Apaga todos os dados armazenados.|

**Usando JSON para armazenar objetos:**
Como o LocalStorage só armazena **strings**, podemos usar `JSON.stringify()` e `JSON.parse()` para salvar objetos.
```js
// Criando um objeto
let usuario = { nome: "João", idade: 25 };

// Convertendo para JSON e armazenando
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperando e convertendo de volta para objeto
let dados = JSON.parse(localStorage.getItem("usuario"));
console.log(dados.nome); // João
```

O LocalStorage permite armazenar informações no navegador de forma persistente, útil para salvar configurações do usuário ou dados de um site.