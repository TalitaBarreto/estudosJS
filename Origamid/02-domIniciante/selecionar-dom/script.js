// getElementById = essa função seleciona o elemento no html
/*
const animais = document.getElementById('animais')

console.log(animais)

// getElementByClassName e getElementByTagName = seleciona uma lista de elementos do html 

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)
console.log(gridSection[2])

// querySelector = retorna o primeiro elemento que combinar com o seletor css

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos)

// querySelectorAll = retorna todos os elementos compatíveis com o seletor do css solicitado
// porem a lista que ele mostra é estática, diferente do getElementByClassName
// mesmo atualizando manualmente o querySelectorAll fica com os mesmos elementos da primeira vez que foi executado

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

// htmlcollection somente 3 metodos, nodelist tem diversos metodos como se fosse um vetor
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')


console.log(gridSectionHTML)
console.log(gridSectionNode)

// HTMLCollection e NodeList são array-like, parecem uma array mas não são
gridSectionNode.forEach(function(item, index){
    console.log(item)
})

// metodo transforma tudo em vetor 
const arrayGrid = Array.from(gridSectionHTML)
console.log(arrayGrid)

// agora podemos usar o metodo forEach pois o gridSectionHTML se transformou em vetor
arrayGrid.forEach(function(item){
    console.log(item)
})*/

//Exercicios 

// Retorne no console todas as imagens do site

const animaisImg = document.querySelectorAll('img')
console.log(animaisImg)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens)

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiraH2 = document.querySelector('.animais-descricao h2');
console.log(primeiraH2)

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length-1])

