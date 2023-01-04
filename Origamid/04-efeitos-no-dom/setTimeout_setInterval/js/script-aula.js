/*function espera(texto){
    console.log('Passou 0')
}

const btn = document.querySelector('button')

btn.addEventListener('click', handleClick)

function handleClick(){
    setTimeout(() =>{
        this.classList.add('ativo')
    })
    
}

setTimeout(() => {
    console.log('Testando')
}, 0)


for(let i = 0; i < 20; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}

function loop(texto){
    console.log(texto)
}

setInterval(loop, 1000, 'Passou 1s')

let i = 0
setInterval(() =>{
    console.log(i++)
}, 1000)*/

// clearInterval serve para parar um intervalo
const contarAte10 = setInterval(callback, 1000)

let i = 0
function callback(){
    console.log(i++)
    if(i > 10){
        clearInterval(contarAte10)
    }
}