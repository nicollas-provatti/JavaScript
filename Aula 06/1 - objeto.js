let nome;
let idade;
let email;

// Criando
const cliente = {
    nome: "Nícollas",
    idade: 23,
    email: "npg@ic.ufal.br"
};

// Modificação
cliente.email = "flavinhodopeneu@hotmail.com";
cliente.altura = 1.85;

// Acesso
console.log(`Nome: ${cliente.nome}`);
console.log(`Idade: ${cliente.idade}`);
console.log(`Email: ${cliente.email}`);
console.log(`Altura: ${cliente.altura}`);

console.log(cliente);

