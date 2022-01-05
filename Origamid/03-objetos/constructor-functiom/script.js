// função construtora, é responsável por construir novos objetos sempre que essa função é chamada
// função construtora sempre começa com letra maiúscula 

function Carro(){
    this.marca = 'Marca'
    this.preco = 0
}

const honda = new Carro() // atribuindo um novo objeto com a função Carro
honda.marca = 'Honda'
honda.preco = 2000

const fiat = new Carro() // atribuindo um novo objeto conm  a função Carro
fiat.marca = 'Fiat'
fiat.preco = 3000

// new Keyword é responsável por criar um novo objeto baseado na função que for passada na frente dela
//o que o new faz:
// 1 - cria um novo objeto
// 2 - Define o protótipo, o novo objeto herda atributos e métodos da função construtora 
// 3 - Aponto a variável this para o objeto
// 4 - Executa a função, substituindo this pelo objeto
// 5 - Retorna o novo objeto

// this faz referência ao próprio objeto construido com a constructor function

function Carro2(marca, precoInicial){
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
}

const fusca = new Carro2('Chevrolet', 3000)