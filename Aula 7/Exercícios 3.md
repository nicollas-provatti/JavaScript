# LocalStorage

## 1️⃣ Armazenando Dados Simples Separados

**Objetivo:** Crie um formulário onde o usuário possa digitar seu nome e idade. Ao clicar no botão "Salvar", os dados devem ser armazenados no LocalStorage. Ao clicar no botão "Carregar", os dados devem ser exibidos na tela.

**Requisitos:**

- Use `localStorage.setItem()` para armazenar os dados.
- Use `localStorage.getItem()` para recuperar os dados.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1: </title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input {
            display: block;
            margin: 10px 0;
            padding: 5px;
        }
        button {
            margin: 5px;
            padding: 8px;
            cursor: pointer;
        }
        .output {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h2>Armazenando Dados Simples</h2>
    <input type="text" id="nome" placeholder="Digite seu nome">
    <input type="number" id="idade" placeholder="Digite sua idade">
    <button id="salvarSimples">Salvar</button>
    <button id="carregarSimples">Carregar</button>
    <div class="output" id="resultadoSimples"></div>

    <script>
        // Escreva o código aqui
    </script>

</body>
</html>
```

---

## 2️⃣ Armazenando um Objeto no LocalStorage

**Objetivo:** Crie um sistema onde o usuário insira seu nome, email e telefone em um formulário. Ao clicar no botão "Salvar Contato", as informações devem ser armazenadas como um objeto JSON no LocalStorage.
Ao clicar no botão "Exibir Contato", os dados devem ser recuperados e exibidos na página.

**Requisitos:**
- Converta o objeto para JSON usando `JSON.stringify()` antes de armazenar.
- Recupere e converta de volta para objeto com `JSON.parse()`.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input {
            display: block;
            margin: 10px 0;
            padding: 5px;
        }
        button {
            margin: 5px;
            padding: 8px;
            cursor: pointer;
        }
        .output {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h2>Armazenando um Objeto</h2>
    <input type="text" id="nomeObj" placeholder="Nome">
    <input type="email" id="emailObj" placeholder="Email">
    <input type="tel" id="telefoneObj" placeholder="Telefone">
    <button id="salvarObjeto">Salvar Contato</button>
    <button id="carregarObjeto">Exibir Contato</button>
    <div class="output" id="resultadoObjeto"></div>

    <script>
        // Escreva o código aqui
    </script>

</body>
</html>
```