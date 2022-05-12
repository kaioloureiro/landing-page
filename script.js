function ocultar() {
    var bg = document.getElementById('bg-image')

    if (document.body.offsetWidth <= 700) {
        bg.classList.add('ocultar')
    } else {
        bg.classList.remove('ocultar')
    }
}

window.addEventListener('resize', ocultar)