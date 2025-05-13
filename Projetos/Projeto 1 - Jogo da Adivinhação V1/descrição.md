# 🎮 Projeto: Jogo da Adivinhação V1

---

## 🎯 Objetivo
Desenvolver um jogo interativo no qual o jogador precisa adivinhar um número sorteado entre 1 e 100. O projeto permitirá praticar os conceitos de estrutura de decisão (if, else), repetição (while), entrada e saída de dados (prompt, alert) e uso de variáveis.

---

## 📝 Instruções

**1 - Saudação Inicial**
Exiba uma mensagem de boas-vindas ao jogador usando `alert`.

**2 - Laço de Jogo**
O jogo deve continuar enquanto o jogador responder "sim" à pergunta *"Deseja jogar novamente?"*.

**3 - Sorteio do Número**
A cada nova rodada, sorteie um número aleatório entre 1 e 100 utilizando `Math.random()` e `Math.ceil()`.

**4 - Leitura do Nome do Jogador**
Pergunte o nome do jogador com `prompt` antes de iniciar a rodada.

**5 - Tentativas**
Permita que o jogador digite números até adivinhar o número sorteado.

- Após cada tentativa, informe se o número digitado é maior ou menor que o número sorteado.
- Conte o número de tentativas realizadas até o acerto.

**6 - Mensagens Personalizadas**
Quando o jogador acertar, exiba uma mensagem diferente de acordo com o número de tentativas:

- 3 tentativas ou menos: “Uau! Você é um gênio da adivinhação! 🧠”
- Entre 4 e 6: “Muito bem! Você foi rápido! 🚀”
- Mais de 6: “Conseguiu! Persistência é tudo! 💪”

**7 - Recorde**
Mantenha o nome do melhor jogador e o número de tentativas mais baixo.
Se alguém bater o recorde, exiba uma mensagem como:
“🏆 Novo recorde! João é o melhor jogador com 4 tentativas.”

**8 - Finalização**
Quando o jogador decidir parar, exiba um resumo com o nome do melhor jogador e sua pontuação recorde.

---

## 💡 Dica Técnica

- Para comparar strings em minúsculas, use `.toLowerCase()`.

- Para garantir que o número digitado seja um número válido, use `Number(prompt(...))`.

---

## 🖥️ Exemplo de Execução
```text
> Bem-vindo ao Jogo da Adivinhação!
> Qual o seu nome, jogador ?
> (Usuário digita: Maria)
> Olá, Maria! Preparando o jogo...
Um número de 1 a 100 foi sorteado!
Tente adivinhar qual é. Boa sorte!

> (Jogadora erra e recebe dicas: maior/menor)
> Parabéns, Maria! Você acertou em 5 tentativas.
Muito bem! Você foi rápido! 🚀

> Deseja jogar novamente? (sim/não)
```

---

## 🌟 Desafio Extra (opcional)
Se quiser deixar seu jogo ainda mais completo, tente implementar:

- Um **limite de tentativas** por rodada.
- Um **rank** com os três melhores jogadores.
- Um **modo difícil**, com números de 1 a 500.

---