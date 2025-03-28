# Exercícios

## 1️⃣ Eventos Inline vs `on[event]` vs `addEventListener`

Crie um botão no HTML e implemente os três métodos de adicionar eventos (inline, `on[event]`, `addEventListener`).

📜 **Instruções:**
1. No primeiro botão, adicione um evento **inline** no HTML.
2. No segundo botão, adicione um evento usando `onclick` no JavaScript.
3. No terceiro botão, adicione um evento com `addEventListener()`.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
</head>
<body>
    <button>Clique (Inline)</button>
    <button id="btn2">Clique (`onclick`)</button>
    <button id="btn3">Clique (`addEventListener`)</button>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```
Ao apertar um botão lance um `alert` informando qual método de adicionar evento foi usado.


---

## 2️⃣ Eventos de Mouse

Crie uma `div` e manipule diferentes eventos do mouse para mudar a cor e exibir mensagens.

**📜 Instruções:**
1. `click` → Muda a cor de fundo para azul.

2. `dblclick` → Muda a cor de fundo para verde.

3. `mousedown` → Muda a cor para vermelho quando o mouse é pressionado.

4. `mouseup` → Muda a cor para roxo quando o botão do mouse é solto.

5. `mousemove` → Exibe as coordenadas do mouse dentro da div.

6. `mouseenter` → Exibe um alerta "Entrou na área!".

7. `mouseleave` → Exibe um alerta "Saiu da área!".

**🖥 Código Base (HTML):**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2</title>
    <style>
        #caixa {
            width: 200px;
            height: 200px;
            background-color: lightgray;
            text-align: center;
            line-height: 200px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="caixa">Passe o mouse</div>
    <p id="coords"></p>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

## 3️⃣ Eventos de Teclado (`keydown`)
Crie um campo de entrada (`input`) onde o usuário pode digitar, e mostre qual tecla foi pressionada.

**📜 Instruções:**
1. Adicione um campo de texto (`input`).
2. Sempre que o usuário pressionar uma tecla, exiba o nome da tecla abaixo do campo.

**🖥 Código Base (HTML):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
</head>
<body>
    <label for="campo">Digite algo:</label>
    <input type="text" id="campo">
    <p id="tecla"></p>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

## 4️⃣ Mudar Tema com `toggle` e Evento de Clique
Crie um botão que alterne entre "Modo Claro" e "Modo Escuro" ao ser clicado.

**📜 Instruções:**
1. Crie um botão com o texto "Modo Escuro".

2. Quando o botão for clicado, alterne a classe `dark-mode` no `body`.

3. Se o modo escuro estiver ativado, o botão deve mostrar "Modo Claro". Caso contrário, "Modo Escuro".

**🖥 Código Base (HTML + CSS + JS):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
    <style>
        body.dark-mode {
            background-color: black;
            color: white;
        }
    </style>
</head>
<body>
    <button id="toggleTheme">Modo Escuro</button>
    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

## 5️⃣  Validação de Formulário com `keydown` e `blur`
Crie um formulário simples onde os usuários inserem seu nome e e-mail, validando os campos em tempo real.

**📜 Instruções:**
1. O campo de nome deve ter pelo menos 3 caracteres.

2. O campo de e-mail deve conter um `@`.

3. Se o valor for inválido, exibir uma mensagem de erro ao lado do campo.

4. Utilize `keydown` para verificar o nome enquanto o usuário digita e `blur` para validar o e-mail quando o usuário sair do campo.

**🖥 Código Base (HTML + JS):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 5</title>
</head>
<body>
    <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome">
        <span id="erroNome" style="color: red;"></span>
        <br><br>

        <label for="email">E-mail:</label>
        <input type="text" id="email">
        <span id="erroEmail" style="color: red;"></span>
        <br><br>

        <button type="submit">Enviar</button>
    </form>
    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

---

