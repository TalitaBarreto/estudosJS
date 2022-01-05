// string possui propriedades e métodos do prototype de String

const comida = 'lasanha '
console.log(comida)// variável string 

const bebida = new String ('Suco')
console.log(bebida)// objeto
console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// length é uma propriedade com o total de caracteres de uma string

console.log(comida.length)
console.log(bebida.length)

console.log(comida[0]) // com os colchetes a string se comporta 'igual' a um array e pega exatamente o caracter que esta sendo solicitado
console.log(comida[3])

console.log(bebida[bebida.length - 1]) // pega o último caracteres

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')


// charAt, retorna o caracteres  de acordo com o index de (n)
console.log(bebida.charAt(1))
console.log(bebida.charAt(bebida.length - 1))// pega o último caracteres

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// concat, concatena as strings e retorna o resultado
const frase1 = 'Eu amo ' 

const frase = frase1.concat(comida, '!! <3')
console.log(frase)

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

//includes, procura uma string dentro da outra string, ela é case sensitive

const fruta = 'Banana'
const listaFrutas = 'Laranja, Maçã, Abacate, Banana'

console.log(listaFrutas.includes(fruta))
console.log(listaFrutas.includes(fruta, 10))

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// endsWith também faz a procura, mas com restrição de final da string
//startsWith também faz a procura, mas com restrição de começo da string
console.log(fruta.startsWith('Ba'))// true
console.log(fruta.startsWith('ba'))// false, case sensitive

console.log(fruta.endsWith('na'))// true
console.log(fruta.startsWith('Na'))// false, case sensitive

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// slice, corta a string de acordo com o valor de start e end

const transacao1 = 'Depósito de cliente'
const transacao2 = 'Depósito de fornecedor'
const transacao3 = 'Taxa de camisas'

console.log(transacao1.slice(0,3)) // começo da frase, vai da posição 0 até a posição 3
console.log(transacao2.slice(0,3))
console.log(transacao3.slice(0,3)) 

console.log(transacao1.slice(12)) // posição onde começa a ultima frase e vai até o final sem precisar colocar o valor da posição final
console.log(transacao1.slice(-4))// as 4 últimas posições da frase, por isso usa o sinal negativo
console.log(transacao1.slice(9,12))// posição especifica de começo e fim da string solicitada

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// substring, corta a strinf de acordo com os valores de start e end, mas diferente de slice não funciona valores negativos 

const animal = 'Cachorro'

console.log(animal.substring(1,5))
console.log(animal.substring(0,3))
console.log(animal.substring(2))
console.log(animal.substring(-3))

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// indexOf e lastIndexOf, retorna o index da string ou seja a posição que o caracter buscado está, indexOf returna o primeiro encontrado e o lastIndexOf retorna o último
console.log(animal.indexOf('o'))// 4
console.log(animal.lastIndexOf('o'))// 7
console.log(animal.indexOf('cho'))// 2

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// padStart padEnd, aumenta o valor da string para o valor informado 
const preco = 'R$ 99,00'

console.log(preco.padStart(20, '|'))
console.log(preco.padEnd(20, '|'))

const listaPrecos = ['R$ 99', 'R$199', 'R$12000']

listaPrecos.forEach((item)=>{
    console.log(item.padStart(10, '-'))
})

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// repeat, repete a string quantas vezes for solicitada
const frs = 'Li'
const frs1 = frs.repeat(3) 

console.log(frs1)

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// replace, troca uma string por outra string, lembrar de usar let pois a variável vai mudar 

let listaItens = 'Camisa Bonés Calça Bermudas Vestidos Saias'
listaItens = listaItens.replace(/[ ]+/g, ', ')

console.log(listaItens)

const arrayListaItens = listaItens.split(', ')// quebra o vetor todas as vezes que encontrar ', '

console.log(arrayListaItens)

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// split, divide a string de acordo com o padrão passado

const htmlText = '<div>O melhor item >/div><div>A melhor lista </div>'
const htmlArray = htmlText.split('div')
const novoHTML = htmlArray.join('section')// join adiciona o valor desejado 

console.log(htmlText)
console.log(htmlArray)
console.log(novoHTML)


const frutasArray = [ 'Banana', 'Melancia', 'Laranja']


console.log(frutasArray.join(' '))

console.log(frutasArray.join(', '))

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// toLowerCase deixa todas as letras minúsculas e o to UpperCase deixa todas as letras maiúsculas

console.log(animal.toLowerCase()) // menor

console.log(animal.toUpperCase())// maiuscula

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

// trimStar, remove espaço no começo da variável; trimEnd, remove espaço no final da variável
const num = '    6090     '

console.log(num.trim())
console.log(num.trimStart())
console.log(num.trimEnd())

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

console.log('Exercícios')


// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    }
];


let taxa = 0
let recebimento = 0

transacoes.forEach((i) =>{
    const numeroLimpo = +i.valor.replace('R$ ', '')
    if(i.descricao.slice(0, 4) === 'Taxa')
        taxa = taxa + numeroLimpo
    else{
        recebimento += numeroLimpo
    }
})

console.log(`Total de taxa ${taxa}`)
console.log(`Total de recebimento ${recebimento}`)

console.log('                                              ')
console.log('---------------------------------------')
console.log('                                              ')

  
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransporte = transportes.split(';')
console.log(arrayTransporte)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

html = html.split('span').join('a')

console.log(html)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length - 1])

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let quantidadeTaxa = 0
transacoes2.forEach((i) =>{

    i = i.toLowerCase().trim().slice(0, 4)

    if(i === 'taxa'){
        quantidadeTaxa++
    }

})

console.log(quantidadeTaxa)