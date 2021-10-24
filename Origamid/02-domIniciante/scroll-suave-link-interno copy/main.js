function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li') // seleciona as imagens dos animais
    const tabContent = document.querySelectorAll('.js-tabcontent section') // seleciona a seção de conteúdo


    if (tabMenu.length && tabContent.length) { // verificação se tem os conteúdos (imagens e textos)

        tabContent[0].classList.add('ativo') // acrescenta classe ativo na primeira seção do conteúdo 

        function activeTab(index) { // verifica se tem a classe ativo, e se tiver é removida para selecionar outro conteúdo
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo'); // acrescenta a classe ativo no conteúdo selecionado
        }

        tabMenu.forEach((itemMenu, index) => { // verifica qual das imagens foi clicada para mostrar o conteúdo
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });

    }
}

initTabNav();

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt')// seleciona o titulo da faq
    const ativoClass = 'ativo'

    if (accordionList.length) {
        accordionList[0].classList.add(ativoClass)// acrescenta a classe ativo no primeiro titulo
        accordionList[0].nextElementSibling.classList.add(ativoClass)// acrescenta a classe ativo na primeira resposta

        function activeAccordion() {
            this.classList.toggle(ativoClass) // acrescenta a classe ativo no titulo
            this.nextElementSibling.classList.toggle(ativoClass)// acrescenta a classe ativo na resposta
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)// ao clicar a função que acrescenta a classe ativo é ativada
        })

    }

}

initAccordion();

function initScrollSuave(){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')// seleção de elemento que está sendo utilizado

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

initScrollSuave();