// Propriedades
const produto = {
    nome: "Celular",
    preco: 2000,
    categorias: ["Eletrônicos", "Smartphones"],

    fabricante: {
        nome: "TechCorp",
        pais: "EUA"
    },

    aplicarDesconto: function(percentual) {
        return this.preco - (this.preco * (percentual / 100))
    }
}

console.log(produto)
console.log(produto.categorias)
console.log(produto.categorias[1])
console.log(produto.fabricante.pais)
console.log(produto.aplicarDesconto(50))

delete produto.nome // Excluindo chave/valor

console.log(produto)