# Exercícios sobre Funções em JavaScript

## 1. Calculadora Simples
Crie uma função chamada **calcular** que recebe três parâmetros:

- Dois números
- Um operador (`+`, `-`, `*`, `/`, `%`)

A função deve retornar o resultado da operação correspondente. Se os dois primeiros parâmetros não forem números, exiba uma mensagem informando o erro. Se o operador for inválido, exiba uma mensagem informando o erro. Defina valores padrões para os parâmetros para o caso do usuário não informá-los.

---

## 2. Verificador de Números Primos
Crie uma função chamada **ehPrimo** que recebe um número inteiro positivo e retorna `true` se for primo e `false` caso contrário. Certifique-se de que o valor recebido é um número.

📌 **Regras:**

- Um número primo só é divisível por `1` e por ele mesmo.
- Use um `for` para verificar se há divisores além do `1` e dele mesmo.
- Retorne `false` assim que encontrar um divisor.

---

## 3. Simulador de Sorteio
Crie uma função chamada **sorteio** que recebe dois números representando um intervalo e sorteia um número aleatório dentro desse intervalo.

---

## 4. Calculadora Automática
Crie um programa que simula uma **calculadora automática** que executa operações matemáticas a cada **2 segundos** de forma aleatória. 

### **📌 Requisitos:**

1. Sortear **dois números inteiros** entre `0` e `99`.
2. Sortear uma operação entre:
   - Soma (`+`)
   - Subtração (`-`)
   - Multiplicação (`*`)
   - Divisão (`/`)
   - Resto da divisão (`%`)
3. Utilizar **funções de alta ordem** para tornar o código modular e reutilizável.
4. Exibir o cálculo realizado no formato:
   - **Exemplo:** `42 + 15 = 57`
5. Para **divisão e resto da divisão**, se o segundo número for `0`, exibir a mensagem de erro `"Error: divisão por zero"` e gerar uma nova operação sem interromper o programa.
6. **Melhoria Extra:** Exibir os resultados da **divisão e do resto da divisão** com duas casas decimais.
7. O programa deve rodar **infinitamente** até ser interrompido manualmente.

---

## 5. **DESAFIO – Função Geradora de CPF Aleatório**
Crie uma função chamada **gerarCPF** que gera um CPF aleatório no formato `"XXX.XXX.XXX-XX"`, onde cada `X` é um número entre `0` e `9`.
