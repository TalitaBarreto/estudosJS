/*// number é construtura de números, possui propriedades e métodos do prototype; e também possui alguns métodos

const ano = 2021

const preco = new Number(100)

// Number.isNaN é um método de Number, que não faz parte do protótipo. Number.isInteger verifica se é uma integral
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN(4 + 5))//false
console.log('                              ')
console.log(Number.isInteger(20))//true
console.log(Number.isInteger(25.6))//false
console.log('                              ')
console.log('------------------------------')
console.log('                              ')
// parseFloat, retorna um número a partir de uma string, parseInt recebe um segundo parâmetro que é o Radix
console.log(parseFloat('99.50'))
console.log('                              ')
console.log(Number.parseFloat('99.50'))
console.log(Number.parseFloat('100 Reais'))
console.log(Number.parseFloat('R$ 100')) // sempre começar com um número
console.log('                              ')
console.log(parseInt('99.5')) // mostra somente o número inteiro sem o decimais
console.log(parseInt(5.452030)) // mostra somente o número inteiro sem o decimais
console.log(Number.parseInt(10 , 10))// segundo número é casas decimais
console.log('                              ')
console.log('------------------------------')
console.log('                              ')
// toFixed arredonda o número com base no total de casas decimais
const preco1 = 4.99
console.log(preco.toFixed())
const precoCarro = 10000.555
console.log(precoCarro.toFixed())
const preco2 = 1499.49
console.log(preco2.toFixed())
const preco3 = 30.09852456
console.log(preco3.toFixed(4))// vai mostrar uma string com até 4 casas decimais
console.log('                              ')
console.log('------------------------------')
console.log('                              ')
//toString, transforma um número em uma string
const valor = 3.6
console.log(valor.toString())
console.log('                              ')
console.log('------------------------------')
console.log('                              ')
//toLocaleString, formata o número de acordo com a língua e opções passadas
let valor1 = 50.0558
valor1 = valor1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor1)
console.log('                              ')
console.log('------------------------------')
console.log('                              ')
// math, é um objeto nativo que possui propriedade e métodos de expressões matemáticas comuns
console.log(Math.PI)
console.log('                              ')
console.log(Math.E)
console.log('                              ')
console.log(Math.LN10)
console.log('                              ')
console.log(Math.abs(-5.4))// torna o valor absoluto, ou seja, torna o valor positivo
console.log('                              ')
console.log(Math.ceil(4.3))// arredonda o valor para cima, sempre retornando um int
console.log('                              ')
console.log(Math.floor(4.3))// arredonda o valor para baixo, sempre retornando um int
console.log('                              ')
console.log(Math.round(4.2))//arredonda para o valor int mais próximo
console.log('                              ')
console.log(Math.max(50, 30, 15, 6.5, 10)) // retorna o maior número de uma lista de argumento
console.log('                              ')
console.log(Math.min(50, 30, 15, 6.5, 10)) // retorna o menor número de uma lista de argumento
console.log('                              ')
console.log(Math.random())// número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 100))// número aleatório entre 0 e 100
console.log(Math.floor(Math.random() * (50 - 10 + 1)) + 10)// número aleatório entre 50 e 10
console.log('                              ')
console.log('------------------------------')
console.log('                              ')*/
console.log('Exercícios')
// Retorne um número aleatório entre 1050 e 2000
console.log('                              ')
console.log(Math.floor(Math.random()* (2000 - 1050 + 1)) + 1050)

console.log('                              ')
console.log('------------------------------')
console.log('                              ')
// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(',')
console.log(Math.max(...arrayNumeros))


console.log('                              ')
console.log('------------------------------')
console.log('                              ')
// Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco){
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    preco = +preco.toFixed(2);

    return preco
}                   

let precoTotal = 0

listaPrecos.forEach((i) => {
    precoTotal += limparPreco(i)
})

console.log(precoTotal.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))

limparPreco(listaPrecos[1])