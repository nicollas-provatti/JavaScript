// Liteal
const aluno = {
    nome: "Lucas",
    nota: 7.5
};

aluno.status = "Aprovado!";

console.log(aluno);


// new
const carro = new Object();

carro.marca = "Fiat";
carro.ano = 2024;
carro.preco = 50000;

console.log(carro);


// Construtor
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const produto1 = new Produto("Celular", 1500);
console.log(produto1);

const produto2 = new Produto("Notebook", 3500);
console.log(produto2);

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const produto3 = new Produto("Computador", 5000);
console.log(produto3);
