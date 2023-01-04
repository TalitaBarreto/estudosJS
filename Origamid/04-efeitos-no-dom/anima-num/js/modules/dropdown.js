import outsideClick from "./outsideclick.js"

export default function initDropdown() {
    const dropdownMenu = document.querySelectorAll('[data-dropdown]')

    dropdownMenu.forEach(menu => {

        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })

    })

    function handleClick(event) {
        event.preventDefault()
        this.classList.add('ativar')
        outideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativar')
        })
    }

}


