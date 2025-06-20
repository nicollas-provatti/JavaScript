const url = "https://jsonplaceholder.typicode.com/users";

// Explicar o async
// Como laçar erros com: if e throw
// Explicar o await
// try catch

/*1. function saudacao() {
    return "Olá";
} */

/*2. async function saudacao() {
    return "Olá";
}

saudacao().then(mensagem => console.log(mensagem)); */

/*3. function somar(numero1, numero2) {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
        throw "numero1 e numero2 devem ser números!";
    }

    return numero1 + numero2;
}
 */

/*4. async function somar(numero1, numero2) {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
        throw "numero1 e numero2 devem ser números!";
    }

    return numero1 + numero2;
}

somar("x", "y")
    .then(valor => console.log(valor))
    .catch(erro => console.log(erro)) */

/*5. function getUsers() {
    return fetch(url);
}

getUsers().then(resposta => console.log(resposta)); */

/*6. async function getUsers() {
    const response = await fetch(url);

    console.log(response);
}

getUsers(); */

/*7. async function getUsers() {
    const response = await axios.get(url);

    console.log(response.data);
}

getUsers()
    .catch(erro => console.log("Erro: ", erro));
 */

/*8. async function getUsers() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    }
    catch(erro) {
        console.log("Erro: ", erro)
    }
}   

getUsers();
 */