# 📝 Exercícios

---

## 🔹 Exercício 1 - Gerenciador de Comentários
**Objetivo:** Permitir que o usuário adicione comentários em uma seção e remova-os, simulando uma área de feedback de um post ou produto. O foco é praticar criação e remoção de elementos com JavaScript de forma visual e interativa.

**Tarefa:**
Implemente o funcionamento do gerenciador com as seguintes instruções:

**1. Ao clicar no botão "Adicionar Comentário":**

- Obtenha os valores do input de nome e do textarea de comentário.

* Verifique se os dois campos foram preenchidos. Se estiver vazio, exiba um `alert()` informando que ambos devem ser preenchidos.

- Crie dinamicamente uma bloco de comentário `div` com a classe `comentario` contendo:

  - O nome da pessoa (como um `<h3>`);
  - O texto do comentário (como um `<p>`);
  - A data e hora em que o comentário foi feito (como um `<p>`), usando `new Date()` formatada no padrão brasileiro (DD/MM/AAAA HH:MM).
  - Um botão "Remover", que ao ser clicado deve excluir esse comentário da página.
  - Adicione as classes `autor`, `texto-comentario`, `data` e `remover` aos respectivos elementos.

**2. Adicione o novo comentário dentro da `<div id="comentarios">`.**

Use `toLocaleString()` para exibir a data no formato desejado (dia/mês/ano e hora:minuto).

```js
const data = new Date();
const dataFormatada = data.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
});
```

