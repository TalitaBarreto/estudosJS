//Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos
//Function.length retorna o total de argumentos da função
/*function somar(n1, n2){
    return n1 + n2
}

console.log(somar.length)
console.log('-----------------------')
//Function.name retorna uma string com o nome da função
console.log(somar.name)
console.log('-----------------------')
// function.call executa a função, sendo possível passarmos uma nova referência ao this da mesma
const carro = {
    marca: 'Ford',
    ano: 2015
}

function descricaoCarro(){    
    console.log(this.marca + ' ' + this.ano)
}

descricaoCarro()
descricaoCarro.call()
descricaoCarro.call(carro)

// o valor de this faz referência ao objeto criado durante a construção do objeto. o call faz a troca de referência do método
const carros = ['Ford', 'Fiat', 'VW']
const frutas = ['Banana', 'Uva', 'Maçã']

frutas.forEach.call(carros, (item) => {
    console.log(item)
})

function Dom(seletor){
    this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe){
    console.log(this)
    this.element.classList.add(classe)
}

const li = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar')

console.log('------------------------')

const frutas1 = ['Uva', 'Maçã', 'Banana']

Array.prototype.mostrarThis = function(){
    console.log(this)
}

console.log(frutas1.mostrarThis())

const arrayLike = {
    0: 'Item1',
    1: 'Item2',
    2: 'Item3',
    length: 3
}

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

const filtro = arrayLi.filter.call(li, (item) => {
   
    return item.classList.contains('ativo')

})

console.log(filtro)
// function.apply tem a funcionalidade parecida com a call porem é que os argumentos são passados através de uma array
 const numeros = [3, 4, 9, 10, 30, 44, 52]
 console.log(Math.max.apply(null, numeros))
 console.log(Math.min.apply(null, numeros))
 console.log(Math.max.call(null, 3, 5, 20, 6, 12, 25))

 // function.bind não irá executar a função mais sim retornar a mesma com o novo contexto de this

 const li = document.querySelectorAll('li')

 const filtrarLi = Array.prototype.filter.bind(li, function(item){
     return item.classList.contains('ativo')
 })

 console.log(filtrarLi())*/

 //Exercícios
 // Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
 const paragrafos = document.querySelectorAll('p')

 const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) =>{
     return acumulador + item.innerText.length
 }, 0)
 
 console.log(totalCaracteres)

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
 function criarElemento(tag, classe, conteudo){
     const elemento = document.createElement(tag)
     classe ? elemento.classList.add(classe) : null
     conteudo ? elemento.innerHTML = conteudo : null
     return elemento
 }
console.log(criarElemento('li', 'ativar', 'Talita Barreto'))
// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

console.log(h1Titulo('Curso de Javascript'))