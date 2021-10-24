// addEventListener, adiciona uma função ao elemnto, chamado de callback, ela só é ativada assim que o evento ocorre neste elemento 
/*const img = document.querySelector('img')

img.addEventListener('click', () =>{
    console.log('Clicou')
})

// é uma boa pratico separar a função de callback do addEventListener. Como por exemplo:
function callback(){
    console.log('Clicouu')
}

img.addEventListener('click', callback)

// event é o primeiro perâmetro do callback é referente ao evento que ocorreu
function callback(event){
    console.log(event)
}

img.addEventListener('click', callback)

// o event também tem as propriedades
const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event){
    const currentTarget = event.currentTarget // this
    const target = event.target // pega onde foi clicado
    const type = event.type // tipo de evento
    const path = event.path
    console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', executarCallback)


// event.preventDefault é para previne o comportamento padrão do evento no browser
const linkExterno = document.querySelector('a[href^="http"]')

function clickNoLink(event){
    event.preventDefault()
    console.log(event.currentTarget.href)
}

linkExterno.addEventListener('click', clickNoLink)


// this pode fazer referência a diferentes objetos depende do contexto que ele é usado, no caso dos eventos ele faz referência ao elemento que o addEventListener foi aplicado/adicionado
const img = document.querySelector('img')

function callback(event){
    console.log(this) // vai retornar a imagem que foi selecionada
    console.log(this.getAttribute('src'))
}

img.addEventListener('click', callback)

// exsitem diversos eventos como, clic, scroll, resize, keydown, keyup, mouseenter entre outros e os eventos pode ser adicionados a diferentes elementos, como window e document
const h1 = document.querySelector('h1')

function callback(event){
    console.log(event.type, event)
}

//h1.addEventListener('click', callback)
//h1.addEventListener('mouseenter', callback)
//window.addEventListener('scroll', callback)
//window.addEventListener('resize', callback) // redimencionamento da janela
//window.addEventListener('keydown', callback) // quando o usuario aberta algum botão do teclado


// keyboard é para adicionar atalhos do teclado para melhor navegação no site

function funcaokeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul')
    }else if(event.key === 'v'){
        document.body.classList.toggle('vermelho')
}
    }
    

window.addEventListener('keydown', funcaokeyboard)


// forEach é utilizado no addEventListener por que nesse metodo é adicionado somente em um elemento, assim sendo necessário um loop entre elementos de uma lista para adicionar a cada um desses elementos. Ex:

const imgs = document.querySelectorAll('img')

function imgSrc(event){
    const src = event.currentTarget.getAttribute('src')
    console.log(src)
}

imgs.forEach((img) =>{
    img.addEventListener('click', imgSrc)
})
*/

// Exercicios

// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]')

function clickInterno(event){
    event.preventDefault()
    event.currentTarget.classList.add('ativo')

    links.forEach((link) =>{
       link.classList.remove('ativo') 
    })
}

links.forEach((links) =>{
    links.addEventListener('click', clickInterno)
})

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')

/*function clickElemento(event){
    console.log(event.currentTarget)
}*/

todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', clickElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

function clickElemento(event){
    event.currentTarget.remove()   
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function botaoT(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textoMaior')
    }
}

window.addEventListener('keydown', botaoT)