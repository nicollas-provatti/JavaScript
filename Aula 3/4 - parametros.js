// Em JavaScript parâmetros e retornos são opcionais
function calcularArea(largura, altura) {
    const area = largura * altura

    if (area > 20) { // não tem retorno
        console.log(`Valo acima do permitido: ${area}m2.`)
    }
    else {
        return area // tem retorno
    }
}

console.log(calcularArea(2, 3))
console.log(calcularArea(2)) // não reclama
console.log(calcularArea()) // não reclama
console.log(calcularArea(2, 3, 4, 5)) // não reclama
console.log(calcularArea(5, 5)) // sem retorno

// Em JavaScript é possível ter parâmetros variáveis
//O array "arguments" está presente em todas as funções, incialmente ele se encontra vazio. Ele permite o acesso aos argumentos que foram passados na função. 
function func1() {
    console.log(arguments) 
}

func1(2, 3, 4, 5)
func1(2.2, 3.3, 4.4, 5.5)
func1("Olá", "Tudo", "Bem ?")

// O operador spread (...) em JavaScript pode ser usado para lidar com um número variável de argumentos em uma função. É uma abordagem mais recente comparada com o arguments

function func2(...numeros) {
    console.log(numeros)
}

func2(2, 3, 4, 5)
func2(2.2, 3.3, 4.4, 5.5)
func2("Olá", "Tudo", "Bem ?")