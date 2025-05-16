function calcularArea(largura, altura) {
    const area = largura * altura;

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`);
    }
    else {
        return area;
    }
}

console.log(calcularArea(2, 3))
console.log(calcularArea(2))
console.log(calcularArea()) 
console.log(calcularArea(2, 3, 4, 5)) 
console.log(calcularArea(5, 5)) 