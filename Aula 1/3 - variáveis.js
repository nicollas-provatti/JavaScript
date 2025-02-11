// Variáveis são espaços na memória do computador que servem para armazenar dados

// Em JavaScript, podemos declarar variáveis usando var, let e const, mas cada uma tem características distintas. Vamos analisar suas diferenças.

/*Características do var
✅ Pode ser redeclarado dentro do mesmo escopo.
✅ Possui escopo de função (não respeita blocos {}).
✅ É içado (hoisting), mas inicializado como undefined.
*/

var nome = "Ana";
var nome = "Bel"; // Sem erro
console.log(nome);

{
    {
        var altura = 1.85; // Ignora os blocos
    }
    console.log(altura);
}

/*Características do let
✅ Não pode ser redeclarado no mesmo escopo.
✅ Possui escopo de bloco {}.
✅ É içado (hoisting), mas não inicializado.
*/

let idade = 25;
let idade = 30; // ❌ Erro: O identificador ‘idade’ já foi declarado
idade = 30;
console.log(idade);

{
    {
        let peso = 75.5; // visível apenas no bloco que foi declarada
    }
    console.log(peso); // ❌ Erro: peso não está definido (pois está fora do bloco)
}


/*Características do const
✅ Não pode ser redeclarado.
✅ Não pode ser reatribuído após a declaração.
✅ Possui escopo de bloco {}.
✅ Precisa ser inicializado no momento da declaração.
*/

const PI = 3.14;
PI = 3.1416 // ❌ Erro: Atribuição à variável constante


/* Quando Usar Cada Um?
✔️ Use const por padrão, a menos que precise reatribuir o valor.
✔️ Use let quando precisar de uma variável que pode mudar.
❌ Evite var em novos projetos, pois pode causar comportamentos inesperados.
*/