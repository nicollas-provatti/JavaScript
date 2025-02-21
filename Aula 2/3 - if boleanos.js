let valor
valor = null
valor = NaN
valor = ''
valor = 0

valor = -1
valor = 1
valor = ' '
valor = '?'
valor = []
valor = {}

if (valor) {
    console.log(`${valor} é verdade`)
}
else {
    console.log(`${valor} é falso`)
}

// false: undefined, null, NaN, '', 0
// true: number != 0, ' ', [], {}
