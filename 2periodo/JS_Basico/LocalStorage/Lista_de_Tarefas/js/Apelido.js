const btnApelido = document.getElementById("btnApelido");

btnApelido.addEventListener("click", alterarApelido)

definirApelido();

function definirApelido(){
    
    usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"));

    if(usuarioAtual.apelido == undefined){

        apelido = prompt("Como gostaria de ser chamado?");
        if(apelido == "" || apelido == null){
    

            usuarioAtual.apelido = usuarioAtual.name;

            usuariosTotal = JSON.parse(localStorage.getItem("usuariosLDT"));

            for(let i = 0; i < usuariosTotal.length; i++){
                if(usuariosTotal[i].name == usuarioAtual.name){
                    usuariosTotal[i].apelido = usuarioAtual.apelido
                }
            }

            localStorage.setItem("usuariosLDT", JSON.stringify(usuariosTotal));
            localStorage.setItem("usuarioLogadoLDT", JSON.stringify(usuarioAtual));

            carregaApelido();

            return;
                
        }else{

            usuarioAtual.apelido = apelido;

            usuariosTotal = JSON.parse(localStorage.getItem("usuariosLDT"));

            for(let i = 0; i < usuariosTotal.length; i++){
                if(usuariosTotal[i].name == usuarioAtual.name){
                    usuariosTotal[i].apelido = usuarioAtual.apelido
                }
            }
            localStorage.setItem("usuariosLDT", JSON.stringify(usuariosTotal));
            localStorage.setItem("usuarioLogadoLDT", JSON.stringify(usuarioAtual));

            carregaApelido();
        }
    }
}

function alterarApelido(){
    usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"));

    apelido = prompt("Como gostaria de ser chamado?");
    if(apelido == "" || apelido == null){
        if(confirm("Não deseja personalizar seu apelido?")){
            return;
        }else{
            apelido = prompt("Como gostaria de ser chamado?");
            
            if(apelido == "" || apelido == null){
                apelido = usuarioAtual.name
            }else{
                usuarioAtual.apelido = apelido;
            }
            
            usuariosTotal = JSON.parse(localStorage.getItem("usuariosLDT"));

            for(let i = 0; i < usuariosTotal.length; i++){
                if(usuariosTotal[i].name == usuarioAtual.name){
                    usuariosTotal[i].apelido = usuarioAtual.apelido
                }
            }
            localStorage.setItem("usuariosLDT", JSON.stringify(usuariosTotal));
            localStorage.setItem("usuarioLogadoLDT", JSON.stringify(usuarioAtual));
            hBV.innerHTML = `Que bom ver você de volta<br>${usuariologado.apelido}`;

            carregaApelido();
    }
    
    }
}