// Suponha que você queira usar uma variável para contar algo.

// Solução 1:
let contador = 0

function add1() {
    contador++
}

add1()
add1()
add1()
//contador = 5

console.log(contador)
// Há um problema com a solução acima: qualquer código na página pode alterar o contador, sem chamar add().


// Solução 2:
function add2() {
    let contador = 0
    contador++
    return contador
}

let x = 0

x = add2()
x = add2()
x = add2()

console.log(x)
// Não funcionou porque zeramos o contador local toda vez que chamamos a função.


// Solução 3:
function add3() {
    let contador = 0
    function incremento() { contador++ }
    incremento()
    return contador
}

console.log(add3())
console.log(add3())
//console.log(incremento())


// Solução 4: Usando closure
function contar() {
    let contador = 0
    function incremento() {
        contador++
        return contador
    }
    return incremento
}

const add4 = contar() // quem add4 recebe ?
/* 
add4 = function() { 
    contador++
    return contador
} */

let y = 0
y = add4()
y = add4()
y = add4()

console.log(y)

