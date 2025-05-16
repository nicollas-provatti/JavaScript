# 📝 Exercícios

---

## Exercício 1 - Verificador de Idade
**Descrição:** Crie uma função chamada `verificarIdade` que receba dois parâmetros: **nome** (com valor padrão "visitante") e **idade**. A função não deve retornar **nenhum valor**, apenas exibir uma mensagem com `alert` informando:

- "Olá, [nome]! Você é menor de idade." se a idade for menor que 18.
- "Olá, [nome]! Você é maior de idade." se a idade for 18 ou mais.

Antes de exibir a mensagem, verifique se a idade informada é válida: ela não pode ser negativa nem ultrapassar um valor máximo definido (por exemplo, 120). O programa deve começar perguntando ao usuário, por meio de `confirm`, se ele deseja verificar uma idade. Enquanto a resposta for positiva, utilize `prompt` para solicitar o **nome** e a **idade** da pessoa, e chame a função `verificarIdade`. O processo deve se repetir até que o usuário decida encerrar.

---

## Exercício 2 - Calculadora Simples 2
**Descrição:**  Descrição: Crie um programa que solicite ao usuário dois **números** e um **operador matemático** (`+`, `-`, `*`, `/`, `%`), e passe esses valores para uma função chamada calcular, responsável por executar a operação correspondente e retornar o resultado. Caso algum parâmetro não seja informado, utilize valores padrão. O programa deve verificar se é possível realizar as operações de divisão e módulo, garantindo que o segundo número não seja zero. Após exibir o resultado, pergunte ao usuário se deseja fazer outro cálculo (**sim** ou **não**). Se a resposta for sim, repita o processo; caso contrário, finalize o programa com uma mensagem de encerramento. Certifique-se de validar as entradas e tratar erros para garantir o bom funcionamento do programa.

---

## Exercício 3 - Saudação com Horário
**Descrição:** Crie uma função anônima atribuída à variável `mensagemDeBoasVindas` que receba o nome de uma pessoa como parâmetro e exiba uma saudação personalizada com base no horário atual do sistema. Utilize o objeto `Date` junto com o método `getHours()` para determinar a hora do dia. Antes de chamar a função, solicite ao usuário que informe seu nome. A mensagem final deve combinar a saudação apropriada com o nome informado.

A função deve retornar:
- "Bom dia, [nome]!" se a hora estiver entre 6 e 11.
- "Boa tarde, [nome]!" se a hora estiver entre 12 e 17.
- "Boa noite, [nome]!" se a hora estiver entre 18 e 23.
- "Olá, [nome]!" nos demais casos.

---

## Exercício 4 - Cálculo de Desconto
**Descrição:** Você está desenvolvendo um sistema de compras online e precisa criar uma arrow function chamada `calcularDesconto`, que receba dois parâmetros: **preco** e **porcentagemDesconto**. A função deve retornar o valor final do produto após a aplicação do desconto. Em seguida, permita que o usuário informe os dados de vários produtos e visualize o valor com desconto, repetindo o processo até que ele decida encerrar, por meio de uma pergunta como "Deseja calcular o desconto de outro produto? (sim/não)". Certifique-se de validar as entradas e exibir o resultado formatado de forma clara para o usuário.

---

## Exercício 5 - Mensagem com Atraso
**Descrição:** Você está desenvolvendo um sistema que exibe mensagens em etapas, com um pequeno atraso entre elas, simulando carregamento ou notificação gradual.
Crie uma função chamada `executarComAtraso` que receba dois parâmetros: uma **mensagem** e uma **função callback**. A função deve exibir a mensagem após 2 segundos usando setTimeout, e depois que a mensagem for exibida, deve chamar a função de callback passada. A função callback pode exibir uma saudação final ao usuário.

---
