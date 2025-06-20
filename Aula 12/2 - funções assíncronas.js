// Funções asssíncronas
setTimeout(() => {
    console.log("Executando depois de 2 segundos!");
}, 2000);

setInterval(() => {
    console.log("Executando a cada 2 segundos!");
}, 2000);

// Cancelando a execução
const timeout = setTimeout(() => {
    console.log("Executando depois de 2 segundos!");
}, 2000);

clearTimeout(timeout);

const interval = setInterval(() => {
    console.log("Executando a cada 2 segundos!");
}, 2000);

clearInterval(interval);