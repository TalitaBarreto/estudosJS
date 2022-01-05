// Native : Objetos nativos são definiidos na especificação da linguagem

// Construtores de objetos nativos
// Object
// String
// Array
// Function...

// Host : Objetos do host são aqueles implementados pelo próprio ambiente. Ex, no browser possuímos objetos do Dom, como DomList, HTMLCollection. Em Node.js os objetos são diferentes, já que é uma 'linguagem' de servidor

// Objetos do browser
//HTMLCollection
//Element...

// User : Objetos do user, são obejtos definidos pelo app. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa
// ex:
// const Pessoa = { nome: 'Talita'} 

// Como fazer uma verificação se um objeto existe ou não
// Ex:
// if(typeof Array.from !== "undefined"){console.log('Existe')}else{console.log('Não existe')}
// if(typeof NodeList !== "undefined"){console.log('Existe')}else{console.log('Não existe')}
 
// API é um interface de software criada para a interação com outros software, ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos, e Propriedades, estamos na verdade interagindo com a API do browser



// Exercícios 

// 1 - Liste 5 objetos nativos
Object
String
Array
Function
Number
// 2 - Liste 5 objetos do browser
Window
history
Document
HTMLAllCollection
NodeList
// 3 - Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox
webkitHidden
webkitVisibilityState
