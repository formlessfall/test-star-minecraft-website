const MenuBtn = document.getElementById('btn-menu')

MenuBtn.addEventListener('click', toggleMenu)

function toggleMenu(e) {
    document.querySelector('.box').classList.toggle('v')
    document.querySelector('.menu-items').classList.toggle('vx')
    document.querySelector('.line-1').classList.toggle('line-1-rotated')
    document.querySelector('.line-2').classList.toggle('line-2-rotated')
    document.querySelector('.line-3').classList.toggle('line-3-toggle')
    document.querySelector('.black-mamba').classList.toggle('is-here')

}