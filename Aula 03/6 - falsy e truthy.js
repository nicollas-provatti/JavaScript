let valor = 20;

// Falsy: undefined, null, NaN, "", 0
// Truthy: number != 0, " ", [], {}

if (valor) {
    console.log("Truthy");
    console.log(`Valor: ${valor}`);
}
else {
    console.log("Falsy");
    console.log("Valor não informado!");
}