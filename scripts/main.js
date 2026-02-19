
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle")
    const root = document.documentElement

    let temaAtual

    function aplicarTema(tema) {
        temaAtual = tema
        root.setAttribute('data-theme', tema)
        localStorage.setItem("theme", tema)
    }

    const temaSalvo = localStorage.getItem("theme")

    if (temaSalvo) {
        temaAtual = temaSalvo
        aplicarTema(temaAtual)
    }

    else {
        let temaSistema = window.matchMedia("(prefers-color-scheme: dark)").matches
        const temaSistemaPref = temaSistema ? "dark" : "light"
        aplicarTema(temaSistemaPref)
    }

    toggle.addEventListener("click", () => {
        const novoTema = temaAtual === "dark" ? "light" : "dark"
        aplicarTema(novoTema)
    })
})


