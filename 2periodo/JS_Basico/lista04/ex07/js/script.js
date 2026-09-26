const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", cadastrarEExibir);
exibirCadastros();

function cadastrarEExibir(){
    usuarioIn = document.getElementById("usuario").value;
    senhaIn = document.getElementById("senha").value;

    if(usuarioIn == "" || senhaIn == ""){
        alert("Preencha todos os campos");
        return;
    }else{
        usuarios = localStorage.getItem("usuariosEx07");

        if(usuarios === null)
            usuarios = [];
        else{
            usuarios = JSON.parse(localStorage.getItem("usuariosEx07"));
        }
            usuarioCadastrado = {usuario:usuarioIn, senha:senhaIn};
            usuarios.push(usuarioCadastrado);

            localStorage.setItem("usuariosEx07", JSON.stringify(usuarios));

            exibirCadastros();
        
    }
}

function exibirCadastros(){
    
    listaUsuarios = localStorage.getItem("usuariosEx07")
        if(listaUsuarios === null){
        return;
    }else{
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosEx07"))
        const lista = document.getElementById("listaUsuarios");
            lista.innerHTML = "";
        for(let i = 0; i<listaUsuarios.length; i++){
            lista.innerHTML += `<li>Usuario: ${listaUsuarios[i].usuario} Senha: ${listaUsuarios[i].senha}</li> <br>` 
        }

    }
}