// forEach = é a forma mais utilizada para selecionar uma lista de itens no Dom
/*const imgs = document.querySelectorAll('img')

let i = 0
imgs.forEach(function(){
    console.log(i++)
})

imgs.forEach(function(item, index, array){
    console.log(item, index, array)
}) 

// forEach é um método de array 'vetor', alguns objetos são falsos array 'vetor' possuem esse método, mas existe casos que não possuem e o ideal seria transfurma-los em uma array 'vetor'
const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item){
    console.log(item)
})

//Arrow Function, é uma sitaxe mais curta, basta remover a palavra chave function e adicionar '=>' apos os argumentos
const imags = document.querySelectorAll('img')

imags.forEach((item) => {
    console.log(item)
})
*/

// Exercícios
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((item) => {
    console.log(item)
});
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText)
});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => (i++));

