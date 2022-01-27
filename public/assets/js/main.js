
let navli = document.getElementById('navli')
let menu = document.getElementById('menu')
let closeNavB = document.getElementById('closeNavB')

function openMenu() {
    navli.style.opacity = "1"
    navli.style.transform = "translateY(0%)"
    menu.style.opacity = '0'
    closeNavB.style.opacity = '1'
    closeNavB.style.transform = "unset"

}
function closeNav() {
    navli.style.opacity = "0"
    navli.style.transform = "translateY(100%)"
    menu.style.opacity = '1'
    closeNavB.style.transform = "translateY(-240%)"
    closeNavB.style.opacity = '0'

}