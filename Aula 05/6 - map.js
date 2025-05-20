// map(): numeros.map(callback)
const numeros = [1, 4, 9, 16, 12];

function dobrar(numero) {
    return numero * 2;
}
// função padrão
const numerosDobrados = numeros.map(dobrar);
console.log(numerosDobrados);

// função anônima
const numerosMetade = numeros.map(function (numero) {
    return numero / 2;
});
console.log(numerosMetade);

// função de seta
const numerosPares = numeros.map((numero) => {
    if (numero % 2 == 0) {
        return numero;
    }
});
console.log(numerosPares);





