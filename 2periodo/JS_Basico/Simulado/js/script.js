const nomeLogin = document.getElementById("nomeLogin");
const btnEntrar = document.getElementById("btnEntrar");
btnEntrar.addEventListener("click", entrar);

function entrar(){
    vetNome = nomeLogin.value.split(" ");
    if(nomeLogin.value == "" || vetNome.length < 2 ){
        alert("Digite seu nome e ao menos um sobrenome")
    }else{
        localStorage.setItem("usuarioLogado", JSON.stringify(nomeLogin.value));
        window.location.href = "menu.html";
        
    }
}
 
const hMenu = document.getElementById("hMenu");
const btnMenu = document.getElementById("btnConvidado");

exibeMenu();

function exibeMenu(){

    usuarioAtual = localStorage.getItem("usuarioLogado");
    if(usuarioAtual === null){
        window.location.href = "index.html";
    }else{
        usuarioAtual = JSON.parse(usuarioAtual);
        hMenu.innerHTML = `${usuarioAtual}, seja - bem-vindo ao jogo dos Felinos`;
    }

}