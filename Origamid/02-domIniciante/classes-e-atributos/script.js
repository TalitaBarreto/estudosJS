// classList, esse metodo retorna uma lista com as classes do elemento, essa propriedades tb permite adicionar, remover e verificar 
const menu = document.querySelector('.menu')

//console.log(menu.classList)

menu.classList.add('ativo')
menu.classList.remove('ativo')
menu.classList.toggle('ativo') // toggle desfaz o que  foi feito por ultimo

if(menu.classList.contains('ativo')){
    menu.classList.add('tem-ativo')
}else{
    menu.classList.add('nao-tem-ativo')
}

//atributes, ele retorna uma array-like com os atributos do elemento
const animais = document.querySelector('.animais')

// essa operação retorna todos os atributos do elemento selecionado
animais.attributes 

// essa operação retorna somente o primeiro atributo do elemento selecionado
animais.attributes[0] 

console.log(animais.attributes[1])

// getattribute e setattribute, são propriedades que retornam ou criam de acordo com o atributo selecionado
const img = document.querySelector('img')

img.getAttribute('src') // retorna o valor de src
img.setAttribute('alt', 'raposinha') // muda ou cria o alt, ou qualquer outro metodo html 
img.hasAttribute('id') // verifica se tem ou não e retorna um valor buleano, verdadeiro ou falso
img.removeAttribute('alt') // vai remover o alt, ou remove qualquer outro propriedades do html

//img.hasAttribute() // retorna se tem ou não algum atributo, com verdadeiro ou falso

// existem propriedades que não permitem a mudança de seus valores, essas são chamadas de Read Only, ou seja, apenas leitura
// a proprieade attributes é uma Read Only e a propriedade className um considerada Writable, pois podemos modifica-las, adiciona-las

// Exercicios
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})

itensMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach((item) => {    
    console.log(item.hasAttribute('alt'))
})

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

