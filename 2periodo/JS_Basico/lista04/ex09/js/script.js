
/// UTILIZADO O LOCALSTORAGE DO EXERCICIO ANTERIOR
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", entrar);
exibirCadastros();

function entrar(){
    usuarioIn = document.getElementById("usuario").value;
    senhaIn = document.getElementById("senha").value;
    if(usuarioIn == "" || senhaIn == ""){
        alert("Preencha todos os campos");
        return
    }

    usuariosCadastrados = localStorage.getItem("usuariosEx08");
    
    if(usuariosCadastrados === null){
        alert("Não há usuários Cadastrados");
        return;
    }else{
        usuariosCadastrados = JSON.parse(localStorage.getItem("usuariosEx08"));

        usuario = {usuario: usuarioIn, senha: senhaIn}
        for(let i = 0; i< usuariosCadastrados.length; i++){
            if(usuariosCadastrados[i].usuario == usuario.usuario && usuariosCadastrados[i].senha == usuario.senha){
                alert("USUÁRIO JÁ EXISTENTE");
                return;
            }
        }
        alert("USUÁRIO INEXISTENTE");
    }

}


function exibirCadastros(){
    
    listaUsuarios = localStorage.getItem("usuariosEx08")
        if(listaUsuarios === null){
        return;
    }else{
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosEx08"))
        const lista = document.getElementById("listaUsuarios");
            lista.innerHTML = "";
        for(let i = 0; i<listaUsuarios.length; i++){
            lista.innerHTML += `<li>Usuario: ${listaUsuarios[i].usuario} Senha: ${listaUsuarios[i].senha}</li> <br>` 
        }

    }
}