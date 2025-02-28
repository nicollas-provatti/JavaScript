// No EJ6 foi introduzido um novo tipo de função, que é a função arrow. Essa função tem dois objetivos: ser mais curta e ter um this associoado ao contexto no qual a função foi escrita. Nós vamos focar na sintaxe reduzida.

let dobrar = function (a) {
    return a * 2
}

dobrar = (a) => {
    return a * 2
}

// Sintaxe reduzido para apenas um parâmetro e retorno implícito
dobrar = a => 2 * a

console.log(dobrar(5))

// Outro exemplo:
let mensagem = function () {
    return 'Olá, mundo!'
}

mensagem = () => 'Olá, mundo!'
mensagem = _ => 'Olá, mundo!' // ignora o parâmetro

console.log(mensagem())