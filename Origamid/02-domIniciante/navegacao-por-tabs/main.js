const tabMenu = document.querySelectorAll('.js-tabmenu li') // seleciona as imagens dos animais
const tabContent = document.querySelectorAll('.js-tabcontent section') // seleciona a seção de conteúdo


if(tabMenu.length && tabContent.length){ // verificação se tem os conteúdos (imagens e textos)

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
