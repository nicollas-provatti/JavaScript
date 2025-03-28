#  Projeto: Bateria Web Interativa 🎶

## 🎯 Objetivo
Criar uma bateria interativa onde o usuário pode tocar sons de bateria ao clicar nos botões ou pressionar teclas específicas no teclado.

## 📌 Passos para desenvolver o projeto

### 1️⃣ Estruturação do HTML e CSS
- Você receberá o HTML e o CSS prontos. O HTML contém botões representando os tambores e pratos da bateria.

- O CSS já estiliza os botões e adiciona efeitos visuais.

### 2️⃣ Seleção de Elementos do DOM
- Use `document.querySelectorAll(".drum")` para selecionar todos os botões da bateria.

- Obtenha o número total de botões com `.length` para poder percorrê-los.

### 3️⃣ Adicionando Eventos de Clique nos Botões
- Percorra todos os botões usando um loop `for` e adicione um evento `click` a cada um.

- Quando um botão for clicado, capture seu conteúdo (`innerHTML`) e passe para a função `makeSound()`, que será responsável por tocar o som correspondente.

### 4️⃣ Capturando Eventos de Teclado
- Adicione um evento global `keydown` ao `document` para detectar quando o usuário pressiona uma tecla.

- Ao pressionar uma tecla, passe o valor da tecla pressionada para a função `makeSound()`.

### 5️⃣ Tocando os Sons da Bateria
- Crie a função `makeSound(key)`, que recebe uma tecla como argumento.

- Dentro dessa função, use um `switch case` para tocar o som correspondente ao botão ou tecla pressionada.

- Utilize `new Audio("caminho_do_som").play()`; para carregar e reproduzir o som.

### 6️⃣ Criando o Efeito de Animação
- Faça com que os botões tenham um efeito ao serem pressionados.

- Crie a função `buttonAnimation(currentKey)`, que adiciona uma classe CSS (`pressed`) ao botão correspondente.

- Use `setTimeout()` para remover essa classe após um curto período, criando um efeito visual temporário.