const hBV = document.getElementById("hBoasVindas");

carregaApelido();

function carregaApelido(){
    usuariologado = JSON.parse(localStorage.getItem("usuarioLogadoLDT"));

    hBV.innerHTML = `Que bom ver você por aqui <br>${usuariologado.apelido}`

}