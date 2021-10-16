/*var eu = {
    nome: 'Talita Barreto',
    idade: 29
}

console.log(eu.idade)

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return this.lados * lado
    }    
}

console.log(Math.random())

var menu = {
    width:800,
    heigth:50,
    metadeHeigth(){
        return this.heigth / 2;
    }

}

// setando novas propriedades
menu.position = 'fixed'

*/

var talita = {
    nome: 'Talita',
    sobrenome: 'Barreto',
    idade: 29,
    dataNascimento:'28/02/92',
    mae:'Maria do Carmo',
    nomeCompleto(){
        return this.nome + ' ' +  this.sobrenome
    }
}

var carro = {
    preco:1000,
    portas:4,
    marca: 'Audi'
}

carro.preco = 3000

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(verHomem = true){
          
        if(verHomem === true)
            console.log('Late')
        else{
            console.log('Dorme')
        }
    }
}