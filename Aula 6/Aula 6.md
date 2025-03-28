# 📚 Manipulação do DOM no JavaScript

## 📌 Introdução aos Eventos no DOM

### 🔹 O que são eventos no DOM?
Eventos no DOM são ações ou ocorrências que acontecem em um documento HTML e podem ser capturadas e manipuladas pelo JavaScript. Essas ações podem ser disparadas pelo usuário (como um clique em um botão), pelo navegador (como o carregamento de uma página) ou até mesmo por scripts que modificam o DOM.

Em resumo, eventos permitem que seu site reaja a interações do usuário, tornando a página dinâmica e interativa.

### 🔹 Como o JavaScript lida com eventos?
O JavaScript fornece diferentes formas de detectar e responder a eventos no DOM. Sempre que um evento ocorre, o navegador gera um **objeto de evento**, que contém informações sobre o que aconteceu.

A estrutura básica para lidar com eventos envolve três etapas:

1. **Selecionar o elemento HTML** onde o evento ocorrerá.

2. **Especificar o tipo de evento** a ser monitorado (ex.: clique, tecla pressionada, envio de formulário).

3. **Definir a função que será executada** quando o evento ocorrer.

### 🔹 Exemplo Simples de Manipulação de Eventos
Vamos supor que temos um botão HTML e queremos que, ao ser clicado, ele exiba uma mensagem no console:

```html
<button id="meuBotao">Clique Aqui</button>

<script>
  // 1. Selecionar o elemento
  var botao = document.getElementById("meuBotao");

  // 2. Adicionar um evento de clique
  botao.addEventListener("click", function() {
    console.log("Botão clicado!");
  });
</script>
```

### 🔹 Ciclo de Vida de um Evento
Quando um evento ocorre, o navegador segue um fluxo específico para lidar com ele:

1. O evento é **detectado** no elemento que o disparou.

2. O JavaScript verifica se há **event listeners** associados a esse elemento para esse tipo de evento.

3. A função associada ao evento é **executada**.

4. O navegador pode seguir a propagação do evento (que será abordada no tópico sobre **delegação de eventos**).

---

## 📌 Adicionando Eventos a Elementos
Agora que já entendemos o que são eventos no DOM, vamos explorar as diferentes maneiras de adicioná-los a elementos HTML no JavaScript.

### 🔹 Métodos para Adicionar Eventos
Existem três principais formas de adicionar eventos a um elemento HTML:

#### 1️⃣ Atributo HTML `onEvent` (Abordagem Inline)
Uma forma simples, porém não recomendada, de adicionar eventos é diretamente no HTML usando atributos onEvent, como onclick, onmouseover, etc.

**🔸 Exemplo:**
```html
<button onclick="mostrarMensagem()">Clique Aqui</button>

<script>
  function mostrarMensagem() {
    alert("Botão clicado!");
  }
</script>
```

🛑 **Por que evitar essa abordagem?**

- Mistura HTML com JavaScript, dificultando a manutenção.
- Não permite adicionar múltiplos manipuladores de evento ao mesmo elemento.

<br>

#### 2️⃣ Propriedade de Evento no JavaScript (`elemento.onevent`)
Podemos definir um evento diretamente no JavaScript atribuindo uma função à propriedade do evento do elemento.

**🔸 Exemplo:**

```html
<button id="botao">Clique Aqui</button>

<script>
  var botao = document.getElementById("botao");

  botao.onclick = function () {
    alert("Você clicou no botão!");
  };
</script>
```

🛑 **Limitação:**

- Se atribuirmos outra função a `botao.onclick`, a anterior será sobrescrita.

#### 3️⃣ `addEventListener()` (Método Recomendado)
A forma mais moderna e recomendada de adicionar eventos é com o método `addEventListener()`. Ele permite:
- Adicionar múltiplos eventos ao mesmo elemento.
- Separar a lógica do JavaScript do HTML.
- Remover eventos dinamicamente quando necessário.

**🔸 Exemplo:**

```html
<button id="botao">Clique Aqui</button>

<script>
  var botao = document.getElementById("botao");

  botao.addEventListener("click", function () {
    alert("Evento usando addEventListener!");
  });

  // Adicionando outro evento ao mesmo botão
  botao.addEventListener("click", function () {
    console.log("Este evento também será executado.");
  });
</script>
```

**Ventagens do  `addEventListener()`**
- Pode ser usado para múltiplos eventos no mesmo elemento.
- Permite remover eventos com `removeEventListener()`.
- Melhor prática para código modular e reutilizável.

### 🔹 Removendo Eventos com removeEventListener()
Podemos remover eventos adicionados com `addEventListener()`, mas para isso precisamos referenciar a função diretamente.

**🔸 Exemplo:**

