/*

exemplo simples de 'for'
for(var i = 0; i <= 10; i++){
     console.log(i)
}

exemplo simples de 'while'
var i = 0
while(i <= 10){
    console.log(i)
    i++
}

*/

// exemplo de 'for' com itens do vetor 
/*var videogame = ['Switch', 'PS4', 'Xbox', '3DS']

for(var item = 0; item < videogame.length; item++){
    console.log(videogame[item])
    /* exemplo para parar o loop quando encontrar o valor buscado
    if(videogame[item] === 'PS4'){
        break
    }
}

// forEach - forma simplificada de for em um vetor

videogame.forEach(function(item){
    console.log(item)
})*/

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < brasilCopa.length; i++){
    console.log(`O brasil ganhou a copa de ${brasilCopa[i]}`)
}

console.log('---------------------------')

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var fruta = 0; fruta < frutas.length; fruta++){
    console.log(frutas[fruta])
    if(frutas[fruta] === 'Pera'){
        break
    }

}

console.log('---------------------------')


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultima = frutas[frutas.length - 1] //para pegar o ultimo item do vetor
console.log(ultima)
 