```csharp
João da Silva
Gostei bastante do artigo, muito útil!
Comentado em: 01/06/2025 15:30
```

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Seção de Comentários</title>
    <style>
      body {
        font-family: "Segoe UI", sans-serif;
        background-color: #f9f9f9;
        padding: 40px;
        text-align: center;
      }

      .container {
        background: white;
        max-width: 500px;
        margin: auto;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
      }

      input,
      textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-top: 10px;
        box-sizing: border-box;
        resize: none;
      }

      button {
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        border: none;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
      }

      button:hover {
        background-color: #218838;
      }

      .comentario {
        background-color: #f1f1f1;
        padding: 12px;
        border-radius: 5px;
        margin-top: 15px;
        text-align: left;
        position: relative;
      }

      .comentario strong {
        display: block;
        margin-bottom: 5px;
      }

      .autor {
        font-weight: bold;
        color: #333;
        margin-bottom: 4px;
        font-size: 16px;
      }

      .texto-comentario {
        font-size: 15px;
        color: #444;
        margin-bottom: 6px;
        line-height: 1.4;
      }

      .data {
        font-size: 13px;
        color: #777;
        margin-bottom: 8px;
      }

      .remover {
        position: absolute;
        right: 10px;
        top: 10px;
        background: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 8px;
        cursor: pointer;
      }

      .remover:hover {
        background-color: #bd2130;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Deixe seu comentário</h2>
      <input type="text" id="inputNome" placeholder="Digite seu nome" />
      <textarea
        id="inputComentario"
        rows="4"
        placeholder="Digite seu comentário..."
      ></textarea>
      <br />
      <button id="btn-adicionar-comentario">Publicar</button>

      <div id="secaoComentarios"></div>
    </div>

    <script>
       // Escreva seu código aqui
    </script>
  </body>
</html>

```

---

## 🔹 Exercício 2 - Cadastro de Livros
**Objetivo:** Permitir que o usuário cadastre livros informando título, autor, ano de publicação, gênero e uma URL de imagem da capa. Cada livro será exibido como um card estilizado com a imagem e os dados na tela.

**Tarefa:**
Na tag `<script>`, adicione uma função para ser executada quando o forumlário for enviado. A função deve:

1. Selecionar os campos de input: `titulo`, `autor`, `ano` e `genero` e `imagem`.

2. Verificar se todos os campos estão preenchidos. Se não estiverem, exibir um `alert()`.

3. Criar dinamicamente uma `div` com a classe `"livro"`.

4. Dentro dessa `div`, criar:

  - Um `img` com a URL  da imagem.
  - Um `<h3>` com o título do livro.
  - Um `<p>` com o autor.
  - Um `<p>` com o ano.
  - Um `<p>` com o gênero.

5. Adicionar essa `div` dentro da `div#listaLivros` usando `appendChild`.

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Cadastro de Livros</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fafafa;
      padding: 40px;
      max-width: 800px;
      margin: auto;
    }

    h1 {
      text-align: center;
      color: #2c3e50;
    }

    .formulario {
      background-color: #ecf0f1;
      padding: 20px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;
    }

    input, select {
      padding: 10px;
      border: 1px solid #bdc3c7;
      border-radius: 5px;
      font-size: 14px;
    }

    button {
      padding: 10px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }

    .livros {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .livro {
      background-color: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      width: 220px;
    }

    .livro img {
      width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .livro h3 {
      margin: 0;
      color: #2c3e50;
    }

    .livro p {
      margin: 5px 0;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <h1>Cadastro de Livros</h1>

  <div class="formulario">
    <input type="text" id="titulo" placeholder="Título do livro">
    <input type="text" id="autor" placeholder="Autor">
    <input type="number" id="ano" placeholder="Ano de publicação">
    <select id="genero">
      <option value="">Selecione o gênero</option>
      <option>Ficção</option>
      <option>Não-ficção</option>
      <option>Romance</option>
      <option>Terror</option>
      <option>Aventura</option>
    </select>
    <input type="url" id="imagem" placeholder="URL da imagem da capa">
    <button id="btn-add">Adicionar Livro</button>
  </div>

  <div class="livros" id="listaLivros"></div>

  <script>
    // Escreva o código aqui
  </script>

</body>
</html>
```

---

## 🔹 Exercício 3 - Gerenciador de Contatos
**Objetivo:** Permitir que o usuário cadastre seus contatos.

**Tarefa:**
Na parte do `<script>`, escreva o código necessário para:

**1. Capturar os valores dos campos:**
  - Nome
  - Número
  - URL da foto (opcional)

**2. Validar se nome e número foram preenchidos. Se não, exibir um `alert()`.**

**3. Criar dinamicamente um cartão de contato contendo:**
  - A imagem do contato (se a URL estiver vazia, usar uma imagem padrão. Use uma imagem da internet);
  - O nome e o número da pessoa;
  - Um botão "Remover" que, ao ser clicado, remove esse cartão da lista.

**4. Adicionar o novo cartão dentro da `<div id="lista-contatos">`.**


**Formato de uma contato**
```html
<div class="contato">
  <img src="URL_DA_IMAGEM" alt="Foto do contato">
  <h3>NOME DA PESSOA</h3>
  <p>NÚMERO DE TELEFONE</p>
  <button class="remover">Remover</button>
</div>
```

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Gerenciador de Contatos</title>
  <style>
    body {
      font-family: sans-serif;
      background: #f5f5f5;
      padding: 40px;
      text-align: center;
    }

    .formulario {
      margin-bottom: 30px;
    }

    input {
      padding: 10px;
      margin: 5px;
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      border: none;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    #lista-contatos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .contato {
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      width: 200px;
      text-align: center;
    }

    .contato img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }

    .contato h3 {
      margin: 5px 0;
      font-size: 18px;
    }

    .contato p {
      margin: 5px 0;
      color: #333;
    }

    .contato button {
      margin-top: 10px;
      background-color: crimson;
    }

    .contato button:hover {
      background-color: darkred;
    }
  </style>
</head>
<body>

  <h1>Gerenciador de Contatos</h1>

  <div class="formulario">
    <input type="text" id="nome" placeholder="Nome">
    <input type="text" id="numero" placeholder="Número">
    <input type="text" id="foto" placeholder="URL da Foto (opcional)">
    <button id="btn-adicionar">Adicionar Contato</button>
  </div>

  <div id="lista-contatos"></div>

  <script>
    // Escreva seu código aqui
  </script>
</body>
</html>

```

---
