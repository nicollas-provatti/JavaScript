let idade;
let altura;
let genero;
let nome;
let programador;

idade = Number(prompt("Sua idade: "));
altura = Number(prompt("Sua altura: "));
genero = prompt("Seu gênero: ");
nome = prompt("Seu nome: ");
programador = prompt("É programador ?");

alert("Nome: " + nome + "\nIdade: " + idade + "\nAltura: " + altura + "\nGênero: " + genero + "\nProgramador: " + programador);

confirm("Seu dados estão corretos ?");