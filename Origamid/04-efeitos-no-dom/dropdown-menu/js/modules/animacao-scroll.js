export default function InitAnimacaoScroll() {

    const sections = document.querySelectorAll('[data-anime="scroll"]') // seleciona a classe que vai fazer a animação ocorrer

    if (sections.length) { // verifica se a classe existe

        const windowMetade = window.innerHeight * 0.6 // pega a metade da tela

        function animaScroll() {

            sections.forEach((section) => { // loop de verificarção da classe

                const sectionTop = section.getBoundingClientRect().top // verifica a distancia do topo
                const isSetionVisible = (sectionTop - windowMetade) < 0 // verifica onde está o scroll da tela

                if (isSetionVisible) { // coloca a classe ativo para fazer os efeitos no css

                    section.classList.add('ativo')

                } else { // tira a classe assim que o elemento não está mais na tela
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll() // ativa a funçõa para que a tela não fique sem nada no primeiro contato com o site

        window.addEventListener('scroll', animaScroll) // ativa o metodo verificando se o scroll está sendo utilizado

    }

}

