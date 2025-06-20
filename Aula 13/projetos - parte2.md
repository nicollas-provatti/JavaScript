# 🖥️ Projeto - Parte 2: Consumo de API

---

## 🔹 Descrição Geral do Projeto
**🎯 Objetivo:**
O objetivo deste projeto é desenvolver uma aplicação web que consome uma API pública RESTful e exibe os dados de forma dinâmica e organizada na interface do usuário. O foco principal é praticar a manipulação de requisições assíncronas utilizando Fetch API ou Axios, bem como o tratamento de dados recebidos (em formato JSON) e sua renderização no DOM.

**📜 Requisitos Gerais:**

**1. Escolha de API:**

- O aluno deve escolher uma API pública da lista fornecida.

- Apenas métodos GET serão utilizados neste projeto.

**2. Funcionalidades obrigatórias:**

- Botões para acionar diferentes requisições (ex.: Listar todos, Buscar por ID, Buscar aleatório, etc.);

- Área de exibição dos dados retornados da API;

- Renderização dos dados em elementos HTML personalizados (ex.: cards, listas, tabelas);

- Limpeza prévia da área de exibição antes de uma nova consulta (innerHTML = "").

**3. Manipulação de Dados:**

- Tratar o JSON retornado e extrair as informações mais relevantes para exibição;

- Exibir feedback visual ao usuário em caso de erro ou requisição vazia (ex.: mensagem de erro, loading, etc.).

**4. Interface e Design:**

- Layout organizado e responsivo;

- Uso de elementos visuais como cards, imagens, títulos, descrições;

- Utilização das classes CSS pré-definidas para manter um padrão visual.

**5. Código JavaScript:**

- Utilização obrigatória de funções assíncronas (async/await) ou Promises;

- Manipulação do DOM para adicionar e remover elementos dinamicamente;

- Boas práticas de código: organização, indentação e comentários explicativos.

**🏗️ Estrutura mínima esperada do projeto:**

**HTML:**
- Botões de ação (GET all, GET by ID, GET random, etc.);

- Div/section para exibir os dados;

- Elementos auxiliares para mensagens de loading ou erro.

**CSS:**
- Estilo visual para os cards de exibição;

- Layout responsivo e agradável;

- Estilização dos botões e feedbacks visuais.

**JavaScript:**
- Funções separadas para cada requisição;

- Manipulação de dados JSON;

- Renderização dinâmica dos resultados;

- Tratamento de erros com mensagens apropriadas.

---

## 🔹 Lista das APIs

### 🔗 2. ReqRes API
🔸 **URL:** https://reqres.in/ <br>
🔸 **Autenticação:** Necessário enviar header x-api-key: reqres-free-v1. <br>
🔸 **Descrição:** API fake para usuários e autenticação. <br>
🔸 **Possibilidades:** <br>

- Listar usuários (/api/users)

- Buscar usuário por ID

✅ **Ideal para:** listar e buscar usuários, exibir avatars, nomes e e-mails.

### 🔗 3. The Dog API
🔸 **URL:** https://thedogapi.com <br> 
🔸 **Autenticação:** Sim, token gratuito fácil de obter. <br>
🔸 **Descrição:** Dados e imagens de várias raças de cachorro. <br>
🔸 **Possibilidades:** <br>

- Buscar imagens de cães por raça;

- Mostrar cards de cães com imagens.

✅ **Ideal para:** criar uma galeria de cachorros ou filtro por raça.

### 🔗 4. The Cat API
🔸 **URL:** https://thecatapi.com <br>
🔸 **Autenticação:** Sim, token gratuito. <br>
🔸 **Descrição:** API para imagens e informações de gatos. <br>
🔸 **Possibilidades:** <br>

- Gerar imagens aleatórias de gatos;

- Listar raças de gatos e características.

✅ **Ideal para:** galeria de gatos fofos.

### 🔗 5. OpenWeatherMap (Weather API)
🔸 **URL:** https://openweathermap.org/api <br>
🔸 **Autenticação:** Sim, exige chave (gratuita via cadastro). <br>
🔸 **Descrição:** Retorna dados climáticos para qualquer cidade do mundo. <br>
🔸 **Possibilidades:** <br>

- Buscar o clima atual de uma cidade;

- Mostrar temperatura, umidade, vento, etc.

✅ **Ideal para:** app de previsão do tempo.

### 🔗 6. Unsplash API
🔸 **URL:** https://unsplash.com/documentation <br>
🔸 **Autenticação:** Sim, exige chave gratuita. <br>
🔸 **Descrição:** Busca e exibe imagens profissionais do Unsplash. <br>
🔸 **Possibilidades:** <br>

- Buscar imagens por palavra-chave;

- Galerias de fotos com lazy loading.

✅ **Ideal para:** app de pesquisa de imagens.

### 🔗 7. PokéAPI
🔸 **URL:** https://pokeapi.co/ <br>
🔸 **Autenticação:** Não precisa. <br>
🔸 **Descrição:** API completa de dados dos Pokémons. <br>
🔸 **Possibilidades:** <br>

- Buscar Pokémons por nome ou ID;

- Exibir imagem, tipo, habilidades, etc.

✅ **Ideal para:** Pokédex simples no navegador.

### 🔗 8. SpaceX API
🔸 **URL:** https://github.com/r-spacex/SpaceX-API <br>
🔸 **Autenticação:** Não precisa. <br>
🔸 **Descrição:** Dados públicos da SpaceX. <br>
🔸 **Possibilidades:** <br>

- Listar lançamentos de foguetes, naves, missões.

✅ **Ideal para:** mostrar cards com informações sobre missões espaciais.

### 🔗 9. BoredAPI
🔸 **URL:** https://www.boredapi.com/api/activity/ <br>
🔸 **Autenticação:** Não precisa. <br>
🔸 **Descrição:** Retorna atividades aleatórias para fazer quando está entediado. <br>
🔸 **Possibilidades:** <br>

- Exibir uma atividade aleatória na tela.

✅ **Ideal para:** mini-app divertido de sugestões.

### 🔗 10. Advice Slip API
🔸 **URL:** https://api.adviceslip.com <br>
🔸 **Autenticação:** Não precisa. <br>
🔸 **Descrição:** Retorna frases/conselhos motivacionais aleatórios. <br>
🔸 **Possibilidades:** <br>

- Gerar e mostrar um conselho aleatório.

✅ **Ideal para:** app simples de "conselho do dia".

---
