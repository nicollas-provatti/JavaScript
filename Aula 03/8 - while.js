let contador = 1;

while (contador <= 100) {
    console.log(contador);
    contador++;
}

while (true) {
    let numeroAleatorio = Math.ceil(Math.random() * 10);

    if (numeroAleatorio == 3) {
        console.log("Saindo do laço...");
        break;
    }

    console.log(numeroAleatorio);
}