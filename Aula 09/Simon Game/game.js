// 1. Iniciar o jogo (keydown)
// 2. proximaSequencia()
// 3. reproduzirSom()
// 4. jogadas
// 5. animarBotao()
// 6. verificarResposta()
// 7. recomecar()

const cores = ["vermelho", "verde", "azul", "amarelo"];

let padraoJogo = [];
let padraoJogador = [];

let nivel = 0;

let iniciado = false;

document.addEventListener("keydown", () => {
  if (!iniciado) {
    console.log("teclado!");
    document.getElementById("nivel-titulo").textContent = `Nível ${nivel}`;
    iniciado = true;
    proximaSequencia();
  }
})

const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    let corEscolhida = botao.id;

    padraoJogador.push(corEscolhida);

    botao.classList.add("pressionado");
    setTimeout(() => botao.classList.remove("pressionado"), 100);
    reproduzirSom(corEscolhida);

    verificarResposta(padraoJogador.length - 1);
  })
})

function proximaSequencia() {
  padraoJogador = [];
  nivel++;
  document.getElementById("nivel-titulo").textContent = `Nível ${nivel}`;

  const indice = Math.floor(Math.random() * 4);
  const corSorteada = cores[indice];
  padraoJogo.push(corSorteada);

  const botao = document.getElementById(corSorteada);
  botao.classList.add("piscar");
  setTimeout(() => botao.classList.remove("piscar"), 200);

  reproduzirSom(corSorteada);
}

function verificarResposta(indiceAtual) {
  if (padraoJogador[indiceAtual] === padraoJogo[indiceAtual]) {
    if (padraoJogador.length === padraoJogo.length) {
      setTimeout(() => proximaSequencia(), 1000);
    }
  }
  else {
    reproduzirSom("errado");
    document.body.classList.add("fim-de-jogo");
    setTimeout(() => document.body.classList.remove("fim-de-jogo"), 200);
    document.getElementById("nivel-titulo").textContent = "Fim de Jogo! Aperte qualquer tecla para recomeçar.";

    recomecar();
  }
}

function reproduzirSom(nome) {
  const audio = new Audio(`./sounds/${nome}.mp3`);
  audio.play();
}

function recomecar() {
  iniciado = false;
  padraoJogo = [];
  nivel = 0;
}