#  Criando Novos Elementos HTML (Nós)

## 1️⃣  Criando e Adicionando Elementos
**Objetivo:** Crie um botão que, ao ser clicado, adicione um novo parágrafo dentro de uma `<div>`. O parágrafo deve conter o texto `"Novo parágrafo adicionado!"`. Ele deve ser inserido dentro de uma `<div id="content">`.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício 1</title>
</head>
<body>
    <div id="content"></div>
    <button id="addParagraph">Adicionar Parágrafo</button>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

## 2️⃣ Removendo um Elemento Específico
**Objetivo:** Crie uma lista com três itens e um botão que remova o último item da lista quando clicado. Se não houver mais itens na lista lance um `alert` informando que todos os itens já foram removidos.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício 2</title>
</head>
<body>
    <ul id="itemList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button id="removeItem">Remover Último Item</button>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

## 3️⃣ Removendo um Elemento ao Clicá-lo
**Objetivo:** Crie um parágrafo que seja removido quando for clicado.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício 3</title>
</head>
<body>
    <p id="removable">Clique para remover este parágrafo.</p>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

## 4️⃣  Inserindo Elemento Antes de Outro
**Objetivo:** Crie uma lista com dois itens e um botão que insira um novo item antes do segundo item da lista. O novo item deve ter o texto `"Item inserido antes do segundo"`.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício 4</title>
</head>
<body>
    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <button id="insertItem">Inserir Antes</button>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---
 
## 5️⃣ Substituindo um Elemento
**Objetivo:** rie um botão que substitua um título `<h2>`por um novo título `<h2>` com outro texto. O novo título deve ter o texto `"Título Substituído!"`.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício 5</title>
</head>
<body>
    <div id="titleContainer">
        <h2 id="mainTitle">Título Original</h2>
    </div>
    <button id="replaceTitle">Substituir Título</button>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---
 
# 6️⃣ Clonando um Elemento
**Objetivo:** Crie um botão que clone um parágrafo existente e o adicione abaixo dele. O parágrafo deve ser copiado com o conteúdo.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício 6</title>
</head>
<body>
    <div id="textContainer">
        <p id="text">Este parágrafo será clonado.</p>   
    </div>
    <button id="cloneText">Clonar Parágrafo</button>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---