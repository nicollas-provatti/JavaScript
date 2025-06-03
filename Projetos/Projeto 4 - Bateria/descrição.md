# 🥁 Projeto: Kit de Bateria Interativo

---

## 🎯 Objetivo:
Implementar o comportamento interativo de um conjunto de botões representando partes de uma bateria. Ao clicar com o mouse ou pressionar uma tecla do teclado, um som específico deve ser reproduzido e o botão correspondente deve receber um efeito visual temporário.

---

## 📝 Instruções

**1. Selecionar os botões:**

- Capture todos os elementos com a classe `.botao-bateria` usando `document.querySelectorAll`.

**2. Adicionar eventos de clique:**

- Para cada botão, adicione um `addEventListener("click", function() {...})`.

- Dentro da função, identifique a letra (por exemplo, `w`, `a`, `s`...) que está dentro do botão clicado.

- Use essa letra para:

    - Reproduzir o som correspondente;

    - Adicionar o efeito visual no botão pressionado.

**3. Capturar teclas do teclado:**

- Adicione um `addEventListener("keydown", function(event) {...})` ao `document`.

- Verifique qual tecla foi pressionada (ex: `event.key`) e chame as mesmas funções de som e animação.

**4. Reproduzir o som:**

- Crie uma função `reproduzirSom(tecla)` que receba a tecla como parâmetro.

- Use uma estrutura `switch` ou `if` para verificar qual som tocar com base na tecla recebida.

- Use `new Audio("caminho/para/o/arquivo.mp3").play()` para tocar o som.

**5. Animar o botão:**

- Crie uma função `animarBotao(tecla)` que adicione temporariamente a classe `.pressionado` no botão correspondente.

- Use `setTimeout` para remover a classe após um curto intervalo (ex: 100ms).

---