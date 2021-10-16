/*var possuiGratuacao = true

if(possuiGratuacao){
    console.log('É verdadeiro')
}else{
    console.log('É falsooo')
}

var nome = -5

if(nome){
    console.log(nome)
}else{
    console.log('Nome não existe')
}

if(!possuiGratuacao){
    console.log('Não possui')
}

// !! diferende de !

var x = 10

console.log(x == 10) // verifica a igualdade de elemento
console.log(x)

console.log(x === 10) // verifica a igualdade da variavel (tipo de dado e o elemento)
console.log(x)

console.log(x !== 10) // verifica a diferença da variavel (tipo de dado e o elemento)
console.log(x)

console.log(x != 10) // verifica a diferença de elemento
console.log(x)


// zero é valor falso por não ter valor(quantidade), qualquer outro valor é verdadeiro seja negativo ou positivo
if((5-5) && (5+50)){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}

var condicional = (5 - 5) || (5 + 5) || (10 - 2)
console.log(condicional)

// switch
var  corFavorita = 'Vermelho'

switch (corFavorita){
    case 'Azul':
        console.log('Olhe para o céu')
        break
    case 'Amerelo':
        console.log('Olhe para o sol')
        break
    case 'Vermelho':
        console.log('Olhe para a rosa')
        break
    case 'Verde':
        console.log('Olhe para a grama')
        break
    default:
        console.log('Feche os olhos')
}*/

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 29
var maeIdade = 51

if(minhaIdade > maeIdade){
    console.log('Minha idade é maior')
}else if(minhaIdade === maeIdade){
    console.log('É igual')
}else{
    console.log('Minha idade é menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Talita';
var idade = 29;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('É maior')
}else{
    console.log('É menor')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}