# 📘 Aula 8 - Eventos

###  Eventos

#### 🔍 O que são eventos no DOM ?
Eventos no DOM são ações ou ocorrências que acontecem em um documento HTML e podem ser capturadas e manipuladas pelo JavaScript. Essas ações podem ser disparadas pelo usuário (como um clique em um botão), pelo navegador (como o carregamento de uma página) ou até mesmo por scripts que modificam o DOM.

Em resumo, eventos permitem que seu site reaja a interações do usuário, tornando a página dinâmica e interativa.

#### 🔍 Como o JavaScript lida com eventos?
O JavaScript fornece diferentes formas de detectar e responder a eventos no DOM. Sempre que um evento ocorre, o navegador gera um **objeto de evento**, que contém informações sobre o que aconteceu.

A estrutura básica para lidar com eventos envolve três etapas:

1. **Selecionar o elemento HTML** onde o evento ocorrerá.

2. **Especificar o tipo de evento** a ser monitorado (ex.: clique, tecla pressionada, envio de formulário).

3. **Definir a função que será executada** quando o evento ocorrer.

#### 🔹 Exemplo Simples de Manipulação de Eventos
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

#### 🔹 Ciclo de Vida de um Evento
Quando um evento ocorre, o navegador segue um fluxo específico para lidar com ele:

1. O evento é **detectado** no elemento que o disparou.

2. O JavaScript verifica se há **event listeners** associados a esse elemento para esse tipo de evento.

3. A função associada ao evento é **executada**.

4. O navegador pode seguir a propagação do evento (que será abordada no tópico sobre **delegação de eventos**).

---

### 🔵 Adicionando eventos a elementos
Existem três principais formas de adicionar eventos a um elemento HTML:

#### 🔹 Atributo HTML `onEvent` (Abordagem Inline)
Uma forma simples, porém não recomendada, de adicionar eventos é diretamente no HTML usando atributos` onEvent`, como `onclick`, `onmouseover`, etc.

**Exemplo:**
```html
<button onclick="mostrarMensagem()">Clique Aqui</button>

<script>
  function mostrarMensagem() {
    alert("Botão clicado!");
  }
</script>
```

**Por que evitar essa abordagem?**

- Mistura HTML com JavaScript, dificultando a manutenção.
- Não permite adicionar múltiplos manipuladores de evento ao mesmo elemento.

<br>

#### 🔹 Propriedade de Evento no JavaScript (`elemento.onevent`)
Podemos definir um evento diretamente no JavaScript atribuindo uma função à propriedade do evento do elemento.

**Exemplo:**

```html
<button id="botao">Clique Aqui</button>

<script>
  var botao = document.getElementById("botao");

  botao.onclick = function () {
    alert("Você clicou no botão!");
  };
</script>
```

**Limitação:**

- Se atribuirmos outra função a `botao.onclick`, a anterior será sobrescrita.

<br>

#### 🔹 `addEventListener()` (Método Recomendado)
A forma mais moderna e recomendada de adicionar eventos é com o método `addEventListener()`. Ele permite:
- Adicionar múltiplos eventos ao mesmo elemento.
- Separar a lógica do JavaScript do HTML.
- Remover eventos dinamicamente quando necessário.

**Exemplo:**

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
O `addEventListener()` recebe dois argumentos principais:

- O **tipo do evento** (por exemplo, `'click'`, `'mouseover'`, `'keydown'`).
- A **função** que será executada quando o evento ocorrer.

**Ventagens do  `addEventListener()`**
- Pode ser usado para múltiplos eventos no mesmo elemento.
- Permite remover eventos com `removeEventListener()`.
- Melhor prática para código modular e reutilizável.

---

### 🔵 Tipos de Eventos
O DOM oferece uma grande variedade de eventos que podem ser utilizados para tornar as páginas web dinâmicas e interativas. Vamos conhecer alguns dos tipos mais comuns:

#### 🔹 Eventos de mouse
Relacionados a ações com o mouse, como clique, movimento e entrada/saída de um elemento.

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

#### 🔹 Eventos de teclado
Disparados quando o usuário interage com o teclado.

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

#### 🔹 Eventos de formulário
Ocorrendo em elementos de formulário, como inputs, selects e textareas.

| **Evento**   | **Descrição**                              |
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

#### 🔹 Eventos de janela
Relacionados à página ou ao navegador.

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

---

### 🔵 O objeto `event`
Quando um evento é disparado, o navegador gera automaticamente um objeto chamado `event` (ou `e`, por convenção nos exemplos). Esse objeto contém várias informações sobre o evento que ocorreu, como:

- Tipo de evento (`event.type`)
- Elemento alvo (`event.target`)
- Informações específicas (ex: qual tecla foi pressionada, qual botão do mouse foi clicado, etc.)

**Exemplo:**
```html
<button>Clique</button>

<script>

</script>

<script>
    const botao = document.querySelector('button');

    botao.addEventListener('click', function(event) {
    console.log(event);          // Mostra o objeto event completo
    console.log(event.type);     // Tipo de evento: "click"
    console.log(event.target);   // Elemento que disparou o evento
    });
</script>
```

