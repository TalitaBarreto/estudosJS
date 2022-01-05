/*//todo objeto é criado com o construtor object e por isso herdam as propriedades e métodos do seu prototype
const pessoa = new Object({
    nome: 'Talita'
})
console.log(pessoa)

// Object.create retorna um novo obejto que terá como protótipo o objeto do primeiro argumento
// Object.create(obj, defineProperties)
const carro = {
    marca: 'Ford',
    rodas: 4,
    acelerar(){
        return this.marca + ' acelerou'
    },
    buzinar(){
        return this.marca + ' buzinou'
    }
}

const honda = Object.create(carro)
honda.marca = 'Honda'

console.log(honda.buzinar())

//Object.assign adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo

const funcaoAutomovel = {
    acelerar(){ 
        return 'acelerou'
    },
    buzinar(){
        return 'buzinou'
    }
}

const moto = {
    rodas: 2,
    capacete: true
}

const carro = {
    rodas: 4,
    capacete: false
}

Object.assign(moto, funcaoAutomovel)
Object.assign(carro, funcaoAutomovel)

//Object.defineProperties adiciona ao alvo novas propriedades, a diferença é a possibilidade de serem definidas as características dessas propriedades
const moto = {}
Object.defineProperties(moto,{
    rodas: {
        value: 2,
        configurable: false, //impede deletar e mudar o valor
        enumerable: true // torna enumerável
    },
    capacete: {
        value: true,
        configurable: true,
        writable:false // impede a mudança de valor
    }
})
moto.rodas = 5
console.log(moto)

// get e set, é possível definir diferentes comportamentos para o get e set de uma propriedade. obj.propriedade (função get é ativada), obj.propriedade = 'valor' (função set é ativada)
const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})


const carro = {
    marca: 'Ford',
    ano: 2019,
}

// Object.getOwnPropertyDescriptors(obj), lista todos os métodos e propriedades de um obejto com as suas devidas configurações
Object.getOwnPropertyDescriptor(Array) // lista com métodos e propriedades e Array
Object.getOwnPropertyDescriptor(Array.prototype)// lista com métodos e propriedades so protótipo de array
Object.getOwnPropertyDescriptor(window, 'innerHeight') // puxa de uma única propriedade

//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
Object.keys(Array) // [] vazia, pois não possui propriedades enumeráveis
Object.keys(carro) // ['marca', 'ano']

// Object.values(obj) retonra uma array com os valores do objeto

Object.values(carro) // ['Ford', '2019']

//Object.entries(obj) retorna uma array com array's contendo a chave e o valor
Object.entries(carro) // [['marca', 'Ford'] , ['ano', '2019']]

//Object.getOwnPropertyNames(obj) retorna uma array com todas as propriedades diretas do objeto 
Object.getOwnPropertyNames(Array) // ['length', 'name', 'prototype', 'isArray', 'from', 'of']
Object.getOwnPropertyNames(Array.prototype) // [..., 'filter', 'map', 'every', 'some', 'reduce', ...]
Object.getOwnPropertyNames(carro)// ['marca', 'ano']

//Object.getPrototypeOf() retorna o protótipo do objeto.
//Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false

const frutas = ['Banana', 'Pêra']

Object.getPrototypeOf(frutas)
Object.getPrototypeOf('') // string

const frutas1 = ['Banana', 'Pêra']
const frutas2 = ['Banana', 'Pêra']

Object.is(frutas1, frutas2) //false, por que são dois obejtos diferentes mesmo tendo o mesmo valores

// Object.freeze() impede qualquer mudança nas propriedades
Object.freeze(carro)

//Object.seal() previne a adição de navas propriedades e impede que as atuais sejam deletadas
Object.seal(carro)

//Object.preventExtensions() previne a adição de novas propriedades, mas deixa deletar propriedade existente
Object.preventExtensions(carro)

Object.isFrozen(carro) // está congelado --> true
Object.isSealed(carro) // não deixa adicionar novas propriedades --> true
Object.isExtensible(carro)// é extensivo, posso colocar mais propriedade --> false, mas posso mudar os valores da propriedade

// {}.constructor retorna a função construtura do objeto
console.log(frutas.constructor)

const frase = 'Isso é uma string'
console.log(frase.constructor)

//{}.hasOwnProperty verifica se possui a propriedade e retorna true. A propriedade deve ser direta do obejto e não do protótipo
frutas.hasOwnProperty('map')//false
Array.hasOwnProperty('map')//false
Array.prototype.hasOwnProperty('map')//true

// {}.propertyIsEnumerable() verifica se a propriedade é enumerável
Array.prototype.propertyIsEnumerable('map')// false
window.propertyIsEnumerable('innerHeight')// true

//{}.isPrototypeOf(valor) verifica se é o protótipo do valor passado
console.log(Array.prototype.isPrototypeOf(frutas))//true
console.log(Array.isPrototypeOf(frutas))//false

//{}.toString() retorna o tipo do objeto Object.prototype.toString.call(valor)
console.log(frutas.toString()) // Banana,Pêra
console.log(typeof frutas) // object
console.log(Object.prototype.toString.call(frutas)) // [object Array]
console.log('-------------------')
console.log('')


console.log(carro.toString())
console.log(typeof carro)
console.log(Object.prototype.toString.call(carro))


console.log('')
console.log('-------------------')
const li = document.querySelectorAll('li')
console.log(typeof li)
console.log(Object.prototype.toString.call(li))//[object NodeList]
*/

console.log('Exercícios')
// 01 - Crie uma função que verifique corretamente o tipo de dado

function verificaDados(dado){
    return Object.prototype.toString.call(dado)
}

console.log(verificaDados('String'))

// 02 - Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {}

Object.defineProperties(quadrado,{
    lados: {
        value: 4,
        enumerable: true
    }
})


// 03 - Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao)
  
// 04 - Liste o nome de todas as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))