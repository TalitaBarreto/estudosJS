/*var idade = 20
var num = 2e10
var num1 = 2e-6

console.log(idade)
console.log(num)
console.log(num1)

var soma = 20 + 60
var subtracao = 30 - 20
var multiplicacao = 10 * 30
var divisao = 600 / 2
var potenciacao = 2 ** 6
var restoDivisao = 10 % 3 

var testeNaN = '100' / 2
console.log(isNaN(testeNaN))

var total1 = 20 + 10 * 30
console.log(total1)
var total2 = (20 + 10) * 30
console.log(total2)
var total3 = 20 / 2 * 10
console.log(total3)
var total4 = 20 + 10 * 5 + 20 / 2
console.log(total4)

var x = 6
console.log(x++)// o '++' colocado despois da variavel acrescente no resultado somente depois, tento assim que chamar novamente a variavel para ver o incremento
console.log(x)

var y = 2
console.log(++y)// o '++' colocado na frente da variavel acrescente no resultado imediatamente
console.log(y)

// o mesmo acontece com o decremento
var x1 = 6
console.log(x1--)
console.log(x1)

var x1 = 3
console.log(--x1)
console.log(x1)

// operadores aritméticos unários........ transforma string de números em números 
var n = '29'
console.log(+n + 5)
console.log(-n + 5)*/

// Exercicios 

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

// Crie duas expressões que retornem NaN
var x1 = '20'
console.log(isNaN(x1))
var x2 = 2e0
console.log(isNaN(x2))

// Somar a string '200' com o número 50 e retornar 250
var n = +'200'
console.log(n + 50)

// Incremente o número 5 e retorne o seu valor incrementado
var n1 = 5
n1++
console.log(n1)

// Como dividir o peso por 2?
var numero = +'80' / 2 ;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois)
