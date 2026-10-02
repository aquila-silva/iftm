if(window.location.pathname.includes("index.html")){
    const nomeLogin = document.getElementById("nomeLogin");
    const btnEntrar = document.getElementById("btnEntrar");

    document.getElementById("forms").style.display = "none";
    alert("Olá, seja bem-vindo!");
    document.getElementById("forms").style.display = "block";
    btnEntrar.addEventListener("click", entrar);
}


function entrar(){
    vetNome = nomeLogin.value.split(" ");
    if(nomeLogin.value == "" || vetNome.length < 2 ){
        alert("Digite seu nome e ao menos um sobrenome")
    }else{
        usuario = vetNome[0] + " " + vetNome[vetNome.length-1];
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        window.location.href = "menu.html";
        
    }
}
 

const btnMenu = document.getElementById("btnConvidado");

exibeMenu();

function exibeMenu(){

    if(window.location.pathname.includes("index.html"))
            return;
    
    usuarioAtual = localStorage.getItem("usuarioLogado");

    if(usuarioAtual === null){
        window.location.href = "index.html";
    }else{
        usuarioAtual = JSON.parse(usuarioAtual);
<<<<<<< Updated upstream
        hMenu.innerHTML = usuarioAtual + ", seja - bem-vindo ao jogo dos Felinos";
=======
        if(window.location.pathname.includes("menu.html"))
            document.getElementById("hMenu").innerHTML = usuarioAtual + ", seja - bem-vindo ao jogo dos Felinos";
>>>>>>> Stashed changes
    }

}

document.getElementById("btnConvidado").addEventListener("click", function (){
    window.location.href = "felino.html";
})