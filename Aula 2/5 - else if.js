let nota = 11

if (nota >= 7 && nota <= 10) {
    console.log('aprovado')
} 
else if (nota >= 5 && nota < 7) {
    console.log('recuperação')
}
else if (nota >= 0 && nota < 5) {
    console.log('reprovado')
}
else {
    console.log('nota inválida')
}