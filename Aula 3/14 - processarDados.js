function processarDado(dado) {
    switch (typeof dado) {
        case 'string':
            return `Texto em maiúsculas: ${dado.toLocaleUpperCase()}`
        case 'number':
            return `Dobro do número: ${dado *2}`
        case 'boolean':
            return `Valor booleano invertido: ${!dado}`
        case 'object':
            return dado === null ? 'É um valor nulo!' : `É um objeto com ${Object.keys(dado).length} propriedades`; 
        case 'function':
            return `Executando função: ${dado()}`;
        default:
            return 'Tipo de dado não reconhecido';
    }
}

console.log(processarDado("hello"));         // "Texto em maiúsculas: HELLO"
console.log(processarDado(10));              // "Dobro do número: 20"
console.log(processarDado(true));            // "Valor booleano invertido: false"
console.log(processarDado({ nome: "Lucas" })); // "É um objeto com 1 propriedades"
console.log(processarDado(null));            // "É um valor nulo!"
console.log(processarDado(() => "Oi!"));     // "Executando função: Oi!"
console.log(processarDado(undefined));       // "Tipo de dado não reconhecido"