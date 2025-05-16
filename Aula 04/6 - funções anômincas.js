const mensagem = function (nome) {
    return `Olá, ${nome}`;
}

console.log(mensagem("Carlos"));

function calculo(operacao) {
    if (operacao === "+"){
        return function (a, b) {
            return a + b;
        }
    }
    else if (operacao === "-") {
        return function (a, b) {
            return a - b;
        }
    }
}

const somar = calculo("+");
let soma = somar(2, 3);
console.log(soma);