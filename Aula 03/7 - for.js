for (let contador = 1; contador <= 5; contador++) {
    console.log("Olá, mundo!");
}

for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
}

let qtdRepeticoes = Number(prompt("Quantas números você vai digitir ?"));
let soma = 0;

for (let contador = 1; contador <= qtdRepeticoes; contador++) {
    let numero = Number(prompt("Digite um número: "));

    soma += numero;
}

alert(`A soma dos números foi ${soma}`);