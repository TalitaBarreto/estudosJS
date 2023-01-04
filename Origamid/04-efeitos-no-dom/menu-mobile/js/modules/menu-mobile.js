import outsideClick from './outsideClick.js'

export default function initiMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const eventos = ['click', 'touchstart']
    
    function openMenu(event) {
        menuList.classList.add('ativo')
        menuButton.classList.add('ativo')
    
        outsideClick(menuList, ['click', 'touchstart'], () => {
            menuList.classList.remove('ativo')
            menuButton.classList.remove('ativo')
        })
    }
    
    
    menuButton.addEventListener('click', openMenu)
}




