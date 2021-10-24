/*// outerHTML, innerHTML e innerText, são propriedades que retornam uma string contendo html ou texto, e é possível atribuir um novo valor para o elemento

const menu = document.querySelector('.menu')

menu.outerHTML // pega tudo do elemento (div e outros elementos dentro dele)
menu.innerHTML // pega somente o elemento com o html e texto
menu.innerText // pega somente o texto do elemento

// usando 
//const titulo = document.querySelector('h1')

//titulo.innerText = '<p>Olá Mundo</p>'
//titulo.outerHTML = '<p>Olá Mundo</p>'
//titulo.innerHTML = '<p>Olá Mundo<p>'

// transversing, é usado para navegar sobre o DOM, utilizando suas propriedades e métodos

const lista = document.querySelector('.animais-lista')

lista.parentElement // o elemento pai selecionado
lista.parentElement.parentElement // elemento pai do elemento selecionado (pai do pai)
lista.previousElementSibling // um elemento acima do elemento selecionado
lista.nextElementSibling // um elemento abaixo do elemento selecionado
lista.children // coleçaõ de html dos elementos filhos
lista.children[0] // primeiro filho do elemento selecionado
console.log(lista.children[lista.children.length-1]) // ultimo elemento filho do elemento selecionado

lista.querySelectorAll('li') // todos os LI's 
lista.querySelector('li:last-child') // último filho

// Element X Node
// element representa um elemento html (uma tag). Node representa um nó, e pode ser um elemento, texto, comentário, quebra de linha e outras coisas

lista.previousSibling // node acima
lista.previousElementSibling // elemento acima

lista.firstChild // primeiro node child
lista.childNodes // todos os node child

// Manipulando Elementos: É possível mover elementos do dom com métodos do NODE
 const contato = document.querySelector('.contato')
 const titulo = contato.querySelector('.titulo')
 const animais = document.querySelector('.animais')

 //lista.appendChild(titulo)
 //contato.insertBefore(animais, titulo)// inserir a lista antes do titulo
 //contato.removeChild(titulo)//  remove o titulo de contato
contato.replaceChild(lista, titulo)// substitui titulo por lista

// novos elementos: pode ser criado novos elementos com o método createElement()
 const novoH1 = document.createElement('h1')
 novoH1.innerText = ('Novo Título')
 novoH1.classList.add('titulo')

 const mapa =document.querySelector('.mapa')

 mapa.appendChild(novoH1)

 // Clonar Elementos: todo elemento é único. Para a criação de um novo elemento baseado em um anterior é necessário utilizar o metódo cloneNode()
 const h1 = document.querySelector('h1')
 const faq = document.querySelector('.faq')

 const cloneH1 = h1.cloneNode(true)

 faq.appendChild(cloneH1)*/

 // Exercicios

 // Duplique o menu e adicione ele em copy

 const menu = document.querySelector('.menu')
 const copy = document.querySelector('.copy')

 const cloneMenu = menu.cloneNode(true)

 copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')


// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML