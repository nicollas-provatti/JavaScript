// filter(): numeros.filter(callback)
const numeros = [1, 4, 9, 16, 12];

const numerosPares = numeros.filter(numero => {
    if (numero % 2 == 0) {
        return numero;
    }
});

console.log(numerosPares);

// Encadear métodos
const novoArray = numeros
                    .filter(numero => numero % 2 != 0)
                    .map(numero => numero * numero);

console.log(novoArray);

