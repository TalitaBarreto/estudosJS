// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Nesse objeto existe chave/valor, com todos os atributos do elemento html que começa começa com data-

const div = document.querySelector('div')

div.dataset.height = 1000

delete div.dataset.width

console.log(div.dataset.cor)


/*seleção data

let div = document.querySelector('div')
div = document.querySelector('[data-cor]')
div = document.querySelector('[data-cor = 'azul']')
*/

// data atributes, os atributos e valores que começam com data- poderão ser utilizados como forma de configuração de plugins e interações no DOM/JS
// nomenclatura por padrão o JavaScript não aceita traço(-) como caracter válido para nomear propriedades

