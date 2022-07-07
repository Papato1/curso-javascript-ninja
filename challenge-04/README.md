# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var Istruthy = function ( x ){
    return !!x ;

}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

> Istruthy(undefined)
false

> Istruthy( false)
false

> Istruthy( 0)
false

> Istruthy ( null)
false

> Istruthy ( NaN)
false

> Istruthy ( "")
false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
> Istruthy ( "Everton" )
true

> Istruthy ( 1 )
true

> Istruthy ( "carro" )
true

> Istruthy ( "Rei dos piratas" )
true

> Istruthy ( " Deck de Bomba é Op "   )
true



/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var Carro = { 
        Marca: "GM",
        Modelo: "Passat",
        Placa: " BGQ-3289",
        Ano: 2020,
        Cor: "Branco Escuro",
        QuantasPortas: 4,
        Assentos: 5,
        QuantidadePessoas: 0,

}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

Carro.MudarCor = function (Cor){
  Carro.Cor = Cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/



/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

Carro.ObterCor = function () {

    return Carro.Cor;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

Carro.ObterMarca = function (){

    return Carro.Marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

Carro.ObterMarcaModelo = function (){

    return "Este carro é " + Carro.Marca + " " + Carro.Modelo + ".";

}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
 
 //Branco Escuro

// Mude a cor do carro para vermelho.

//> Carro.MudarCor ("Vermelho")
undefined
> Carro
{
  Marca: 'GM',
  Modelo: 'Passat',
  Placa: ' BGQ-3289',
  Ano: 2020,
  Cor: 'Vermelho',
  QuantasPortas: 4,
  Assentos: 5,
  QuantidadePessoas: 0,
  MudarCor: [Function (anonymous)],
  ObterCor: [Function (anonymous)],
  ObterMarca: [Function (anonymous)],
  ObterMarcaModelo: [Function (anonymous)],
  AddPessoas: [Function (anonymous)]
}
>

// E agora, qual a cor do carro?
?

//Vermelho

// Mude a cor do carro para verde musgo.

> Carro.MudarCor("Verde Musgo")
undefined
>

// E agora, qual a cor do carro?

// Verde Musgo

// Qual a marca e modelo do carro?

//> Carro.ObterMarcaModelo()
'Este carro é GM Passat.'
>

// Adicione 2 pessoas no carro.

> Carro.AddPessoas(2)
'Já temos 2 pessoas no carro'

// Adicione mais 4 pessoas no carro.

> Carro.AddPessoas (4)
'Ainda cabem 3 Pessoas no carro.'

// Faça o carro encher.

> Carro.AddPessoas(1)
'O carro já está lotado'

// Tire 4 pessoas do carro.

> Carro.AddPessoas (-4)
'Já temos -4 pessoas no carro'

// Adicione 10 pessoas no carro.

> Carro.AddPessoas(10)
'Ainda cabem 4 Pessoas no carro.'

// Quantas pessoas temos no carro?

1

```
