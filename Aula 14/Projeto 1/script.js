const listaUsuarios = document.getElementById('lista-usuarios');
const formUsuario = document.getElementById('form-usuario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const template = document.getElementById('template-usuario');

let idEdicao = null;

// Carregar dados do LocalStorage ao iniciar
document.addEventListener('DOMContentLoaded', carregarUsuarios);

function carregarUsuarios() {
  const usuarios = getUsuariosLocalStorage();
  listaUsuarios.innerHTML = ''; // limpa a lista

  usuarios.forEach(usuario => adicionarUsuarioNoDOM(usuario));
}

// Pega o array de usuários do LocalStorage
function getUsuariosLocalStorage() {
  const usuarios = localStorage.getItem('usuarios');
  return usuarios ? JSON.parse(usuarios) : [];
}

// Salva o array no LocalStorage
function salvarUsuariosLocalStorage(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Adiciona ou edita usuário
formUsuario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();

  if (!nome || !email) {
    alert('Por favor, preencha nome e email.');
    return;
  }

  const usuarios = getUsuariosLocalStorage();

  if (idEdicao) {
    // Editar
    const index = usuarios.findIndex(u => u.id === idEdicao);
    usuarios[index].name = nome;
    usuarios[index].email = email;

    idEdicao = null;
  } else {
    // Adicionar novo
    const novoUsuario = {
      id: Date.now(),
      name: nome,
      email: email,
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`
    };
    usuarios.push(novoUsuario);
  }

  salvarUsuariosLocalStorage(usuarios);
  carregarUsuarios();
  formUsuario.reset();
});

// Remover usuário
function removerUsuario(id) {
  const usuarios = getUsuariosLocalStorage();
  const novosUsuarios = usuarios.filter(u => u.id !== id);
  salvarUsuariosLocalStorage(novosUsuarios);
  carregarUsuarios();
}

// Editar usuário
function editarUsuario(id) {
  const usuarios = getUsuariosLocalStorage();
  const usuario = usuarios.find(u => u.id === id);

  nomeInput.value = usuario.name;
  emailInput.value = usuario.email;
  idEdicao = id;
}

// Adiciona usuário no DOM
function adicionarUsuarioNoDOM(usuario) {
  const clone = template.content.cloneNode(true);
  const li = clone.querySelector('li');
  li.id = usuario.id;

  clone.querySelector('.nome').textContent = usuario.name;
  clone.querySelector('.email').textContent = usuario.email;
  clone.querySelector('img').src = usuario.avatar;

  // Botão Editar
  clone.querySelector('.editar').addEventListener('click', () => editarUsuario(usuario.id));

  // Botão Remover
  clone.querySelector('.remover').addEventListener('click', () => {
    if (confirm('Deseja remover este usuário?')) {
      removerUsuario(usuario.id);
    }
  });

  listaUsuarios.appendChild(clone);
}
