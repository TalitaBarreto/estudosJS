//window.alert('Oláaaa')

/*const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/index.html'){
    console.log('é igual')
}

const h1Selecionada = document.querySelector('h1')

const h1Classes = h1Selecionada.classList 

// As duas funcões a seguir tem a mesma funcionalidade

/*h1Selecionada.addEventListener('click', function(){
    console.log('Clicou no ', h1Selecionada.innerText)
})

function callbackh1(){
    console.log('Clicou em ', h1Selecionada.innerText)
}

h1Selecionada.addEventListener('click', callbackh1)
*/

// Exercícios

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href
console.log(hrefPagina)
// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroElemento = document.querySelector('.ativo')

// Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)
// Retorne a largura da janela 
const largura = window.innerWidth
console.log(largura)
