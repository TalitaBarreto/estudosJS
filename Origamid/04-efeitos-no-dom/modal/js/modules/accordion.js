export default function initAccordion() {

    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')// seleciona o titulo da faq
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