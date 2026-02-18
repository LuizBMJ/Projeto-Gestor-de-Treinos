
function abrirmenu() {
    console.log("JS carregou")
    const menu = document.getElementById("perfil-menu")
    menu.classList.toggle("perfil-visibilidade")
}

document.addEventListener("DOMContentLoaded", () => {
    const perfilWrapper = document.getElementById("perfil-wrapper")
    const menu = document.getElementById("perfil-menu")

    const mediaQuery = window.matchMedia("(min-width: 768px)")

    function configurarMenu(e) {
        if (e.matches) {
            perfilWrapper.addEventListener('mouseenter', abrir)
            perfilWrapper.addEventListener('mouseleave', fechar)
        }

        else {
            perfilWrapper.removeEventListener('mouseenter', abrir)
            perfilWrapper.removeEventListener('mouseleave', fechar)
            menu.classList.remove('perfil-visibilidade')
        }  
    }

    function abrir() {
        menu.classList.add('perfil-visibilidade')
    }

    function fechar() {
        menu.classList.remove('perfil-visibilidade')
    }

    configurarMenu(mediaQuery)
    mediaQuery.addEventListener("change", configurarMenu)
})

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle")
    const root = document.documentElement

    let temaAtual = "dark"

    function aplicarTema(tema) {
        if (tema === "light") {
            root.setAttribute("data-theme", "light")
        } else {
            root.removeAttribute("data-theme")
        }
    }

    toggle.addEventListener("click", () => {
        temaAtual = temaAtual === "dark" ? "light" : "dark"
        aplicarTema(temaAtual)
    })
})

