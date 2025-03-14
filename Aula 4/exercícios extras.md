# 1️⃣ Sistema de Reserva de Hotel

## Descrição
Crie um sistema de reservas de hotel. Cada quarto do hotel será representado por um objeto com as seguintes propriedades:

- `numero`: número do quarto.
- `ocupado`: `true` se estiver ocupado, `false` caso contrário.
- `hospede`: nome do hóspede (caso esteja ocupado).

### 📌 Requisitos
O sistema deve:

1. Criar um array chamado `hotel` com **cinco quartos** numerados de 101 a 105, todos desocupados.
2. Criar uma função `reservarQuarto(hotel, nomeHospede)` que:
    - Procura um quarto livre no hotel e atribui o hóspede a ele.
    - Caso todos os quartos estejam ocupados, exibe uma mensagem `"Hotel lotado!"`.
3. Criar uma função `liberarQuarto(hotel, numero)` que:
    - Encontra o quarto pelo número e libera-o, removendo o hóspede.
    - Caso o quarto já esteja livre, exibe `"Este quarto já está disponível."`.
4. Criar uma função `listarQuartos(hotel)` que retorna um **array com os números dos quartos ocupados**.

### 📌 Exemplo de uso
```javascript
reservarQuarto(hotel, "João");
reservarQuarto(hotel, "Maria");
console.log(listarQuartos(hotel)); 
// Resultado esperado: [101, 102]

liberarQuarto(hotel, 101);
console.log(listarQuartos(hotel)); 
// Resultado esperado: [102]
```

---

# 2️⃣ Gerenciador de Estoque Inteligente

## Descrição
Crie um programa para gerenciar um estoque de produtos. Cada produto deve ter as seguintes propriedades:

- `nome`: nome do produto.
- `preco`: preço do produto.
- `quantidade`: quantidade em estoque..

### 📌 Requisitos
O programa deve:

1. Criar um **array chamado** `estoque` com **cinco produtos** de sua escolha.
2. Criar uma função `venderProduto(nome, qtd)` que:
    - Verifica se o produto existe no estoque.
    - Se houver quantidade suficiente, reduz a quantidade do estoque.
    - Se não houver, exibe `"Estoque insuficiente para este produto."`.
3. Criar uma função `adicionarProduto(nome, preco, qtd)` que adiciona um novo produto ao estoque.
4. Criar uma função `estoqueBaixo()` que retorna **um array com os produtos que têm menos de três unidades**.

### 📌 Exemplo de uso
```javascript
venderProduto("Arroz", 2);
estoqueBaixo();  
// Resultado esperado: ["Feijão", "Óleo"]
```

--- 

# 3️⃣ Registro de Alunos e Médias

## Descrição:
Crie um programa que armazene alunos e suas notas. Cada aluno deve ser um objeto com:

- `nome`: nome do aluno.
- `notas`: um array de três números representando suas notas.

## 📌 Requisitos:
O programa deve:

1. Criar um array chamado `alunos` com pelo menos **três alunos**.
2. Criar uma função `calcularMedia(nome)` que:
    - Encontra o aluno pelo nome.
    - Calcula e retorna a **média das notas**.
3. Criar uma função alunosAprovados() que retorna **um array com os nomes dos alunos cuja média seja maior ou igual a 7**.

## 📌 Exemplo de uso:
```javascript
console.log(calcularMedia("Ana")); 
// Resultado esperado: 8.3

console.log(alunosAprovados());  
// Resultado esperado: ["Ana", "Carlos"]
```

---

# 4️⃣ Analisador de Comentários
Crie um programa que analise **comentários** de usuários em um site. Cada comentário deve ser um objeto com:

- `usuario`: nome do usuário.
- `texto`: texto do comentário.
- `likes`: número de curtidas.

## 📌 Requisitos:
O programa deve:

1. Criar um **array chamado** `comentarios` com pelo menos **cinco comentários**.
2. Criar uma função `topComentarios()` que retorna **os três comentários com mais curtidas**.
3. Criar uma função `buscarComentario(palavra)` que retorna **um array com os comentários que contenham essa palavra no texto**.

## 📌 Exemplo de uso:
```javascript
console.log(topComentarios());  
// Resultado esperado: [Comentário com 50 likes, Comentário com 40 likes, Comentário com 35 likes]

console.log(buscarComentario("JavaScript"));  
// Resultado esperado: [Comentário que contém "JavaScript"]
```