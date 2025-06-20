const respostaDiv = document.getElementById('resposta');
const API_URL = 'https://jsonplaceholder.typicode.com';

// Função genérica para limpar a área de resposta
function limparResposta() {
  respostaDiv.innerHTML = '';
}

// GET: Listar Posts
async function listarPosts() {
  limparResposta();
  respostaDiv.innerHTML = 'Carregando posts...';
  try {
    const resp = await fetch(`${API_URL}/posts`);
    const data = await resp.json();
    limparResposta();
    data.slice(0, 10).forEach(post => { // mostrando só 10 para não poluir
      const card = `
        <div class="card">
          <h3>Post #${post.id}</h3>
          <p><strong>Título:</strong> ${post.title}</p>
          <p>${post.body}</p>
        </div>
      `;
      respostaDiv.innerHTML += card;
    });
  } catch (err) {
    respostaDiv.innerHTML = 'Erro ao carregar posts.';
  }
}

// GET: Listar Comentários
async function listarComments() {
  limparResposta();
  respostaDiv.innerHTML = 'Carregando comentários...';
  try {
    const resp = await fetch(`${API_URL}/comments`);
    const data = await resp.json();
    limparResposta();
    data.slice(0, 10).forEach(comment => {
      const card = `
        <div class="card">
          <h3>Comentário #${comment.id}</h3>
          <p><strong>Nome:</strong> ${comment.name}</p>
          <p><strong>Email:</strong> ${comment.email}</p>
          <p>${comment.body}</p>
        </div>
      `;
      respostaDiv.innerHTML += card;
    });
  } catch (err) {
    respostaDiv.innerHTML = 'Erro ao carregar comentários.';
  }
}

// GET: Listar Álbuns
async function listarAlbums() {
  limparResposta();
  respostaDiv.innerHTML = 'Carregando álbuns...';
  try {
    const resp = await fetch(`${API_URL}/albums`);
    const data = await resp.json();
    limparResposta();
    data.slice(0, 10).forEach(album => {
      const card = `
        <div class="card">
          <h3>Álbum #${album.id}</h3>
          <p><strong>Título:</strong> ${album.title}</p>
        </div>
      `;
      respostaDiv.innerHTML += card;
    });
  } catch (err) {
    respostaDiv.innerHTML = 'Erro ao carregar álbuns.';
  }
}

// GET: Listar Fotos
async function listarPhotos() {
  limparResposta();
  respostaDiv.innerHTML = 'Carregando fotos...';
  try {
    const resp = await fetch(`${API_URL}/photos`);
    const data = await resp.json();
    limparResposta();
    data.slice(0, 10).forEach(photo => {
      const imgURL = `https://picsum.photos/id/${photo.id}/200/150`;
      const card = `
        <div class="card">
          <h3>Foto #${photo.id}</h3>
          <p><strong>Título:</strong> ${photo.title}</p>
          <img src="${imgURL}" alt=${photo.title}>
        </div>
      `;
      respostaDiv.innerHTML += card;
    });
  } catch (err) {
    respostaDiv.innerHTML = 'Erro ao carregar fotos.';
  }
}

// GET: Listar ToDos
async function listarTodos() {
  limparResposta();
  respostaDiv.innerHTML = 'Carregando ToDos...';
  try {
    const resp = await fetch(`${API_URL}/todos`);
    const data = await resp.json();
    limparResposta();
    data.slice(0, 10).forEach(todo => {
      const status = todo.completed ? '✅ Concluído' : '❌ Pendente';
      const card = `
        <div class="card">
          <h3>ToDo #${todo.id}</h3>
          <p><strong>Título:</strong> ${todo.title}</p>
          <p>Status: ${status}</p>
        </div>
      `;
      respostaDiv.innerHTML += card;
    });
  } catch (err) {
    respostaDiv.innerHTML = 'Erro ao carregar ToDos.';
  }
}

// GET: Listar Usuários
async function listarUsers() {
  limparResposta();
  respostaDiv.innerHTML = 'Carregando usuários...';
  try {
    const resp = await fetch(`${API_URL}/users`);
    const data = await resp.json();
    limparResposta();
    data.forEach(user => {
      const avatarUrl = `https://i.pravatar.cc/100?img=${user.id}`;
      const card = `
        <div class="card">
          <img src="${avatarUrl}" alt="${user.username}" class="avatar" />
          <h3>${user.name}</h3>
          <p><strong>Usuário:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Telefone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> ${user.website}</p>
        </div>
      `;
      respostaDiv.innerHTML += card;
    });
  } catch (err) {
    respostaDiv.innerHTML = 'Erro ao carregar usuários.';
  }
}
