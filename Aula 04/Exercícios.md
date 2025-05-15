# 📝 Exercícios

---

## Exercício 1 - `Verificador de Idade
**Descrição:** Crie uma função chamada verificarIdade que receba dois parâmetros: nome (com valor padrão "visitante") e idade. A função não deve retornar nenhum valor, apenas exibir uma mensagem com alert informando:

- "Olá, [nome]! Você é menor de idade." se a idade for menor que 18.
- "Olá, [nome]! Você é maior de idade." se a idade for 18 ou mais.

Antes de exibir a mensagem, verifique se a idade informada é válida: ela não pode ser negativa nem ultrapassar um valor máximo definido (por exemplo, 120). O programa deve começar perguntando ao usuário, por meio de confirm, se ele deseja verificar uma idade. Enquanto a resposta for positiva, utilize prompt para solicitar o nome e a idade da pessoa, e chame a função verificarIdade. O processo deve se repetir até que o usuário decida encerrar.

---

## Exercício 2 - Calculadora Simples 2
**Descrição:** Crie uma função chamada calcular que recebe três parâmetros: dois números e um operador (+, -, *, /, %). A função deve retornar o resultado da operação correspondente. Defina valores padrões para os parâmetros para o caso do usuário não informá-los.

---

## Exercício 3 - Saudação com Horário
**Descrição:** Você está desenvolvendo uma funcionalidade para exibir uma saudação diferente dependendo da hora do dia. Crie uma **função anônima** atribuída à variável `mensagemDeBoasVindas` que receba o nome de uma pessoa e a hora atual (de 0 a 23).

A função deve retornar:
- "Bom dia, [nome]!" se a hora estiver entre 6 e 11.
- "Boa tarde, [nome]!" se a hora estiver entre 12 e 17.
- "Boa noite, [nome]!" se a hora estiver entre 18 e 23.
- "Olá, [nome]!" nos demais casos.

---

## Exercício 4 - Cálculo de Desconto
**Descrição:** Você está ajudando a montar um sistema de compras online. Crie uma **arrow function** chamada `calcularDesconto` que receba dois parâmetros: preco e porcentagemDesconto, e retorne o valor com desconto aplicado. Depois, calcule o preço final de um produto que custa R$ 200 com 10% de desconto.

---

## Exercício 5 - Processando dois Usuários
**Descrição:** Você está criando uma função que vai exibir mensagens personalizadas para dois usuários.
Crie uma função chamada `exibirMensagem` que receba dois nomes (ex: `nome1` e `nome2`) e uma **função de callback**. O callback deve ser aplicado individualmente a cada nome e as mensagens devem ser exibidas com `console.log`. Em seguida, utilize `exibirMensagem` com um callback que retorne "Olá, [nome]! Que bom ver você aqui!".

---
