// Métodos
//Funções: keys(), values(), entries(), defineProperty(), assign(), preventExtensions(), seal(), freeze()

const produto = {
    nome: "Celular", 
    preco: 2000, 
    estoque: 50
}

// keys(): Retorna um array com as chaves (keys) do objeto.
console.log(Object.keys(produto))

// values(): Retorna um array com os valores do objeto.
console.log(Object.values(produto))

// entries(): Retorna um array de arrays, onde cada sub-array contém um par chave/valor.
console.log(Object.entries(produto))

// defineProperty(obj, prop, descriptor): Define uma propriedade com configurações personalizadas, como se pode ou não ser modificada ou enumerada.

Object.defineProperty(produto, "desconto", {
    value: 10,
    writable: false,
    enumerable: true // false
})

produto.desconto = 20
console.log(produto)

// Object.assign(target, ...sources): Copia as propriedades de um ou mais objetos para um objeto de destino.

const adicionais = {
    //nome: "Notebook",
    garantia: "1 ano",
    cor: "Preto"
}

const novoProduto = Object.assign({}, produto, adicionais)

console.log(novoProduto)

// ------------------------- //

const usuario = {
    id: 7,
    nome: "João",
    idade: 29,
    saldo: 1450.95,
    tipoConta: "Corrente",
    cartao: ["Crédito", "Débito"],
    limiteCredito: 5000.00,

    exibirSaldo: function() {
        return `Saldo disponível: R$ ${this.saldo.toFixed(2)}`;
    }
};


// preventExtensions(): Impede que novas propriedades sejam adicionadas, mas permite modificar ou excluir as existentes.
Object.preventExtensions(usuario)
usuario.limiteCredito = 10000
usuario.fatura = 2000
delete usuario.idade

console.log(usuario) 

// Object.seal(): Veda o objeto: não permite adicionar nem remover propriedades, mas permite modificar valores existentes.

Object.seal(usuario)
usuario.fatura = 2000
delete usuario.idade
usuario.idade = 25

console.log(usuario)

// freeze():  impede qualquer alteração em um objeto.
Object.freeze(usuario)

usuario.id = 5
usuario.fatura = 2000
delete usuario.idade 

console.log(usuario)



