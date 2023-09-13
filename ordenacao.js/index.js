const livros = require("./listaLivros");

const precosLivros = [25, 15, 30, 45, 50];

let maisBarato = 0;

for(let livroAtual= 0; livroAtual < precosLivros.length; livroAtual++){
    if(precosLivros[atual] <precosLivros[maisBarato]){
        maisBarato = atual
    }
}
console.log(`O livro mais barato é ${precosLivros[maisBarato]}`)