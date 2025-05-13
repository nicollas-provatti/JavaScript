let opcao;

console.log("--------Menu-------");
console.log("1 - Adicionar Livro");
console.log("2 - Remover Livro");
console.log("3 - Listar Livros");
console.log("4 - Buscar Livro");
console.log("-------------------\n");

switch (parseInt(opcao)) {
    case 1:
        console.log("Adicionando livro...");
        break;
    case 2:
        console.log("Removendo livro...");
        break;
    case 3:
        console.log("Listando livros...");
        break;
    case 4:
        console.log("Buscando livro...");
        break;
    default:
        console.log("Opção Inválida!");
}

