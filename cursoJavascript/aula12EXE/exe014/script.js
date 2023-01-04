function carregar(){
    var msg = window.document.getElementById('msg')
    var msg1 = window.document.getElementById('msg1')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()   

    msg1.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){

        msg.innerHTML = `Bom dia`

        img.src = 'img/manha1.png'

        document.body.style.background = '#ffe2c6'        

    }else if(hora >= 12 && hora <= 18){

        msg.innerHTML = `Boa Tarde!!`
        
        img.src = 'img/tarde1.png'

        document.body.style.background = '#fb3d00' 

    }else{

        msg.innerHTML = `Boa Noite!!`

        img.src = 'img/noite1.png'

        document.body.style.background = '#003354'

    }
    

}