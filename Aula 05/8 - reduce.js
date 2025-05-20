// reduce(): numeros.reduce(callback)
const numeros = [1, 4, 9, 16, 12];

const soma = numeros.reduce((acumulador, atual) => {
    console.log(` Índice: ${indice} = Acumuldor: ${acumulador}, Atual: ${atual}`);
    return acumulador + atual;
})

console.log(soma);