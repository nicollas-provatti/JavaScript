const url = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.getElementById("lista-usuarios");

/* function getUsers() {
    fetch(url)
        .then(resposta => {
            if (!resposta.ok) {
                throw "Erro na requisição!";
            }
            return resposta.json();
        })
        .then(dados => {
            console.log(dados);
        })
        .catch(erro => {
            console.log("Erro: ", erro);
        })
}

getUsers(); */

async function getUsers() {
    try {
        const resposta = await axios.get(url);
        const usuarios = resposta.data;
        
        usuarios.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = `id: ${usuario.id}, nome: ${usuario.name}, telefone: ${usuario.phone}`;

            listaUsuarios.appendChild(li);
        })

    } catch (erro) {
        console.log("Erro: ", erro);
    }
}

getUsers();

