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
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background-color: #f5f5f5;
        }

        p {
            font-size: 1.2rem;
            color: #333;
            background-color: #e1f5fe;
            display: inline-block;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #0288d1;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0277bd;
        }
    </style>
</head>
<body>
    <p id="mensagem">Texto original.</p>
    <br>
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
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 60px;
            background-color: #f9f9f9;
        }

        ul {
            display: inline-block;
            text-align: left;
            padding: 20px;
            background-color: #e3f2fd;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        li {
            font-size: 1.1rem;
            margin: 6px 0;
            padding: 4px 8px;
            background-color: #ffffff;
            border-radius: 4px;
        }

        button {
            margin-top: 25px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #039be5;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0288d1;
        }
    </style>
</head>
<body>
    <ul>
        <li class="item">Item A</li>
        <li class="item">Item B</li>
        <li class="item">Item C</li>
    </ul>
    <br>
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
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background-color: #f0f4f8;
        }

        #destaque {
            font-size: 18px;
            padding: 15px 20px;
            background-color: #ffffff;
            border: 2px dashed #ccc;
            border-radius: 8px;
            display: inline-block;
            transition: all 0.3s ease;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #1565c0;
        }
    </style>
</head>
<body>
    <p id="destaque">Texto em destaque.</p>
    <br>
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
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background-color: #f0f0f0;
        }

        a#meuLink {
            display: inline-block;
            margin-bottom: 20px;
            text-decoration: none;
            color: #0d47a1;
            font-size: 18px;
            padding: 10px 15px;
            border: 2px dashed #90caf9;
            border-radius: 8px;
            transition: background 0.3s, color 0.3s;
        }

        a#meuLink:hover {
            background-color: #e3f2fd;
            color: #1565c0;
        }

        button {
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #1565c0;
        }
    </style>
</head>
<body>
    <a id="meuLink">Clique aqui para saber mais</a>
    <br><br>
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
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background-color: #f9f9f9;
        }

        #texto {
            font-size: 1.2rem;
            padding: 20px;
            max-width: 600px;
            margin: 20px auto;
            border: 2px solid #ddd;
            border-radius: 8px;
            transition: background-color 0.3s, font-weight 0.3s;
        }

        .destaque {
            background-color: yellow;
            font-weight: bold;
        }

        button {
            padding: 10px 20px;
            margin: 10px 5px;
            font-size: 1rem;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #1565c0;
        }
    </style>
</head>
<body>
    <p id="texto">Use os botões para adicionar e remover o destaque do texto.</p>
    <button onclick="destacarTexto()">Adicionar</button>
    <button onclick="removerDestaque()">Remover</button>

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

        body {
            transition: background-color 0.3s, color 0.3s;
            font-family: Arial, sans-serif;
        }

        .container {
            width: 100vw;
            height: 100vh;
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            background-color: #f0f0f0;
            color: #222;
            transition: background-color 0.3s, color 0.3s;
        }

        .escuro {
            background-color: #1e1e1e;
            color: #f9f9f9;
        }

        ul {
            padding-left: 20px;
        }

        li {
            margin-bottom: 8px;
            font-size: 1.1rem;
        }

        button {
            padding: 12px 24px;
            font-size: 16px;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #1565c0;
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
