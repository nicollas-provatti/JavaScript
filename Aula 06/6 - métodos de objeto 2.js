const produto = {
    nome: "Celular", 
    preco: 2000, 
    estoque: 50
};

// defineProperty()
Object.defineProperty(produto, "desconto", {
    value: 10,
    writable: false,
    enumerable: true
});

produto.desconto = 20;

console.log(produto);

// assign()
const infoAdicionais = {
    // nome: "Notebook",
    garantia: "1 ano",
    cor: "Preto"
};

const novoProduto = Object.assign({}, produto, infoAdicionais);

console.log(novoProduto);


// ----- //
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

// preventExtensions()
Object.preventExtensions(usuario);
usuario.limiteCredito = 1000;
usuario.fatura = 2000;
delete usuario.idade;

// seal()
Object.seal(usuario);
usuario.limiteCredito = 1000;
usuario.fatura = 2000;
delete usuario.idade;

// freeze()
Object.freeze(usuario);
usuario.limiteCredito = 1000;
usuario.fatura = 2000;
delete usuario.idade;


console.log(usuario);