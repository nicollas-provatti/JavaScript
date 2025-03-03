# Estruturas de Decisão e Repetição em JavaScript

## Estruturas de Decisão

### Conceito de Estruturas de Decisão
Estruturas de decisão são utilizadas para controlar o fluxo do programa, permitindo que determinadas instruções sejam executadas com base em condições lógicas.

### if (simples)
A estrutura `if` permite a execução de um bloco de código se uma condição for verdadeira.

```javascript
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

### if-else
Caso a condição do `if` não seja atendida, o `else` será executado.

```javascript
let idade = 16;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

### if-else aninhados
Um `if` dentro de outro `if`, criando múltiplas verificações.

```javascript
let nota = 85;
if (nota >= 60) {
    console.log("Aprovado");
    if (nota >= 90) {
        console.log("Parabéns! Excelente nota!");
    }
} else {
    console.log("Reprovado");
}
```

### else if
Usado para testar múltiplas condições de forma organizada.

```javascript
let nota = 75;
if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else {
    console.log("Reprovado");
}
```

### switch
Alternativa ao `if-else` quando há muitas verificações de igualdade.

```javascript
let dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
}
```

---

## Estruturas de Repetição

### Conceito de Estruturas de Repetição
São utilizadas para repetir a execução de um bloco de código enquanto uma condição for verdadeira.

### for
Utilizado quando sabemos previamente a quantidade de repetições.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
```

### while
Executa um bloco de código enquanto uma condição for verdadeira.

```javascript
let contador = 0;
while (contador < 5) {
    console.log("Contagem: " + contador);
    contador++;
}
```

### do-while
Semelhante ao `while`, mas garante que o bloco de código seja executado ao menos uma vez.

```javascript
let numero = 0;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 5);
```

### Diferença entre do-while e while
A principal diferença é que `do-while` executa pelo menos uma vez, mesmo que a condição seja falsa, enquanto `while` pode não executar nenhuma vez caso a condição já seja falsa no início.

### Quando usar cada laço
- **`for`**: Quando sabemos quantas vezes o bloco de código deve ser executado.
- **`while`**: Quando não sabemos o número exato de repetições e precisamos verificar uma condição antes de executar.
- **`do-while`**: Quando queremos garantir pelo menos uma execução do bloco de código antes da verificação da condição.

---

## Métodos Úteis de `Number`, `String` e `Math`

### Number
- `toString()`: Converte um número em string.
- `Number()`: Converte um valor para número.
- `toFixed(n)`: Define a quantidade de casas decimais.
- `isInteger()`: Verifica se um número é inteiro.
- `parseInt()`: Converte uma string para número inteiro.
- `parseFloat()`: Converte uma string para número decimal.

```javascript
let num = 12.345;
console.log(num.toString());  // "12.345"
console.log(Number("10"));  // 10
console.log(num.toFixed(2)); // "12.35"
console.log(Number.isInteger(10.5)); // false
console.log(parseInt("25px")); // 25
console.log(parseFloat("12.34")); // 12.34
```

### String
- `length`: Retorna o tamanho da string.
- `slice(início, fim)`: Retorna parte da string.
- `trim()`: Remove espaços em branco.
- `replace()`: Substitui um valor na string.
- `toUpperCase()`: Converte para maiúsculas.
- `toLowerCase()`: Converte para minúsculas.

```javascript
let texto = "  JavaScript é incrível!  ";
console.log(texto.length); // 23
console.log(texto.slice(0, 10)); // "  JavaScri"
console.log(texto.trim()); // "JavaScript é incrível!"
console.log(texto.replace("incrível", "fantástico")); // "  JavaScript é fantástico!  "
console.log(texto.toUpperCase()); // "  JAVASCRIPT É INCRÍVEL!  "
console.log(texto.toLowerCase()); // "  javascript é incrível!  "
```

### Math
- `pow(x, y)`: Retorna `x` elevado a `y`.
- `sqrt(x)`: Retorna a raiz quadrada de `x`.
- `min(x1, x2, ...)`: Retorna o menor valor.
- `max(x1, x2, ...)`: Retorna o maior valor.
- `random()`: Retorna um número aleatório entre 0 e 1.
- `floor(x)`: Arredonda para baixo.
- `ceil(x)`: Arredonda para cima.

```javascript
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.min(10, 5, 20)); // 5
console.log(Math.max(10, 5, 20)); // 20
console.log(Math.random()); // Número aleatório entre 0 e 1
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1)); // 5
```

---
