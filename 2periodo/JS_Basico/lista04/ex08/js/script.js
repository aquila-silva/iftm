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
        usuarios = localStorage.getItem("usuariosEx08");

        if(usuarios === null)
            usuarios = [];
        else{
            usuarios = JSON.parse(localStorage.getItem("usuariosEx08"));
        }
            usuarioCadastrado = {usuario:usuarioIn, senha:senhaIn};

            let duplicado = false;
            for(let i = 0; i < usuarios.length; i++){
                if(usuarios[i].usuario == usuarioCadastrado.usuario){
                    duplicado = true;
                    break;
                }
            }
            
            if(duplicado){
                alert("Usuarios já cadastrado");
                return;
            }else{

            usuarios.push(usuarioCadastrado);

            localStorage.setItem("usuariosEx08", JSON.stringify(usuarios));

            exibirCadastros();
            }
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