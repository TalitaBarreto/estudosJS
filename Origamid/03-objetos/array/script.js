/*// array armazena um coleção de elementos, pode ser string, number, boolean, objects, array, entre outros. Array não são estáticos
const instrumentos = ['Guitarra', 'Baixo', 'Violão', 'Piano']// array de strings
const precos = [50, 23, 92, 100, 85, 20, 10, 62, 5, 3]

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'vermelho', preco: 20000}], function andar(nome){console.log(nome)}]
console.log('                                  ')
// construção de array
//const cozinha = ['prato', 'mesa', 'geladeira', 'fogão']// forma mais comum de construção de array
const sala = new Array('TV', 'vídeogame', 'sofá', 'estante')// forma diferente de construção de array

console.log(sala)

console.log(sala[1])
console.log(sala[3] = 'ventilador')// faz a substituição
console.log(sala[4] = 'estante')// está incrementando item
console.log(sala.length)
console.log('                                  ')
//Array.from() é um método utilizado para transformar array-like em uma array
let li = document.querySelectorAll('li') // nodelist
li = Array.from(li) // array

const carros = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 3
}

const carrosArray = Array.from(carros)

console.log(carrosArray)
console.log('                                  ')
//is.Array() verifca se é uma array 
console.log(Array.isArray(carros))
console.log(Array.isArray(carrosArray))
console.log('                                  ')
//Array.of() cria um Array com os argumentos
console.log(Array.of(12, 20, 32, 45))
console.log('                                  ')

//new Array() cria um Array com a quantidade de itens passado no argumento
console.log(new Array(10))
console.log('                                  ')

// diferença do Array.of e do Array é que o Array.of insere o valor do argumento e o Array cria um array com a quantidade de itens do argumento

// [].length retorna o tamanho do vetor/array
const frutas = ['Banana', 'Maça', 'Pera', 'Mamão', 'Uva', 'Laranja', 'Limão']
console.log(frutas.length)
console.log('                                  ')
//aqui ele está retornando o número de caracteres do item que está na 'casa' 3
console.log(frutas[3].length)
console.log('                                  ')
// [].sort organiza a Array por ordem alfabética, mas não ordena números, somente caracteres
console.log(frutas.sort())
console.log('                                  ')
// [].unshift adiciona elementos no inicio da array e retorna o length 
console.log(carrosArray.unshift('Kia', 'VW'))
console.log(carrosArray)
console.log('                                  ')
// [].push adiciona elementos no final da array e retorna o length 
console.log(carrosArray.push('Ferrari', 'Lamborghini'))
console.log(carrosArray)
console.log('                                  ')
// [].shift remove o primeiro item da array e retorna o mesmo item
console.log(carrosArray.shift())
console.log(carrosArray)
console.log('                                  ')
// [].pop remove o último item da array e retorna o mesmo item
console.log(carrosArray.pop())
console.log(carrosArray)
console.log('                                  ')
// [].reverse inverte os itens da array e retorna a nova array
console.log(carrosArray.reverse())
console.log('                                  ')
// [].splice adiciona valores na array e remove a quantidade de itens que foi passado no segundo parâmetro (substituição de itens), indexação do splice [[].splice(index, remover, itemSubstituido1, itemSubstituido2, ...)]
console.log(carrosArray.splice(1, 3, 'Kia', 'Renault'))
console.log(carrosArray)
console.log('                                  ') 
// [].copyWithin a partir do alvo passa pelo parâmetro, ele vai copiar a array começando do inicio até o final e vai preencher com a cópia, indexação do copyWithin [[].copyWithin(alvo, inicio, final)]
console.log(carrosArray.copyWithin(2, 0, 3))
console.log('                                  ') 
// [].fill preenche a array com o valor, do inicio até o final do parametro passado
console.log(carrosArray.fill('Yoda'))// todas as casas com um unico item que foi passado no parametro
console.log(carrosArray.fill('Dali', 2))// a partir da casa 2 o parametro será repetido
console.log(carrosArray.fill('Au', 1, 3))// no inicio da casa 1 até a casa 3 o parametro passado será repetido
// [].concat concatena a array com o valor passado
const cozinha = ['Geladeira', 'Fogão', 'Armário']
const cozinha1 = ['Mesa', 'Cadeiras', 'Pia']
const cozinhaTotal = cozinha.concat(cozinha1)

const cozinhaNova = [].concat(cozinha, 'Liquidificador', cozinha1 )
console.log(cozinhaTotal)
console.log('                                 ')
console.log(cozinhaNova)
console.log('                                 ')
// [].includes verifica se array tem o valor informado
const linguagens = ['Java', 'JS', 'Python', 'PHP', 'HTML', 'CSS', 'Java']
console.log(linguagens.includes('C#'))
console.log(linguagens.includes('JS'))
console.log('                                 ')
// [].indexOf verifica se array tem o valor e retorna a primeira posição que o valor foi encontrado
console.log(linguagens.indexOf('Java'))// na posição 0
console.log(linguagens.indexOf('C#'))// valor não existe na array, retorno como -1
console.log('                                 ')
// [].lastIndexOf retorna a última posição do valor passado
console.log(linguagens.lastIndexOf('Java'))
console.log('                                 ')
// [].join junta todos os valores da array em uma string
console.log(linguagens.join(''))//todos os valores em uma string só
console.log(linguagens.join(' '))//todos os valores com espaço, mas somente uma string
console.log(linguagens.join(','))//todos os valores separados por virgula, porem sendo uma string só
console.log('                                 ')
let htmlString = '<h2>Titulo</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')
console.log(htmlString)
console.log('                                 ')
// [].slice retorna os itens começando pelo início e indo até o valor final, inicio (primeiro parametro) e final (último parametro) é usado também para fazer clones
console.log(linguagens.slice(0, 3))
const cloneLinguagem = linguagens.slice()
console.log(cloneLinguagem)
console.log('                                 ')
//---------------------------------------------------*/
console.log('Exercícios')
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
console.log(comidas)
const primeiroItem = comidas.shift()
console.log(primeiroItem)
console.log(comidas)
console.log('                                 ')
// Remova o último valor de comidas e coloque em uma variável
const ultimoItem = comidas.pop()
console.log(ultimoItem)
console.log(comidas)
console.log('                                 ')
// Adicione 'Arroz' ao final da array
const addItemFinal = comidas.push('Arroz')
console.log(comidas)
console.log('                                 ')
// Adicione 'Peixe' e 'Batata' ao início da array
const addItemInicio = comidas.unshift('Peixe', 'Batata')
console.log(comidas)
console.log('                                 ')

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const ordemEstudantes = estudantes.sort()
console.log(ordemEstudantes)
console.log('                                 ')
// Inverta a ordem dos estudantes
const inverteEstudantes = estudantes.reverse()
console.log(inverteEstudantes)
console.log('                                 ')
// Verifique se Joana faz parte dos estudantes
const verificaEstudante = estudantes.includes('Joana')
console.log(verificaEstudante)
console.log('                                 ')
// Verifique se Juliana faz parte dos estudantes
const verificaEstudante1 = estudantes.includes('Juliana')
console.log(verificaEstudante1)
console.log('                                 ')

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section')
html = html.join('ul')

html = html.split('div')
html = html.join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carroNovo = carros.slice()
const removerltimo = carros.pop()

console.log(carros)
console.log(carroNovo)

