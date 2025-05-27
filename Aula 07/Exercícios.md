# 📝 Exercícios

---

## 🔹 Exercício 1 - Conteúdo de um Parágrafo
**Objetivo:** Alterar o conteúdo de um parágrafo.

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1</title>
</head>
<body>
    <p id="mensagem">Texto original.</p>
    <button onclick="alterarTexto()">Clique aqui</button>

    <script>
        // Escreva a função aqui
    </script>
</body>
</html>
```

**Tarefa:**
Na tag `<script>`, crie a função `alterarTexto()` que:
- Selecione o parágrafo com o id `mensagem`.
- Altere o conteúdo para: `"Texto alterado com sucesso!"`.

---

## 🔹 Exercício 2 - Conteúdo de uma Lista
**Objetivo:** Substituir o conteúdo de uma lista.

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício 2</title>
</head>
<body>
    <ul>
        <li class="item">Item A</li>
        <li class="item">Item B</li>
        <li class="item">Item C</li>
    </ul>
    <button onclick="substituirLista()">Atualizar Lista</button>

    <script>
        // Escreva a função aqui
    </script>
</body>
</html>
```

**Tarefa:**
Na função `substituirLista()`:
- Selecione os `<li>` com classe `item`.
- Substitua o conteúdo da lista por:

```html
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
```

---

## 🔹 Exercício 3 - Estilo de um Elemento
**Objetivo:** Modificar a cor e o tamanho da fonte de um parágrafo.

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício 3</title>
</head>
<body>
    <p id="destaque">Texto em destaque.</p>
    <button onclick="estilizarParagrafo()">Estilizar</button>

    <script>
        // Escreva a função aqui
    </script>
</body>
</html>
```

**Tarefa:**
Na função `estilizarParagrafo()`:
- Selecione o parágrafo pelo id `destaque`.
- Altere a cor do texto para `"blue"` e o tamanho da fonte para `"24px"` usando.

---

## 🔹 Exercício 4 - Manipulação de Atributos
**Objetivo:** Adicionar um link dinamicamente.

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício 4</title>
</head>
<body>
    <a id="meuLink">Clique aqui para saber mais</a>
    <button onclick="definirLink()">Definir Link</button>

    <script>
        // Escreva a função aqui
    </script>
</body>
</html>
```

**Tarefa:**
Na função `definirLink()`:

- Selecione o elemento `<a>` com id `meuLink`.
- Atribua ao atributo `href` o valor da sua escolha.
- Faça o link abrir em nova aba adicionando o atributo `target="_blank"`.


---

## 🔹 Exercício 5 - Adição e Remoção de Classe
**Objetivo:** Alternar destaque em um parágrafo.

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício 5</title>
    <style>
        .destaque {
            background-color: yellow;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p id="texto">Uso os botões para adicionar e remover o destaque do texto.</p>
    <button onclick="destacarTexto()">Adicionar</button>
    <button onclick="removerDestaque()">Remover</button>

    <script>
        // Escreva as funções aqui
    </script>
</body>
</html>
```

**Tarefa:**
Crie duas funções:

- `destacarTexto()`: adiciona a classe `destaque` ao parágrafo com id texto.
- `removerDestaque()`: remove a classe `destaque` do mesmo parágrafo.

---

## 🔹 Exercício 6 - Mudar Tema
**Objetivo:** Criar um efeito de ativar/desativar um tema escuro.

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exercício 6</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            width: 100vw;
            height: 100vh;
            padding: 20px;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .escuro {
            background-color: #333;
            color: white;
        }

        li {
            list-style-position: inside;
        }

        button {
            margin-top: 20px;
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
            align-self: flex-end;
        }

        .escuro {
            background-color: #555;
            border-color: #66B2FF;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem-vindo ao Exercício de Tema</h1>
        <p>Este é um exemplo de página onde você pode alternar entre o tema claro e escuro.</p>

        <ul>
            <li>Item 1: Aprender HTML</li>
            <li>Item 2: Estilizar com CSS</li>
            <li>Item 3: Interagir com JavaScript</li>
        </ul>

        <button onclick="alternarTema()">Alternar Tema</button>
    </div>

    <script>
        // Escreva as funções aqui
    </script>
</body>
</html>
```

**Tarefa:**
Na função `alternarTema()`:

- Selecione a `div` com `classe` container.
- Use o método `toggle()` para alternar a classe escuro.

---