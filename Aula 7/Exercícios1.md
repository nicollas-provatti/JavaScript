# Navegando Entre Elementos HTML

## 1️⃣ Destacando o Elemento Pai
**Objetivo:** Quando o usuário clicar no parágrafo adicione a classe `destaque` ao seu elemento pai. Se a classe estiver no elemento remova.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
    <style>
        .destaque {
            border: 1px solid red;
            background-color: lightcoral;
        }
    </style>
</head>
<body>
    <div id="container">
        <p>Clique em mim!</p>
    </div>
    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

## 2️⃣ Contar Elementos Filhos: 
**Objetivo:** Criar um botão que, ao ser clicado, exiba quantos elementos filhos existem dentro de um `div`.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2</title>
</head>
<body>
    <div id="box">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
    </div>
    <button id="countBtn">Contar Filhos</button>
    <p id="result"></p>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

--- 

## 3️⃣ Mudar o Estilo do Primeiro e Último Filho

**Objetivo:** Criar dois botões que mudam o estilo do primeiro e do último elemento filho de uma `div`. Aplique `destaque1` ao primeiro e `destaque2` ao último. Caso a classe já estiver no elemento remova ela.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
    <style>
        .destaque1 {
            color: red;
            background-color: lightcoral;
        }

        .destaque2 {
            color: blue;
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <div id="box">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
    </div>
    <button id="firstBtn">Mudar Estilo Primeiro</button>
    <button id="lastBtn">Mudar Estilo Último</button>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

## 4️⃣ Percorrendo Elementos Irmãos

**Objetivo:** Quando o usuário clicar em um item de uma lista (`li`), o próximo irmão (`nextElementSibling`) ficará em negrito e o anterior (`previousElementSibling`) ficará sublinhado. Adicione um botão `"Reset"` para remover os estilos aplicados.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
</head>
<body>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

