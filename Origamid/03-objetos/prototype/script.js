// prototype sempre está ligada as funções
// a propriedade prototype é um objeto adicionado a uma função no mesmo instante que a função é criada
/*function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
}

const andre = new Pessoa ('Andre', 28)

console.log(Pessoa.prototype)
console.log(andre.prototype) // o prototype não existe nessas condições por que andre não é uma função, mas sim um objeto que usa a função construtora como estrutura
*/

// objeto criado usando o construtor, tem acesso aos métodos e propriedade do protótipo deste construtor
// prototype é uma propriedade e funções 

// método é chamado em um objeto e acessa e altera dados do mesmo 
// função é utilizada para operar esses dados e não faz alteração

// herança de protótipo, o objeto possui acesso aos métodos e propriedades  do protótipo do construtor responsável por criar este objeto

// Construtor Nativo: Muitos tipos de dados são criados utilizando construtor (ex: Objetos, Funções Números, Strings, element, ...)

// uso direto no construtor de Array

//const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'] 

//const lista = document.querySelectorAll('li')
// transformar em uma Array
//const listaArray = Array.prototype.slice.call(lista)

// Objeto nativo existe método linkado diretamente ao objeto e outros linkados com o protótipo     

//const lista1 = Array.from(lista) // não tem acesso direto ao construtor objeto
//Object.getOwnPropertyNames(Array) // pega as propriedades que o item tem 
//Object.getOwnPropertyNames(Array.prototype)// pega todas as propriedades que o item tem até mesmo os outros metódos que foram criados depois

const Carro = {
    marca: 'Ford',
    preco: 20000,
    andar(){ // função dentro de objeto retutna somente o valor
        return true;
    }
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa (nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade     
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

const talita = new Pessoa('Talita', 'Barreto', 29)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; //Bollean
li.offsetLeft; // Number
li.click(); // underfined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
