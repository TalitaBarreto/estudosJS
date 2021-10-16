/*function areaQuadrado(){
    console.log('Função ativa')
}

areaQuadrado()

function areaQuadrado (lado){
    return lado * lado
}

console.log(areaQuadrado(2))


function pi(){
    return 3.14
}

var total = 5 * pi()
console.log(total)

function imc (peso, altura){
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(53, 1.62))

function corFavorita(cor){

    if(cor === 'Azul'){

        return'Eu gosto do céu';

    }else if(cor === 'Verde'){

        return'Eu gosto de mato';

    }else{

        return'Eu não gosto de cores';

    }
}

console.log(corFavorita())

addEventListener('click', function(){
    console.log('Clicou')
})

function terceiraIdade(idade){
    if(idade >= 60){
        return true
    }else{
        return false
    }
}

console.log(terceiraIdade(65))



function faltaVisitar(paisesVisitados){
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(10))*/

// Crie uma função para verificar se um valor é Truthy
function testeTrue(dados){
   return !!dados
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function somaQuadrado(lado){
    var totalQuadrado

    totalQuadrado = lado * 4

    console.log(`O total do quadrado é ${totalQuadrado}`)
}
somaQuadrado(2)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto( nome, sobrenome){
    var completo

    completo = nome + ' ' + sobrenome

    console.log(`Nome completo é ${completo}`)
}
nomeCompleto('Talita', 'Barreto')
// Crie uma função que verifica se um número é par
function par(num){    
    if(num % 2 === 0){
        console.log('É par')
    }else{
        console.log('É ímpar')
    }
}

par(8)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
    var qualDado = typeof(dado)
    console.log(qualDado)
}
tipoDado(2)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log('Talita Barreto')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar();
jaVisitei();
