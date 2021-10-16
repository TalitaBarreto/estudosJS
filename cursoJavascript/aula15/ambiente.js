let num = [5, 8, 9, 3, 2]

num[5] = 1

num.push(6) // coloca na ultima posição

console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor é ${num.length}`)// quantidade de dados
console.log(`Nosso vetor é ${num.sort()}`)// vetor ordenado

let pos = num.indexOf(4)// procurar valor

if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está no posição ${pos}`)
}

