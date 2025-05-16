function executar(dado) {
    switch (typeof dado) {
        case 'string':
            return `Texto em maiúsculas: ${dado.toLocaleUpperCase()}`
        case 'number':
            return `Dobro do número: ${dado * 2}`
        case 'boolean':
            return `Valor booleano invertido: ${!dado}`
        case 'undefined':
            return 'É valor indefinido'
        case 'object':
            return dado === null ? 'É um valor nulo!' : `É um objeto com ${Object.keys(dado).length} propriedades`; 
        case 'function':
            return `Executando função: ${dado()}`;
        default:
            return 'Tipo de dado não reconhecido';
    }
}


console.log(executar("Hello"));
console.log(executar(10));
console.log(executar(true));
console.log(executar({ nome: "Lucas" }));
console.log(executar(undefined));
console.log(executar(null));
console.log(executar(() => "Oi!"));