/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
> var newvar = [1,2,3,4,5];
undefined

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 var NewFunc = function (arr){
... return arr;
... }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
 console.log ( newfunc ( newvar) [1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
   
function MinhaFunção (arr , indice) {
    return arr [ indice ] ;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var NovaFunção =  ['Papato', 53.4 , true , [ 1 , 3], {c: 3}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log ( MinhaFunção( NovaFunção,0))
console.log ( MinhaFunção( NovaFunção,1))
console.log ( MinhaFunção( NovaFunção,2))
console.log ( MinhaFunção( NovaFunção,3))
console.log ( MinhaFunção( NovaFunção,4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

   function Livros (nome){
    
    var ListadeLivros = { 

        'A droga da obediência': {

            QuantidadeDePaginas: 30,
            Autor: 'Pedro Bandeira',
            Editora: 'Moderna'
        },
        'Herói do Olimpo': {

            QuantidadeDePaginas: 90,
            Autor: 'Rick Riordan',
            Editora: 'Intrínseca',
        },
        'Tom Sawyer': {

            QuantidadeDePaginas: 60,
            Autor: 'Mark Twain',
            Editora: 'Abril',
        },
    }

return !nome ? ListadeLivros : ListadeLivros[nome];

}  

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(Livros () )

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log ('O livro Tom Sawyer tem ' + Livros( 'Tom Sawyer' ).QuantidadeDePaginas +  ' Páginas' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log (' O autor do livro Herói do Olimpo é ' + Livros( 'Herói do Olimpo' ).Autor )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ( ' O livro A droga da obediência foi publicado pela editora ' + Livro( 'A droga da obediência' ).Editora );
