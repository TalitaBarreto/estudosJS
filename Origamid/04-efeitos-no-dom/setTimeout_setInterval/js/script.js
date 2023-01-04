// mudar a cada 2 segundas o background da página

/*function mudarClass(){
    document.body.classList.toggle('ativo')
}

setInterval(mudarClass, 2000)*/

//criar cronometro utilizando o setInterval. Deve ser possivel iniciar, pausar, e resetar
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)


let i = 0
let timer;

function iniciarTempo(){
    timer = setInterval(() =>{
        tempo.innerText = i++
    }, 100)
    iniciar.setAttribute('disabled', '')
}

function pausarTempo(){
    clearInterval(timer)
    iniciar.removeAttribute('disabled')
}

function resetarTempo(){
    tempo.innerText = 0
    i = 0    
}