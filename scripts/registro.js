
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



