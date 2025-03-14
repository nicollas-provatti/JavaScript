// Definição de objeto

// literal
const cliente = {
    nome: "Lucas",
    idade: 19
}

cliente.peso = "75" // dinâmico

console.log(cliente)

// new
const aluno = new Object() // vazio

aluno.nome = "Marcos"
aluno.faltas = 15
aluno.nota = 8.7

console.log(aluno)
console.log(aluno.nota)
console.log(aluno["nota"]) // outra forma

// contrutor
// função construtora
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

const produto1 = new Produto("Celular", 1500)
console.log(produto1)

// class ES6
class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

const produto2 = new Produto("Notebook", 3000)
console.log(produto2)