const Author = require("./Author")

const maria = new Author("Maria José")

const post = maria.writePost("Título do post", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nam modi in eius, nulla officiis corporis exercitationem laudantium, praesentium adipisci assumenda ad quaerat. Ipsa nobis molestias porro quaerat corporis? Delectus.")

post.addComment("Michelly Cruz", "Muito bom!")
post.addComment("Fulano", "Achei interessante")

console.log(maria)
console.log(post)