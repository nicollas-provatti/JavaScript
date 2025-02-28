let global = 10

function func1() {
    let local = 30
    console.log(`global: ${global}`)
    console.log(`local: ${local}`)
    global = 20 // Alterando valor
}

function func2() {
    console.log(`global: ${global}`)
    console.log(`local: ${local}`) // Nao definida nesse bloco
}

func1()
func2()

function func3() {
    let n1 = 10, n2 = 20

    if (n1 > 0) {
        n2++
        let n3 = n2
        console.log(`n3: ${n3}`)
    }

    console.log(`n2: ${n2}`)
    console.log(`n3: ${n3}`) // Nao definida nesse bloco
}

func3()

