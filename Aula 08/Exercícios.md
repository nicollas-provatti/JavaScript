# 📝 Exercícios

---

## 🔹 Exercício 1 - Sistema de Reações
**Objetivo:** Criar funções JavaScript para lidar com eventos de clique em três botões diferentes: **Gostei**, **Não gostei**, **Favoritar** e **Limpar**, atualizando os respectivos contadores na tela.

**Tarefa:**
Na tag `<script>`, você deve:

**Criar três funções, uma para cada botão:**
- `registrarLike()` - Atualiza o número de likes
- `registrarDislike()` - Atualiza o número de dislikes
- `registrarFavorito()` Atualiza o número de favoritos
- `limparRegistro()` - Zera todos os registros


**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exercício 1: Sistema de Reações</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      padding: 40px;
      text-align: center;
    }

    .post {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      padding: 20px;
      max-width: 400px;
      margin: auto;
    }

    .post img {
      width: 100%;
      border-radius: 10px;
    }

    .curtidas {
      margin-top: 15px;
      font-size: 18px;
      display: flex;
      justify-content: space-around;
    }

    .fa-thumbs-up {
        color: green;
    }

    .fa-thumbs-down {
        color: red;
    }

    .fa-star {
        color: rgb(233, 233, 43);
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      border: none;
      color: white;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
    }

    #btn-like {
      
      background-color: rgb(0, 184, 0);
    }

    #btn-like:hover {
      background-color: green;
    }

    #btn-dislike {
      background-color: red;
    }

    #btn-dislike:hover {
      background-color: rgb(202, 0, 0);
    }

    #btn-favorite {
      background-color: orange;
    }

    #btn-favorite:hover {
      background-color: rgb(194, 126, 0);
    }

    #btn-limpar {
      background-color: blue;
    }

    #btn-limpar:hover {
      background-color: rgb(0, 0, 196);
    }
  </style>
</head>
<body>

  <div class="post">
    <img src="https://picsum.photos/400/200" alt="Imagem do post">
    <div class="curtidas">
        <p><i class="fa-regular fa-thumbs-up"></i>: <span id="contador-like">0</span></p>
        <p><i class="fa-regular fa-thumbs-down"></i>: <span id="contador-dislike">0</span></p>
        <p><i class="fa-regular fa-star"></i>: <span id="contador-favoritos">0</span></p>
    </div>
    <button id="btn-like">Gostei</button>
    <button id="btn-dislike">Não gostei</button>
    <button id="btn-favorite">Favoritar</button>
    <button id="btn-limpar">Limpar</button>
  </div>

  <script>
    // Escreva o código aqui
  </script>
</body>
</html>
```

---

## 🔹 Exercício 2 - Filtro de Produtos
**Objetivo:** Criar uma função que filtre uma lista de produtos à medida que o usuário digita no campo de busca, utilizando o evento de teclado `keyup`.

**Tarefa:**
Implemente uma função que será executada sempre que o usuário digitar no campo de busca. Ela deve:

**1.** Obter o valor digitado e compará-lo com os nomes dos produtos da lista (`<li>`), sem diferenciar maiúsculas de minúsculas.

**2.** Para cada produto:
  - Exibir e destacar (`highlight`) se o nome contém o termo digitado.
  - Esconder (`hidden`) e remover o destaque caso contrário.

**3.** Exibir a quantidade de resultados encontrados.

**4.** Se n**enhum item for encontrado**, mostrar a mensagem de erro.

**5.** Se o campo de busca estiver **vazio**, mostrar todos os produtos, remover os destaques e esconder a mensagem e o contador.

**6.** A busca não deve **diferenciar maiúsculas de minúsculas**.

**Dicas:**
- Use `toLowerCase()` para fazer comparações sem considerar letras maiúsculas/minúsculas.
- Use `includes` para determinar se um conjunto de caracteres pode ser encontrado dentro de outra string.
- As classe `hidden` e `highlight` já está preparada no CSS para esconder os itens.

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Exercício: Filtro de Produtos Avançado</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f1f1f1;
        padding: 40px;
        text-align: center;
      }

      .container {
        max-width: 500px;
        margin: auto;
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      input {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
        text-align: left;
      }

      li {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        transition: all 0.3s ease;
      }

      li.hidden {
        display: none;
      }

      li.highlight {
        background-color: #d2f8da;
        border-left: 5px solid #4caf50;
      }

      #contador {
        margin-top: 10px;
        font-weight: bold;
        color: #333;
      }

      #mensagem-erro {
        display: none;
        margin-top: 20px;
        color: red;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Buscar Produtos</h2>
      <input type="text" id="campoBusca" placeholder="Digite para buscar..." />

      <p id="contador"></p>
      <p id="mensagem-erro">Nenhum produto encontrado.</p>

      <ul id="listaProdutos">
        <li>Notebook</li>
        <li>Smartphone</li>
        <li>Fone de Ouvido</li>
        <li>Carregador</li>
        <li>Mouse</li>
        <li>Teclado</li>
        <li>Monitor</li>
      </ul>
    </div>

    <script>
      // Escreva o código aqui
    </script>
  </body>
</html>

```

