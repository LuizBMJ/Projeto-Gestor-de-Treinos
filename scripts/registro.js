
function trocar_registro() {
    const cadastro = document.getElementById("container-cadastro");
    const login = document.getElementById("container-login");
    const titulo = document.getElementById("titulo-home");
    const texto = document.getElementById("texto-home");

    const cadastroAtivo = window.getComputedStyle(cadastro).display !== "none";

    if (cadastroAtivo) {
        cadastro.style.display = "none";
        login.style.display = "block";
        titulo.innerText = "Bem-vindo(a) de volta!";
        texto.innerText = "Acesse sua conta para continuar desfrutando de seus treinos personalizados.";
    } else {
        cadastro.style.display = "block";
        login.style.display = "none";
        titulo.innerText = "Crie sua conta";
        texto.innerText = "Para poder criar seus treinos é necessário se registrar primeiro.";
    }
}

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

