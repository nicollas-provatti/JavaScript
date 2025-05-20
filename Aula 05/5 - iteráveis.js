const numeros = [10, 20, 30, 40, 50];

// for padrão
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// for...of
for (let numero of numeros) {
    console.log(numero);
}

// for...in
for (let indice in numeros) {
    console.log(`[${indice}] = ${numeros[indice]}`);
}

// forEach(): numeros.forEach(callback)

numeros.forEach(callback);

function callback(value, index, array) {
    /* console.log(value);
    console.log(index);
    console.log(array); */
    console.log(`[${index}] = ${value}`);
}

numeros.forEach((value) => {
    if (value >= 30) {
        console.log(value);
    }
});