---

## 🔹 Exercício 3 - Formulário de Cadastro
**Objetivo:** Criar uma função que será executada ao enviar um formulário. A função deve capturar os dados preenchidos e exibir uma mensagem de boas-vindas na tela, sem recarregar a página.

**Tarefa:**
**1.** Capturar o evento de envio do formulário usando `addEventListener("submit")`.

**2.** Prevenir o comportamento padrão com `preventDefault()`.

**3.** Ler os dados dos campos: nome, preço, categoria e descrição.

**4.** Validar os dados:

  - Nome deve ter no mínimo 3 caracteres.
  - Preço deve ser um número positivo.
  - Categoria deve ser obrigatória.
  - A descrição é opcional.

**5.** Se houver erros de validação, mostrar uma mensagem de erro visível no formulário (ex: em vermelho acima do botão).

**6.** Se estiver tudo certo, criar dinamicamente um bloco contendo:

  - Nome do produto
  - Preço formatado com `toFixed(2)`
  - Categoria
  - Descrição (ou “Sem descrição”)
  - Data e hora atual (`new Date().toLocaleString("pt-BR")`)

**7.** Após o cadastro, limpar o formulário com `form.reset()`.

**Exemplo de uso:**
Você preenche o formulário com:

```makefile
Nome: Fone Bluetooth
Preço: 129.90
Categoria: Eletrônicos
Descrição: Fone com cancelamento de ruído
```

E o resultado na tela será:

```makefile
Fone Bluetooth
Preço: R$ 129.90
Categoria: Eletrônicos
Descrição: Fone com cancelamento de ruído
Cadastrado em: 29/05/2025 10:45
```

**Código HTML:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Exercício: Cadastro de Produtos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      padding: 40px;
      text-align: center;
    }

    .container {
      max-width: 500px;
      margin: auto;
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input, select, textarea {
      margin-bottom: 15px;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    button {
      padding: 10px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    #mensagemErro {
      color: red;
      margin-bottom: 10px;
    }

    .produto {
      margin-top: 20px;
      text-align: left;
      background-color: #e3f2fd;
      padding: 15px;
      border-radius: 5px;
    }

    .produto + .produto {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Cadastro de Produtos</h2>

    <form id="formProduto">
      <input type="text" id="nome" placeholder="Nome do produto" required />
      <input type="number" id="preco" placeholder="Preço (R$)" required />
      <select id="categoria" required>
        <option value="">Selecione a categoria</option>
        <option>Eletrônicos</option>
        <option>Livros</option>
        <option>Roupas</option>
        <option>Outros</option>
      </select>
      <textarea id="descricao" placeholder="Descrição do produto" rows="3"></textarea>
      <div id="mensagemErro"></div>
      <button type="submit">Cadastrar</button>
    </form>

    <div id="listaProdutos"></div>
  </div>

  <script>
    // Escreva o código aqui
  </script>
</body>
</html>

```

---

