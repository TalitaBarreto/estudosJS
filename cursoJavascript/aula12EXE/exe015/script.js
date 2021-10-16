function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados em tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/crianca-homem1.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/adolescente-homem1.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-homem1.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-homem1.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/crianca-mulher1.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/adolescente-mulher1.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-mulher1.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-mulher1.png')
            }
        }
        res.style.textAlign = 'center'
       
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}