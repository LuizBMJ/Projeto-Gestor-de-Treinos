
function trocar_registro() {
    let cas = document.getElementById("container-cadastro");
    let log = document.getElementById("container-login")

    if (!cas.style.display || !log.style.display) {
        cas.style.display = 'none';
        log.style.display = 'block';
    }
    
    if (cas.style.display === 'none') {
        cas.style.display = 'block';
        log.style.display = 'none';
    } else {
        cas.style.display = 'none';
        log.style.display = 'block';
    }
}   