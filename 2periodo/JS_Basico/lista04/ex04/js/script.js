document.getElementById("btnEnviar").addEventListener("click", cadastrar);

function cadastrar(){
    usuarioInput = document.getElementById("usuario").value;
    senhaInput = document.getElementById("senha").value;

    if(usuarioInput == "" || senhaInput == ""){
        alert("Preencha todos os campos");
    }else{
        
        usuarioCadastrado = {usuario:usuarioInput, senha:senhaInput};
        localStorage.setItem("usuarioEx04", JSON.stringify(usuarioCadastrado));
    }
}