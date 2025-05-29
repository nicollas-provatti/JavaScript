# 🎮 Projeto: Jogo da Adivinhação V2

Você irá desenvolver a lógica do Jogo da Adivinhação utilizando JavaScript puro para manipular o DOM, responder a eventos e controlar o fluxo do jogo.

---

## 🎯 Objetivo
Um número aleatório entre 1 e 100 será sorteado. O jogador precisa descobrir esse número, recebendo dicas se o chute foi maior ou menor. O jogo informa o número de tentativas, fornece mensagens de desempenho e exibe o melhor jogador (recordista).

---

## 📝 Instruções

**1 - Selecionar os elementos HTML** necessários usando `getElementById()` ou `querySelector()`:

- Campos de nome, palpite, botões, mensagens, etc.

**2 - Criar variáveis globais para:**

- Armazenar o número sorteado (`Math.random()` + `Math.ceil()`),
- Contar o número de tentativas,
- Guardar o nome do jogador,
- Controlar o recorde (melhor pontuação e jogador).

**3 - Lidar com os eventos:**

- Quando o jogador clicar em "Começar Jogo":
    - Pegue o nome,
    - Sorteie um número aleatório,
    - Mostre a interface do jogo,
    - Oculte a tela inicial.

- Quando clicar em "Tentar":
    - Pegue o valor digitado,
    - Compare com o número sorteado,
    - Mostre dicas (maior/menor),
    - Conte tentativas,
    - Finalize o jogo se acertar.

- Quando clicar em "Jogar Novamente":
- Reinicie as variáveis,
- Volte para a tela inicial.

**4 - Mostrar mensagens personalizadas conforme o desempenho:**

- Menos de 3 tentativas → “🧠 Gênio da adivinhação!”
- De 4 a 6 → “🚀 Muito bem!”
- Mais de 6 → “💪 Persistência é tudo!”

**5 - Registrar e mostrar o recorde:**
Atualize o jogador e a pontuação se o desempenho atual for melhor que o anterior.

---

## 💡 Dica
Use `textContent` ou `innerText` para inserir textos nas tags HTML e `classList.add("hidden")` / `classList.remove("hidden")` para exibir ou ocultar elementos da tela.

---


