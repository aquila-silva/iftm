const navSair = document.getElementById("sair");

navSair.addEventListener("click", sair);

function sair(){
    localStorage.removeItem("usuarioLogadoLDT");
    redirecionaPagina();
}