#### 🔹 Principais propriedades de `event`:
| Propriedade / Método     | Descrição                                                                  |
|---------------------------|---------------------------------------------------------------------------|
| `type`                    | Tipo do evento (`'click'`, `'keydown'`, etc.).                           |
| `target`                  | O elemento HTML que disparou o evento.                                   |
| `currentTarget`           | O elemento que está ouvindo o evento (pode ser diferente do target).      |
| `preventDefault()`        | Impede o comportamento padrão do evento (ex.: envio de formulário).       |
| `stopPropagation()`       | Impede que o evento suba na hierarquia.                                   |
| `key`                     | (Teclado) A tecla que foi pressionada.                                   |
| `button`                  | (Mouse) Qual botão do mouse foi usado (esquerdo, direito, etc.).          |

**Exemplo com preventDefault():**

```js
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o recarregamento da página
  console.log('Formulário enviado sem recarregar!');
});
```

---

### 🔵 Propagação de eventos
Quando um evento acontece em um elemento HTML, ele não para apenas nele: Ele se propaga (se espalha) para outros elementos da árvore do DOM. Essa propagação ocorre em duas fases principais: **capturing** e **bubbling**.

#### 🔹 Fases da propagação
1 - **Capturing phase** (fase de captura):

* O evento começa lá no topo do DOM (em document) e vai descendo até o elemento alvo.

2 - **Target phase**:

- O evento chega no elemento que foi de fato clicado, pressionado, etc.

3 - **Bubbling phase** (fase de bolha):

- Depois de atingir o alvo, o evento sobe novamente pelos elementos pai.


**Exemplo de propagação:**
Suponha este HTML:

```html
<div id="pai">
  <button id="filho">Clique aqui</button>
</div>
```

Se você clicar no botão:

- O evento pode **descer** do `document` até o `div#pai`, depois até o `button#filho` (**capturing**).
- E então, pode **subir** do `button#filho` para o `div#pai`, e depois para o `document` (**bubbling**).

<br>

**Por padrão**, o JavaScript escuta os eventos na fase de bubbling.

**Exemplo:**
```js
document.getElementById('pai').addEventListener('click', function() {
  console.log('Clique no PAI');
});

document.getElementById('filho').addEventListener('click', function() {
  console.log('Clique no FILHO');
});
```

Se você clicar no botão, primeiro será exibido:

- **Clique no FILHO**
- depois **Clique no PAI**



#### 🔹 Escutando na fase de captura
Se quiser escutar o evento na fase de captura, você passa `{ capture: true }`:

```js
document.getElementById('pai').addEventListener('click', function() {
  console.log('Clique no PAI');
}, { capture: true });

document.getElementById('filho').addEventListener('click', function() {
  console.log('Clique no FILHO');
});
```

Agora, se clicar no botão, o console mostrará:

- **Clique no PAI**
- depois **Clique no FILHO**


#### 🔹 Controlando a propagação
Você pode parar a propagação usando o método `stopPropagation()`.

**Exemplo:**
```js
document.getElementById('pai').addEventListener('click', function() {
  console.log('PAI clicado');
});

document.getElementById('filho').addEventListener('click', function(event) {
  event.stopPropagation(); // O evento não vai "subir" para o pai
  console.log('FILHO clicado');
});
```

---

### 🔵 Removendo Eventos no DOM
Às vezes, depois de adicionar um evento, queremos removê-lo — por exemplo:

- Quando o usuário realiza uma ação e o evento não precisa mais existir.

- Para evitar múltiplas chamadas desnecessárias de funções.

- Para liberar memória em páginas muito dinâmicas.

#### 🔹 Método `removeEventListener`
Assim como usamos `addEventListener` para adicionar um evento, usamos `removeEventListener` para remover.

A sintaxe é:
```js
elemento.removeEventListener('tipoDoEvento', funcaoQueFoiUsada);
```

**Atenção:** para remover um evento corretamente:

- A função deve ser **nomeada** (não pode ser anônima).
- O tipo do evento e a referência da função devem ser exatamente os mesmos usados no `addEventListener`.

**Exemplo:**
```js
const btn = document.getElementById('meuBotao');

function clicar() {
  console.log('Botão clicado!');
}

// Adicionando o evento
btn.addEventListener('click', clicar);

// Removendo o evento após 5 segundos
setTimeout(() => {
  btn.removeEventListener('click', clicar);
  console.log('Evento removido!');
}, 5000);
```

Nesse exemplo, o botão vai funcionar por 5 segundos. Depois disso, o clique no botão não fará mais nada, porque o evento foi removido.

**Atenção:** funções anônimas não podem ser removidas

Veja o que não funciona:
```js
btn.addEventListener('click', function() {
  console.log('Cliquei');
});

// Não tem como remover depois, porque não temos referência para essa função anônima!
```

Por isso, se você pretende remover o evento depois, **sempre use funções nomeadas**.

---