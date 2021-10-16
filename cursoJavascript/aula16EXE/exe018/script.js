<<<<<<< HEAD
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{

        window.alert('Valor inválido ou já encontrado na lista')
        
    }

    num.value = ''
    num.focus()

}

function finalizar(){

    if(valores.length == 0){

        window.alert(`Adicione valores para finalizar a análise`)

    }else{

        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0

        let media = 0

        for(let pos in valores){

            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]

            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Temos ao todo ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }

=======
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{

        window.alert('Valor inválido ou já encontrado na lista')
        
    }

    num.value = ''
    num.focus()

}

function finalizar(){

    if(valores.length == 0){

        window.alert(`Adicione valores para finalizar a análise`)

    }else{

        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0

        let media = 0

        for(let pos in valores){

            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]

            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Temos ao todo ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }

>>>>>>> 5a3b3e7a3c073cf15a23667fe6d552b185cdb00a
}