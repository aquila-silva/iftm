const hexcluir = document.getElementById("excluir");

hexcluir.addEventListener("click", excluirCadastro);

function excluirCadastro(){
    if(confirm("Tem certeza que deseja excluir seu cadastro?")){
        usuariosTotal = JSON.parse(localStorage.getItem("usuariosLDT"));

        usuariosTotalFiltrado = [];

        usuarioLogadoAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"));


        for(i = 0; i<usuariosTotal.length; i++){
            if(usuariosTotal[i].name != usuarioLogadoAtual.name){
                usuariosTotalFiltrado.push(usuariosTotal[i]);
            }
           
        }

        localStorage.setItem("usuariosLDT", JSON.stringify(usuariosTotalFiltrado));

        alert("Cadastro excluído com sucesso!");
        
        sair();

        redirecionaPagina();

    }else
        return;
}
