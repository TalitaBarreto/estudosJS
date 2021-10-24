/*// heigth e width são propriedades e metodos dos objetos Element e HTMLElemnet e a maioria delas são Read Only

const listaAnimais = document.querySelector('.animais-lista')

//const heigth = listaAnimais.scrollHeight
//const heigth = listaAnimais.offsetHeight
const heigth = listaAnimais.clientHeight
console.log(heigth)

// offsetTop, metodo onde se pega a distancia do topo do elemento e o topo da página

const topo = listaAnimais.offsetTop
console.log(topo)

// offsetLeft, metodo onde se pega a distancia entre o canto esquerdo do elemento e o canto esquerdo da página

const cantoEsquerdo = listaAnimais.offsetLeft
console.log(cantoEsquerdo)

// getBoundingClientRect() é um metodo que retorna um obejto com valores de width, height e distancias do elemento 

const react = listaAnimais.getBoundingClientRect()
console.log(react)

//window consegue trabalhar com a janela do navegador

console.log(
    window.innerHeight, // heigth da janela, somente o site, menos a ferramenta do dev
    window.innerWidth,  // width da janela, somente o site, menos a ferramenta do dev
    window.outerWidth,  // width da janela toda, com a ferramenta do dev junto 
    window.outerHeight, // heigth da janela toda, com a ferramenta do dev junto

    window.pageXOffset, // distância total do scroll vertical
    window.pageYOffset // distância total do scroll horizontal
)

if(react.top < 0){
    console.log('Passou do elemento')
}

// matchMedia() é utilizado igual o media-querie no CSS para verificar a largura do browser 

const small = window.matchMedia('(max-width: 600px)')

if(small.matches){
    console.log('MENOR 600px')
}else{
    console.log('MAIOR 600px')
}*/

// Exercicios

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img')
const imgTop = img.offsetTop

console.log(imgTop)

// Retorne a soma da largura de todas as imagens
function somaImagens(){

    const imagens = document.querySelectorAll('img')

    let soma = 0

    imagens.forEach((imagem) => {

        soma = soma + imagem.offsetWidth        
    })

    console.log(soma)

}

window.onload = function(){
    somaImagens()
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach((link) =>{
    const linkWidth = link.offsetWidth
    const linkHeight = link.offserHeight

    if(linkHeight >= 48 && linkWidth >= 48){
        console.log(link, 'Recomendado')
    }else{
        console.log('Não recomendado')
    }
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall){
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}

