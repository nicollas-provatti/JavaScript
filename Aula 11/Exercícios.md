# 📝 Exercícios

---

## 🔹 Exercício 1 - Escolha de Tema
**Objetivo:** Permitir que o usuário escolha um tema de cor para a página (claro ou escuro), e salvar essa escolha no `localStorage`, mantendo o tema ao recarregar a página.

**Tarefa:** 
Na tag `<script>`, crie uma função chamada `setarTema()` que quando o usuário clicar em um dos botões:

- A aparência da página deve mudar para o tema correspondente.
- A escolha deve ser salva no `localStorage`.
- Quando a página for recarregada, o tema salvo deve ser reaplicado automaticamente.

Use apenas valores simples (strings) no localStorage. Use classList para adicionar a classe referente ao tema atual.

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Escolher Tema</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      transition: background-color 0.3s, color 0.3s;
    }

    h2 {
      margin-bottom: 20px;
    }

    .botao-tema {
      padding: 10px 20px;
      margin: 10px;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .claro {
      background-color: #ecf0f1;
      color: #333;
    }

    .escuro {
      background-color: #2c3e50;
      color: #ecf0f1;
    }

    .botao-tema:hover {
      opacity: 0.9;
    }
  </style>
</head>
<body>

  <h2>Escolha seu tema</h2>
  <button class="botao-tema" onclick="setarTema('claro')">Tema Claro</button>
  <button class="botao-tema" onclick="setarTema('escuro')">Tema Escuro</button>

  <script>
    // Escreva o código aqui
  </script>

</body>
</html>

```

## 🔹 Exercício 2 - Filmes Assistido
**Objetivo:** Criar uma aplicação simples para registrar os nomes dos filmes que o usuário já assistiu. As informações devem ser armazenadas no `localStorage` como um array de strings, e exibidas dinamicamente na tela.

**Tarefa:**
Implemente uma página com os seguintes comportamentos:

1. O usuário digita apenas o **nome do filme** em um campo de texto e clica em Adicionar.

2. O nome do filme é salvo no `localStorage` como uma string dentro de um array.

3. A lista de filmes assistidos é exibida na tela. Cada item deve ter um botão Remover para excluir o filme do array e atualizar a lista.

4. Ao carregar a página, os filmes já salvos devem ser exibidos automaticamente.

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meus Filmes Assistidos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      padding: 40px;
      text-align: center;
    }

    h2 {
      margin-bottom: 20px;
    }

    input {
      padding: 10px;
      width: 250px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px 16px;
      margin-left: 10px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin-top: 30px;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    li {
      background-color: #fff;
      margin: 10px 0;
      padding: 12px 20px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .remover {
      background-color: #e74c3c;
    }

    .remover:hover {
      background-color: #c0392b;
    }
  </style>
</head>
<body>

  <h2>Meus Filmes Assistidos</h2>

  <input type="text" id="inputFilme" placeholder="Digite o nome do filme" />
  <button id="btnAdicionar">Adicionar</button>

  <ul id="listaFilmes"></ul>

  <script>
    // Escreva o código aqui
  </script>
</body>
</html>

```

## 🔹 Exercício 3 - Filmes Favoritos
**Objetivo:** Criar uma aplicação onde o usuário pode cadastrar seus filmes favoritos, incluindo título, gênero e ano de lançamento. Cada filme deve ser armazenado como um objeto dentro de um array, salvo no `localStorage`.

**Tarefa:**
Implemente a lógica JavaScript para:

- Cadastrar um novo filme e salvá-lo no localStorage;
- Exibir todos os filmes salvos ao carregar a página;
- Remover um filme da lista, atualizando o armazenamento;
- (Opcional) Exibir uma mensagem quando não houver filmes salvos.

**Card:**
```html
<div class="filme">
    <h3>Título</h3>
    <p class="small">Gênero</p>
    <button class="remover">Remover</button>
</div>
```

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Meus Filmes Favoritos</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f5f5f5;
      padding: 30px;
      text-align: center;
    }

    input {
      padding: 10px;
      margin: 5px;
      width: 250px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }

    button {
      padding: 10px 20px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
    }

    button:hover {
      background-color: #27ae60;
    }

    .filme {
      background-color: white;
      margin: 10px auto;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      width: 300px;
      text-align: left;
      position: relative;
    }

    .filme h3 {
      margin: 5px 0;
    }

    .filme small {
      display: block;
      margin-top: 5px;
      color: #777;
    }

    .remover {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #e74c3c;
    }

    .remover:hover {
      background-color: #c0392b;
    }
  </style>
</head>
<body>

  <h2>Cadastro de Filmes Favoritos</h2>

  <input type="text" id="titulo" placeholder="Título do filme" />
  <br />
  <input type="text" id="genero" placeholder="Gênero" />
  <br />
  <input type="number" id="ano" placeholder="Ano de lançamento" />
  <br />
  <button id="btnAdicionar">Adicionar Filme</button>

  <div id="listaFilmes"></div>

  <script>
    // Escreva o código aqui
  </script>

</body>
</html>

```

---