// Sem retorno e sem parâmetro:
function mensagem() {
    console.log("Olá, mundo!");
}

// Sem retorno e com parâmetros:
function mensagemPersonalizada(nome) {
    console.log(`Olá, ${nome}`);
}

// Com retorno e sem parâmetros:
function obterAnoAtual() {
    return new Date().getFullYear();
}

// Com retorno e com parâmetros:
function multiplcar(n1, n2) {
    return n1 * n2;
}

mensagem();

mensagemPersonalizada("Bia");

let anoAtual = obterAnoAtual();
console.log(`Ano atual: ${anoAtual}`);

let multiplicao = multiplcar(3, 4);
console.log(`Multiplcação: ${multiplicao}`);
