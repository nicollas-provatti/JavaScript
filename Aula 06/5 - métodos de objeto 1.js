const produto = {
    nome: "Celular", 
    preco: 2000, 
    estoque: 50
}

// keys()
let chaves = Object.keys(produto);
console.log(chaves);

// values()
let valores = Object.values(produto);
console.log(valores);

// entries()
let chaveValor = Object.entries(produto);
console.log(chaveValor);


// Iteração
for (let chave in produto) {
    console.log(`chave: ${produto[chave]}`);
}
