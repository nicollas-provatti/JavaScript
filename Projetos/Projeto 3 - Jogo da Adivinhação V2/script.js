let numeroSorteado;
let numeroTentativas;
let nomeJogador = "";
let melhorJogador = "";
let melhorPontuacao = Infinity;

const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const fim = document.getElementById("fim");
const boasVindas = document.getElementById("boasVindas");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");
const recorde = document.getElementById("recorde");

document.getElementById("comecarBtn").addEventListener("click", () => {
  nomeJogador = document.getElementById("nome").value.trim();
  if (!nomeJogador) {
    alert("Por favor, insira seu nome.");
    return;
  }

  numeroSorteado = Math.ceil(Math.random() * 100);
  numeroTentativas = 0;

  inicio.classList.add("hidden");
  jogo.classList.remove("hidden");
  mensagem.textContent = "";
  document.getElementById("palpite").value = "";

  boasVindas.textContent = `Olá, ${nomeJogador}! Um número de 1 a 100 foi sorteado. Boa sorte! 🎲`;
});

document.getElementById("tentarBtn").addEventListener("click", () => {
  const palpite = Number(document.getElementById("palpite").value);
  if (!palpite || palpite < 1 || palpite > 100) {
    alert("Digite um número válido entre 1 e 100.");
    return;
  }

  numeroTentativas++;

  if (palpite === numeroSorteado) {
    let msg = `🎉 Parabéns, ${nomeJogador}! Você acertou em ${numeroTentativas} tentativas.\n`;

    if (numeroTentativas <= 3) {
      msg += "🧠 Uau! Você é um gênio da adivinhação!\n";
    } else if (numeroTentativas <= 6) {
      msg += "🚀 Muito bem! Você foi rápido!\n";
    } else {
      msg += "💪 Conseguiu! Persistência é tudo!\n";
    }

    if (numeroTentativas < melhorPontuacao) {
      melhorPontuacao = numeroTentativas;
      melhorJogador = nomeJogador;
      msg += `🏆 Novo recorde! ${nomeJogador} é o melhor jogador com ${numeroTentativas} tentativas.\n`;
    }

    resultado.textContent = msg;
    recorde.textContent = `🏅 Melhor jogador: ${melhorJogador} com ${melhorPontuacao} tentativas`;
    jogo.classList.add("hidden");
    fim.classList.remove("hidden");
  } else {
    mensagem.textContent =
      palpite > numeroSorteado
        ? "❌ O número digitado é MAIOR. Tente novamente!"
        : "❌ O número digitado é MENOR. Tente novamente!";
  }

  document.getElementById("palpite").value = "";
  document.getElementById("palpite").focus();
});

document.getElementById("jogarNovamenteBtn").addEventListener("click", () => {
  fim.classList.add("hidden");
  inicio.classList.remove("hidden");
  document.getElementById("nome").value = "";
});