```html
<button id="botao">Clique Aqui</button>

<script>
  var botao = document.getElementById("botao");

  function mostrarAlerta() {
    alert("Alerta ativado!");
  }

  botao.addEventListener("click", mostrarAlerta);

  // Removendo o evento após 5 segundos
  setTimeout(() => {
    botao.removeEventListener("click", mostrarAlerta);
    console.log("Evento removido.");
  }, 5000);
</script>
```

🛑 **Atenção:**

`removeEventListener()` **só funciona** se a função passada for uma referência, e não uma função anônima.

---

## 📌 Tipos de Eventos no DOM
O JavaScript oferece diversos tipos de eventos para interagir com elementos HTML. Esses eventos permitem capturar ações do usuário, como cliques, digitação, movimentação do mouse, carregamento de página, entre outros.

### 🔹 Principais categorias de eventos:

#### 1️⃣ Eventos de Mouse
Relacionados a ações com o mouse, como clique, movimento e entrada/saída de um elemento.

**🔸 Exemplos:**
| **Evento**     | **Descrição**                                      |
|-------------|----------------------------------------------|
| `click`     | Disparado quando um elemento é clicado.    |
| `dblclick`  | Disparado quando ocorre um duplo clique.   |
| `mousedown` | Quando o botão do mouse é pressionado.     |
| `mouseup`   | Quando o botão do mouse é solto.           |
| `mousemove` | Quando o mouse se move sobre um elemento.  |
| `mouseenter`| Quando o mouse entra na área de um elemento. |
| `mouseleave`| Quando o mouse sai da área de um elemento. |

**Exemplo de evento de clique:**
```html
<button id="btn">Clique Aqui</button>

<script>
  document.getElementById("btn").addEventListener("click", function () {
    alert("Botão clicado!");
  });
</script>
```

<br>

#### 2️⃣ Eventos de Teclado
Disparados quando o usuário interage com o teclado.

**🔸 Exemplos:**
| **Evento**     | **Descrição**                                      |
|-------------|----------------------------------------------|
| `keydown`     | 	Quando uma tecla é pressionada.   |
| `keyup`  | Quando uma tecla é solta.   |
| `keypress`  | (Obsoleto) Quando uma tecla é pressionada e mantida.  |

**Exemplo de evento de teclado:**
```html
<input type="text" id="campo" placeholder="Digite algo">

<script>
  document.getElementById("campo").addEventListener("keydown", function (event) {
    console.log("Tecla pressionada:", event.key);
  });
</script>
```

#### 3️⃣ Eventos de Formulário
Ocorrendo em elementos de formulário, como inputs, selects e textareas.

**🔸 Exemplos:**
| **Evento**   | Descrição                                |
|------------|------------------------------------------|
| `focus`    | Disparado quando um campo recebe foco.  |
| `blur`     | Disparado quando um campo perde o foco. |
| `change`   | Quando um valor de input/select muda.   |
| `submit`   | Quando um formulário é enviado.        |

**Exemplo de evento focus e blur:**

```html
<input type="text" id="nome" placeholder="Digite seu nome">

<script>
  var campo = document.getElementById("nome");

  campo.addEventListener("focus", function () {
    campo.style.backgroundColor = "lightyellow";
  });

  campo.addEventListener("blur", function () {
    campo.style.backgroundColor = "";
  });
</script>
```

#### 4️⃣ Eventos de Janela e Documento
Relacionados à página ou ao navegador.

**🔸 Exemplos:**
| **Evento**       | Descrição                                     |
|---------------|---------------------------------------------|
| `load`        | Quando a página termina de carregar.       |
| `resize`      | Quando a janela do navegador é redimensionada. |
| `scroll`      | Quando a página é rolada.                 |
| `beforeunload`| Quando o usuário tenta sair da página.    |

**Exemplo de evento `scroll`:**

```html
<div style="height: 1500px;">Role a página</div>

<script>
  window.addEventListener("scroll", function () {
    console.log("Página rolada!", window.scrollY);
  });
</script>
```

### 🔹 O Objeto `event`
Quando um evento ocorre, ele gera um objeto event que contém informações sobre o evento (tecla pressionada, coordenadas do clique, elemento alvo, etc.).

**Exemplo de uso do event para capturar o elemento clicado:**
```html
<button>Clique 1</button>
<button>Clique 2</button>
<button>Clique 3</button>

<script>
  document.querySelectorAll("button").forEach(function (botao) {
    botao.addEventListener("click", function (event) {
      alert("Você clicou no botão: " + event.target.innerText);
    });
  });
</script>
```

- `event.target` → Retorna o elemento que acionou o evento.
- `event.type` → Retorna o tipo do evento (`click`, `keydown`, etc.).


