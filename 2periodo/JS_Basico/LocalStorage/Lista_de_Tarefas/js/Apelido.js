
alterarApelido();

function alterarApelido(){
    usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"));

    if(usuarioAtual.apelido != null){

        apelido = prompt("Como gostaria de ser chamado?");
        if(apelido == "" || apelido == null){
            if(confirm("Não deseja personalizar seu apelido?")){
                return;
            }
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
        }
    }
}