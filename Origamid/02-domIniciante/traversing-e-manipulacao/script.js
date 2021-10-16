// outerHTML, innerHTML e innerText, são propriedades que retornam uma string contendo html ou texto, e é possível atribuir um novo valor para o elemento

const menu = document.querySelector('.menu')

menu.outerHTML // pega tudo do elemento (div e outros elementos dentro dele)
menu.innerHTML // pega somente o elemento com o html e texto
menu.innerText // pega somente o texto do elemento

// usando 
const titulo = document.querySelector('h1')

//titulo.innerText = '<p>Olá Mundo</p>'
//titulo.outerHTML = '<p>Olá Mundo</p>'
titulo.innerHTML = '<p>Olá Mundo<p>'

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