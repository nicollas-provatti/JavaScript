const minhaPromise = new Promise((resolve, reject) => {
    const resultado = false;
    const dado = {nome: "Nicollas", idade: 23};
    const erro = {status: "Rejeitado", mensagem: "A promisse não foi resolvida"};

    if (resultado === true) {
        resolve(dado);
    }
    else {
        reject(erro);
    }
    
});

minhaPromise
    .then(response => response)
    .then(dado => console.log(dado))
    .catch(erro => console.log(erro));
