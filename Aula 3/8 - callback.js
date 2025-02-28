// Um callback é uma função passada como argumento para outra função e que será executada posteriormente, dentro da função que a recebeu. Isso permite um maior controle sobre a ordem de execução do código, sendo muito útil para operações assíncronas, eventos e manipulação de dados.

function processar(nome, callback) {
    console.log(`Processando o usuário ${nome}...`)
    callback()
}

function exebirMensagem() {
    console.log('Processamento concluído!')
}

processar('Lucas', exebirMensagem)

// Exemplo prático: Callback em setTimeout (assíncrono)
console.log('Início')

setTimeout(function () {
    console.log('Isso foi executado depois de 2 segundos!')
}, 2000)

console.log('Fim')

// Exemplo do browser
document.getElementsByTagName('body')[0].onclick = function (event) {
    console.log('O evento ocorreu!')
}