# 📌 Lista de Exercícios – JavaScript

## Questão 1 – Gerador de Senha Simples 🔐
Peça ao usuário uma palavra e transforme-a em uma “senha segura”, seguindo estas regras:
- Remova espaços extras.
- Substitua a letra **“a”** por **“@”**, **“i”** por **“1”** e **“o”** por **“0”**.

💡 **Dica:** Combine `trim()` e `replace()`.

---

## Questão 2 – Simulador de Lançamento de Dados 🎲
Crie um programa que simula o lançamento de um dado de 6 lados. O usuário deve escolher um número entre **1 e 6**, e o programa deve "rolar o dado" (gerar um número aleatório entre **1 e 6**).

- Se o número escolhido pelo usuário for igual ao resultado do dado, exiba **"Parabéns, você acertou!"**.
- Caso contrário, exiba **"Que pena, o número sorteado foi X"**.

💡 **Dica:** Use `Math.random()` e `Math.floor()`.

---

## Questão 3 – Duelo de Dados 🎲⚔
Crie um programa onde **dois jogadores** competem entre si em um lançamento de dados.

### 🔹 Regras do jogo:
- Cada jogador escolhe um número entre **1 e 6**.
- O programa **"rola"** (gera um número aleatório entre **1 e 6**).
- O jogador cujo número sorteado estiver mais próximo do número escolhido **vence**.
- Se houver empate, informe que foi um empate.

💡 **Dicas:**
- Use `Math.random()` para simular os dados.
- Use `Math.abs()` para calcular a diferença entre o número escolhido e o sorteado.

---

## Questão 4 – Jogo de Adivinhação 🔢🎯
O computador deve gerar um **número aleatório entre 1 e 100**, e o usuário precisa **adivinhar** qual é esse número.

- O programa deve informar se o **palpite** do usuário é **maior ou menor** que o número gerado.
- O jogo continua até que o usuário **acerte**.
- No final, exiba quantas **tentativas** foram necessárias.

💡 **Dica:** Use `Math.random()`, `Math.floor()` e um **while** para repetir até o acerto.

---

## Questão 5 – Saudação Personalizada 👋😃
Escreva um programa que solicite o **nome do usuário** e exiba uma mensagem de **boas-vindas personalizada** no seguinte formato:

> **"Olá, [Nome], seja bem-vindo(a)!"**

Independentemente de como o usuário digite o nome (com letras maiúsculas, minúsculas ou uma combinação delas), o programa deve garantir que ele seja exibido com **a primeira letra em maiúscula** e as demais em **minúsculas**.

💡 **Dica:** Use `slice()`, `toUpperCase()` e `toLowerCase()`.
