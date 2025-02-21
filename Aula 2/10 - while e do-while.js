// Diferença entre while e do-while
let i = 5

do {
    console.log(i)
    i++
} while (i < 5)

while (i < 5) {
    console.log(i)
}

// No do while o bloco de código é executado primeiro e só depois a condição é verificada, ou seja, independente da condição ser true ou false o bloco de código vai ser executado ao menos uma vez.

// Já no while a condição é verificada antes da execução do bloco o que pode fazer com que o ele nunca seja executado.

