# 📘 Aula 11 - LocalStorage

### 🔍 O que é o LocalStorage?
LocalStorage é uma funcionalidade do navegador que permite armazenar dados **localmente** no computador do usuário, em forma de **pares chave-valor**, de maneira **persistente**. Ou seja, os dados continuam salvos mesmo que a página seja recarregada ou o navegador seja fechado e reaberto.

**Características principais:**
- Armazena apenas **strings** (não aceita objetos diretamente);

- Capacidade média: cerca de **5MB** por domínio;

- Os dados **não expiram** (diferente de cookies e sessionStorage);

- Só pode ser acessado do **lado do cliente** (JavaScript no navegador);

- Muito útil para armazenar preferências do usuário, dados temporários de apps, carrinho de compras, temas, entre outros.

---

### 🔵 Métodos de uso do LocalStorage
O `localStorage` oferece 4 métodos principais para manipulação dos dados:

#### 🔹 `setItem(chave, valor)`
Armazena um valor associado a uma chave. Sempre como string.

**Exemplo:**
```js
localStorage.setItem('usuario', 'Maria');
```

#### 🔹 `getItem(chave)`
Recupera o valor associado à chave.

**Exemplo:**
```js
const nome = localStorage.getItem('usuario');
console.log(nome); // Maria
```

#### 🔹 `removeItem(chave)`
Remove uma chave (e seu valor) do armazenamento.

**Exemplo:**
```js
localStorage.removeItem('usuario');
```

#### 🔹 `clear()`
Remove todos os dados armazenados no localStorage do domínio.

**Exemplo:**
```js
localStorage.clear();
```

### 🔵 Exemplo: Salvando o nome de um usuário
**Objetivo:** guardar o nome do usuário no navegador usando `localStorage`, exibir esse nome na tela, permitir removê-lo e limpar todos os dados.

#### 🧱 Código HTML (simples)
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo LocalStorage</title>
</head>
<body>
  <h1 id="mensagem">Olá, visitante!</h1>

  <input type="text" id="nome" placeholder="Digite seu nome" />
  <button onclick="salvarNome()">Salvar nome</button>
  <button onclick="removerNome()">Remover nome</button>
  <button onclick="limparTudo()">Limpar tudo</button>

  <script src="script.js"></script>
</body>
</html>
```

#### ⚙️ Código JavaScript (script.js)
```js
function salvarNome() {
  const nome = document.getElementById('nome').value;

  if (nome) {
    localStorage.setItem('usuario', nome); // Armazena o nome no localStorage
    atualizarMensagem();
  }
}

function removerNome() {
  localStorage.removeItem('usuario'); // Remove o item com chave 'usuario'
  atualizarMensagem();
}

function limparTudo() {
  localStorage.clear(); // Limpa todos os dados do localStorage
  atualizarMensagem();
}

function atualizarMensagem() {
  const nomeSalvo = localStorage.getItem('usuario');
  const h1 = document.getElementById('mensagem');

  if (nomeSalvo) {
    h1.textContent = `Olá, ${nomeSalvo}!`;
  } else {
    h1.textContent = 'Olá, visitante!';
  }
}

// Atualiza a mensagem quando a página é carregada
atualizarMensagem();
```

**Explicação:**
| Ação                     | Método usado                   | O que acontece                                                                 |
|--------------------------|--------------------------------|--------------------------------------------------------------------------------|
| Clica em "Salvar nome"   | `setItem('usuario', nome)`     | O valor digitado é salvo no armazenamento local como uma string.              |
| Recarrega a página       | `getItem('usuario')`           | O nome salvo continua existindo (persistência local), e é exibido na tela.    |
| Clica em "Remover nome"  | `removeItem('usuario')`        | A chave `usuario` é apagada, e o nome desaparece da tela.                     |
| Clica em "Limpar tudo"   | `clear()`                      | Todos os dados do `localStorage` são removidos (inclusive se houver outros).  |

---

### 🔵 Salvando um array de objetos
Imagine que queremos salvar uma lista de usuários com nome e idade.

**Salvando no LocalStorage:**
```js
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 30 },
  { nome: "Bruna", idade: 22 }
];

// Converter para string e salvar
localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
```

**Salvando do LocalStorage:**
```js
const dadosSalvos = localStorage.getItem("listaUsuarios");

if (dadosSalvos) {
  const lista = JSON.parse(dadosSalvos); // Converte de volta para array de objetos

  lista.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
  });
}
```

**Explicação:**
| Etapa                | Método                    | Descrição                                           |
|----------------------|---------------------------|-----------------------------------------------------|
| Armazenar            | `JSON.stringify()`         | Converte array/objeto em string JSON válida.        |
| Salvar               | `localStorage.setItem()`   | Salva no navegador.                                 |
| Recuperar            | `localStorage.getItem()`   | Lê a string salva.                                  |
| Transformar de volta | `JSON.parse()`             | Converte a string para array ou objeto novamente.   |

**Dica:** Sempre verifique se o dado existe antes de usar `JSON.parse()` para evitar erro com `null`:

```js
const dados = localStorage.getItem("dados");
if (dados) {
  const obj = JSON.parse(dados);
  // usa o objeto com segurança
}
```

---
