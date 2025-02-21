// length: retorna o tamanho de uma string
let mensagem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'"

console.log(mensagem)
console.log(mensagem.length)

// slice(inicio, fim): inicio(inclusive) e fim (exclusivo)
let texto = "JavaScript é incrível!"
let novoTexto = texto.slice(0, 10)
novoTexto = texto.slice(-9, -1)
console.log(novoTexto)

// trim(): remove os espaços em branco do começo e do fim
let nomeUsuario = " Mauro " // "Mauro" === " Mauro "
let usuario = nomeUsuario.trim()
console.log(usuario)

// replace():
let curso1 = "Curso de Programação em Java"
let curso2 = curso1.replace("Java", "JavaScript")
console.log(curso1)
console.log(curso2)

texto = "JavaScript é incrível!. JavaScript é poderoso."
novoTexto = texto.replace("JavaScript", "JS") // Primeira ocorrência
novoTexto = texto.replace(/JavaScript/g, "JS") // mudar texto
novoTexto = texto.replace(/JavaScript/gi, "JS") // ignora maiúscula e minúscula
novoTexto = texto.replaceAll("JavaScript", "JS") // não ignora

console.log(novoTexto)

// toUpperCase() e toLoweCase()
let saudacao = "Olá, mundo"
console.log(saudacao.toLocaleUpperCase())
console.log(saudacao.toLocaleLowerCase())

