// O contexto léxico em JavaScript refere-se ao local onde uma função é 
// definida e determina quais variáveis e escopos estarão acessíveis 
// dentro dela. Ou seja, uma função "lembra" do ambiente onde foi 
// criada e pode acessar variáveis desse escopo, mesmo que seja 
// chamada em outro local do código.

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()