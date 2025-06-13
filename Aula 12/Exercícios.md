# 📝 Exercícios

---

## 🔹 Exercício 1 - Usuário do GitHub
**Objetivo:** Criar uma interface onde o usuário digita um nome de usuário do GitHub e, ao clicar em um botão, a aplicação busca os dados desse usuário via API do GitHub usando fetch com Promises, e exibe algumas informações na tela.

**Tarefa:** 
1. Pegue o valor digitado no input quando o botão **Buscar** for clicado.

2. Faça uma requisição com `fetch` para a API do GitHub no endpoint:
`https://api.github.com/users/{username}`, substituindo `{username}` pelo valor digitado.

3. Use `.then()` e `.catch()` para tratar a Promise retornada pelo `fetch`.

4. Se a requisição for bem-sucedida, exiba na div resultado as seguintes informações:

    - Nome do usuário (`name`)
    - Login (`login`)
    - Número de repositórios públicos (`public_repos`)
    - Link para o perfil (`html_url`) — como um link clicável

5. Se ocorrer um erro (usuário não encontrado ou problema na requisição), exiba uma mensagem clara na div `erro`.

6. Lembre-se de limpar mensagens antigas antes de exibir novos resultados ou erros.

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Buscar Usuário GitHub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #eaecef;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      color: #333;
    }

    h1 {
      margin-bottom: 20px;
    }

    input {
      padding: 10px;
      width: 300px;
      border-radius: 6px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      background-color: #0366d6;
      border: none;
      border-radius: 6px;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #024a9c;
    }

    .resultado {
      margin-top: 30px;
      background: white;
      padding: 20px;
      border-radius: 8px;
      width: 350px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: left;
    }

    .erro {
      margin-top: 20px;
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>Buscar Usuário do GitHub</h1>
  <input type="text" id="username" placeholder="Digite o nome do usuário GitHub" />
  <button id="buscarBtn">Buscar</button>

  <div id="resultado" class="resultado" style="display:none;"></div>
  <div id="erro" class="erro"></div>

  <script>
    // A lógica do fetch com promises deve ser implementada aqui pelos alunos
  </script>
</body>
</html>
```

---

## 🔹 Exercício 2 - Dados de um usuário
**Objetivo:** Criar uma interface onde o usuário digita um ID de usuário (1 a 10) e, ao clicar no botão, o programa usa `fetch` com `async/await` para buscar os dados do usuário na API JSONPlaceholder, exibindo nome, email e endereço na página.

**Tarefa:** 
1. Ao clicar no botão Buscar, capture o valor do input userId.

2. Crie uma função `async` que use `fetch` para buscar dados do usuário em:
`https://jsonplaceholder.typicode.com/users/{userId}`

3. Use `await` para aguardar a resposta e parsear para JSON.

4. Caso o usuário exista, mostre no elemento `resultado`:
    - Nome
    - Email
    - Endereço completo (rua, número, cidade, CEP)

5. Se o ID estiver fora do intervalo (1 a 10) ou o usuário não for encontrado, mostre mensagem de erro no elemento `erro`.

6. Limpe as mensagens anteriores antes de exibir novas.

7. Use tratamento de erros para lidar com problemas na requisição.


**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Buscar Usuário</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #e6f0ff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      color: #333;
    }

    h1 {
      margin-bottom: 20px;
    }

    input {
      padding: 10px;
      width: 200px;
      border-radius: 6px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      background-color: #0052cc;
      border: none;
      border-radius: 6px;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #003d99;
    }

    .resultado {
      margin-top: 30px;
      background: white;
      padding: 20px;
      border-radius: 8px;
      width: 320px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: left;
      display: none;
    }

    .erro {
      margin-top: 20px;
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>Buscar Usuário</h1>
  <input type="number" id="userId" placeholder="Digite um ID (1 a 10)" min="1" max="10" />
  <button id="buscarBtn">Buscar</button>

  <div id="resultado" class="resultado"></div>
  <div id="erro" class="erro"></div>

  <script>
    // Aqui os alunos devem implementar a função async para buscar e mostrar dados
  </script>
</body>
</html>
```

---

## 🔹 Exercício 3 - Buscar Posts

**Objetivo:** Criar uma página que, ao clicar em um botão, use o Axios para buscar posts de uma API pública (JSONPlaceholder) e exiba o título e corpo dos posts na página.

**Tarefa:**
- Complete o código com JavaScript usando Axios para buscar 5 posts da API pública JSONPlaceholder.

- Exiba o título e o corpo de cada post em cards organizados na página.

- Adicione um tratamento básico de erro para mostrar uma mensagem caso a requisição falhe.

**URL:** https://jsonplaceholder.typicode.com/posts?_limit=5

**Formato do card:**
```html
<div class="post">
    <h3></h3>
    <p></p>
</div>
```

**Dados:**
```
titulo: .title
conteúdo: .body
```

**Código Base:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Buscar Posts com Axios</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #fafafa;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #333;
    }
    h1 {
      margin-bottom: 20px;
    }
    button {
      padding: 10px 20px;
      background-color: #0077cc;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
      margin-bottom: 20px;
    }
    button:hover {
      background-color: #005fa3;
    }
    .post {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      width: 400px;
      padding: 15px;
      margin-bottom: 15px;
      text-align: left;
    }
    .post h3 {
      margin: 0 0 10px 0;
      color: #0077cc;
    }
  </style>
</head>
<body>

  <h1>Buscar Posts</h1>
  <button id="btnBuscar">Buscar Posts</button>
  <div id="postsContainer"></div>

  <!-- Axios CDN -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

  <script>
    
  </script>
</body>
</html>
```