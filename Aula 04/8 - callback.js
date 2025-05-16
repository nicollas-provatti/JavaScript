function fecharPedido(nome, callback) {
    console.log(`Usuário: ${nome}\nProcessando fechamento...`); 
    callback();
}

function mensagem() {
    console.log("Fechamento realizado!");
}

fecharPedido("Roger", mensagem);

/* -------------------------------  */

console.log('Início');

setTimeout(function () {
    console.log('Isso foi executado depois de 2 segundos!')
}, 5000)

console.log('Fim');

/* -------------------------------  */
document.getElementsByTagName('body')[0].onclick = function (event) {
    console.log('O evento ocorreu!')
}
