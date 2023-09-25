const livros = require("./listaLivros");

//const precosLivros = [25, 15, 30, 45, 50];

function  menorValor (arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;

    for(let livroAtual= posicaoInicial; livroAtual < arrProdutos.length; livroAtual++){
        if(arrProdutos[livroAtual].preco < arrProdutos[maisBarato].preco){
            maisBarato = livroAtual
        }
    }
    return maisBarato;
}

module.exports = menorValor;
