/*// método de interação com a array

// forEach() função callback é executada para cada item da array (loop); sintexa: [].forEach(callback(itemAtual, index, array))

const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach(function(item, index, array){
    console.log(index, item)
})
console.log('                              ')

// Arrow Function, com melhorias no código

carros.forEach((item, index, array) => {    
    console.log(item.toUpperCase())
})

const li = document.querySelectorAll('li')

li.forEach((i, index) => i.classList.add('ativa' + index))

// o terceiro argumento do loop, ou seja a array é uma referência direta e quando é modificada a array original também é modificada

// [].map é a melhor forma de modificar a array, pois é retornado uma nova array e não é modificada a original, sempre usar o return     
const novoCarros = carros.map((item) => {
    return 'Carros ' + item
})

console.log(carros) 
console.log(novoCarros)

const numeros = [2, 3, 9, 52, 12, 63, 98]
const numerosx2 = numeros.map(n => n * 2)// não precisa chamar o return quando tiver somente uma linha
console.log(numerosx2)

// [].reduce executa a função de callback para cada item da Array, uma variável especial que no ex. é chamada de acumulador, mas é apenas o retorno da iteração
const aula = [10, 15, 20, 25, 30]
const totalAula = aula.reduce((acumulador, atual) =>{
    return acumulador + atual
}, 0) 
console.log('Total de aulas ' + totalAula)

const totalAula1 = aula.reduce((acc, cur) => acc + cur, 100)
console.log('Total de aulas ' + totalAula1)

// utilizando o reduce para tomada de decisão
const maior = [10, 25, 50, 60, 9, 12, 5]

const maiorValor = maior.reduce((anterior, atual) =>{
    //return anterior > atual ? anterior : atual
    if(anterior > atual){
        return anterior
    }else{
        return atual
    }
        
})

console.log(`O maior valor do array é ${maiorValor}`)

//utilizando reduce para returno de objetos
const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome
    return acumulador
}, {})

console.log(listaAulas)

// [].reduceRight a única diferença do .reduce é que esse começa a interagir da direita para esquerda
const frutas = ['Banana', 'Maça', 'Pêra', 'Uva', '']

const frutasRight = frutas.reduceRight((acumulador, fruta) => acumulador + ' ' + fruta)
const frutasLeft = frutas.reduce((acumulador, fruta) => acumulador + ' ' + fruta)

console.log(frutasLeft)
console.log(frutasRight)

// [].some se pelo menos um valor do return for true ele retorna true
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva'
})

console.log(temUva)

function maiorQue100(numeroV){
    return numeroV > 100
}

const numeroVerdade = [0, 15, 20, 120, 23, 50, 90]
const temMaiorQue100 = numeroVerdade.some(maiorQue100)

console.log(temMaiorQue100)

// [].every se todos os retornos for true, ele vai retornar true. Mas se pelo menos um retorno for false, ele vai retornar false
const arrayCheia = frutas.every((fruta) =>{
    return fruta
})
// ele está retornando false porque pelo menos um item da array está vazio
console.log(arrayCheia)

const numero3 = [63, 25, 44, 12, 10]

const maiorQue3 = numero3.every(n => n > 3)

console.log(maiorQue3)

//[].find retorna o valor da primeira interação que retorna um valor verdadeiro
//[].findIndex retorna o index, a casa onde o valor verdadeiro se encontra
const buscaUva = frutas.findIndex((fruta) =>{
    return fruta === 'Uva'
})

console.log(buscaUva)//posição onde Uva foi encontrada no array

const buscaMaior10 = numeros.find(x => x > 10)
console.log(numeros)
console.log(buscaMaior10)// retorna o primeiro valor maior que 10

//[].filter retorna uma array com a lista de valores que retornaram um valor verdadeiros
const frutas1 = ['Banana', '', 'Uva', 'Maçã', undefined]
const frutasVerdadeiro = frutas1.filter((fruta)=>{
    return fruta
})

console.log(frutasVerdadeiro)

const buscaTodosMaior10 = numeros.filter(x => x > 10)
console.log(buscaTodosMaior10)

const aulasMaiores10Min = aulas.filter((aula) =>{
    if(aula.min > 10){
        return console.log(aula.nome)
    }
        
})
*/

// Exercícios
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')
const arrayCurso = Array.from(cursos)

const objetosCurso = arrayCurso.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText

    return{
        titulo,
        descricao,
        aulas,
        horas
    }
})

console.log(objetosCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaiores100 = numeros.filter( x => x > 100)

console.log(numerosMaiores100)

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((instrumento)=>{
    return instrumento === 'Baixo'
})

console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) =>{
    const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
    return acumulador + precoLimpo
}, 0)

console.log(valorTotal)
