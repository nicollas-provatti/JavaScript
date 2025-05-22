const produtos = [];

class Produto {
    constructor(nome, preco, categoria, emEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.emEstoque = emEstoque;
    }
}

produtos.push(new Produto("Celular", 2000, "Eletrônico", true));
produtos.push(new Produto("Notebook", 3500, "Informática", false));
produtos.push(new Produto("Fone de Ouvido", 250, "Acessório", true));
produtos.push(new Produto("Monitor", 900, "Informática", true));

console.log(produtos);


const emEstoque = produtos.filter(produto => produto.emEstoque);

console.log("Produto em Estoque");
console.log(emEstoque);