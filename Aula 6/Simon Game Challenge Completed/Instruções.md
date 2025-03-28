#  Projeto: Simon Game 🎮

## 🎯 Objetivo
Criar um jogo de memória onde o jogador deve repetir uma sequência de cores gerada pelo computador. A cada rodada, a sequência cresce e o jogo continua até que o jogador erre.

## 📌 Passos para desenvolver o projeto
### 1️⃣ Estruturação do HTML e CSS
- Você receberá o HTML e o CSS prontos.
- O HTML contém botões coloridos representando cada cor do jogo.
- O CSS já estiliza os botões e adiciona animações.

### 2️⃣ Criando as Estruturas de Dados
- Defina um array `buttonColours` com as cores disponíveis: `["red", "blue", "green", "yellow"]`.
- Crie um array `gamePattern` para armazenar a sequência de cores gerada pelo jogo.
- Crie um array `userClickedPattern` para armazenar a sequência de cliques do usuário.
- Crie variáveis auxiliares `level` (nível do jogo) e `started` (indica se o jogo já começou).

### 3️⃣ Detectando o Início do Jogo
- Adicione um **evento de teclado** (`keypress`) para iniciar o jogo.
- Quando o jogo começar, altere o título (`#level-title`) para mostrar o nível atual e chame `nextSequence()` para gerar a primeira cor.

### 4️⃣ Criando a Sequência do Jogo
- A cada rodada, a função `nextSequence()` deve:
    1. **Aumentar o nível** e atualizar o título.

    2.**Gerar um número aleatório entre 0 e 3** para escolher uma cor do array `buttonColours`.

    3. **Adicionar essa cor ao** `gamePattern`.

    4. `Fazer o botão piscar` e tocar o som correspondente.

### 5️⃣ Capturando os Cliques do Jogador
- Adicione um **evento de clique** a cada botão de cor (.btn).
- Quando o jogador clica em um botão:

    1. O **ID da cor clicada** é armazenado no `userClickedPattern`.

    2. A função `playSound()` toca o som correspondente.

    3. A função `animatePress()` adiciona um efeito de clique.

    4. A função `checkAnswer()` verifica se a resposta está correta.

### 6️⃣ Verificando a Resposta do Jogador
- A função `checkAnswer(currentLevel)` deve:

    1. **Comparar a entrada do jogador com a sequência do jogo**.

    2. Se a resposta estiver correta e o jogador completou a sequência, **gerar a próxima cor após 1 segundo.**

    3. Se a resposta estiver errada:

        1. Tocar um som de erro (`wrong`).

        2. Exibir um efeito de "Game Over".

        3. Mudar o título para `"Game Over, Press Any Key to Restart"`.

        4. Reiniciar o jogo com a função `startOver()`.

### 7️⃣ Reiniciando o Jogo
- A função `startOver()` deve:

    1. **Zerar o nível e as sequências.**

    2. **Definir** `started = false`, para que o jogo possa ser reiniciado ao pressionar uma tecla.

---