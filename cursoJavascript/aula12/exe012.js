var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if(hora >= 8 && hora <= 12)
    console.log(`Bom dia!! O sol já nasceu na fazendinha`)

else if(hora >= 13 && hora <= 18){
    console.log(`Boa tarde!! Tá na hora do cafezinhoooo`)

}else if(hora >= 19){
    console.log(`Boa noite!! Vamo  assistir o Bonner no JN`)

}else{
    console.log(`O que vc tá fazendo acordado meu fi, vaaaaaaaaai dormir`)
} 