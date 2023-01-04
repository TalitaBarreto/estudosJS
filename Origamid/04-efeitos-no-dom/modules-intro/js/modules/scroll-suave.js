export default function initScrollSuave(){

    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')// seleção de elemento que está sendo utilizado

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href') // pega qual href está sendo clicado 
        const section = document.querySelector(href) // seleciona a seção com o mesmo nome da href que está sendo clicada

        section.scrollIntoView({ // esse metódo leva o usuario até a seção desejada
            behavior:'smooth', // faz o efeito suave
            block:'start',// deixa o usuario no começo da seção
        })
    }


    linksInternos.forEach((link) => { //loop para verificar o click do usuario 
        link.addEventListener('click', scrollToSection)
    })

}

