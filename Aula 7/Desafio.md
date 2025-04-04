# 🧾 Desafio: Criando uma Lista de Tarefas com LocalStorage

Neste desafio, você irá implementar a funcionalidade de uma **lista de tarefas** utilizando **JavaScript** e **LocalStorage**. O HTML e CSS já estão prontos, e sua missão será escrever o código JavaScript para tornar a lista funcional.

## 🎯 O que sua lista de tarefas deve fazer?

1. **Adicionar tarefas:** Quando o usuário digitar uma tarefa e clicar no botão "Adicionar", a tarefa deve ser exibida na lista.

2. **Salvar tarefas no LocalStorage:** As tarefas devem permanecer na lista mesmo depois que a página for recarregada.

3. **Remover uma tarefa específica:** Cada tarefa deve ter um botão "Remover" para excluí-la da lista.

4. **Limpar todas as tarefas:** Deve haver um botão para apagar todas as tarefas do LocalStorage.

## 🛠️ Dicas para Implementação

- Use `localStorage.setItem()` para salvar as tarefas no armazenamento local do navegador.

- Use `localStorage.getItem()` para recuperar as tarefas salvas quando a página for carregada.

- Utilize `JSON.stringify()` para converter o array de tarefas em uma string antes de armazená-lo.

- Utilize `JSON.parse()` para converter a string de volta em um array ao recuperar os dados.

- Para atualizar a lista na tela, crie uma função que percorre o array de tarefas e adiciona os elementos `<li>` dinamicamente.

- Para remover uma tarefa, use o método `splice()` e atualize o LocalStorage.

- Para limpar todas as tarefas, remova a chave do LocalStorage e atualize a interface.

## 📌 Como começar?

- No HTML, há um campo de **input** para digitar a tarefa e um botão para adicioná-la.

- Há também um `<ul>` onde as tarefas devem ser exibidas.

- Agora, você precisa escrever o código JavaScript para manipular essas ações!

#### 🎯 Desafio extra:
Que tal adicionar um recurso para **marcar tarefas como concluídas** ao clicar nelas?

Abaixo está o código HTML e CSS, mas caso queria fazer tudo do zero fique a vontade:

**🖥 Código Base (HTML e CSS):**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas - LocalStorage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        input {
            padding: 8px;
            margin: 10px;
        }
        button {
            padding: 8px;
            margin: 5px;
            cursor: pointer;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background: #f0f0f0;
            padding: 10px;
            margin: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
        }
        .delete-btn {
            background: red;
            color: white;
            border: none;
            padding: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Gerenciador de Tarefas</h2>

    <input type="text" id="tarefa" placeholder="Digite uma tarefa">
    <button onclick="adicionarTarefa()">Adicionar</button>
    <button onclick="limparTarefas()">Limpar Tudo</button>

    <ul id="listaTarefas"></ul>

    <script>
        // Escreva o código aqui
    </script>
</body>
</html>
```

Caso queria fazer tudo do zero fique a vontade.

---
