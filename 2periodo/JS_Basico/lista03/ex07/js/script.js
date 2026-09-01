const login = document.getElementById("login");
const senha = document.getElementById("senha");
const confSenha = document.getElementById("confirmarSenha");

const btnEntrar = document.getElementById("entrar");
const btnLimpar = document.getElementById("limpar");

btnEntrar.addEventListener("click", validarEntrada);

btnLimpar.addEventListener("click", limpar);

function limpar(){
    login.value = "";
    senha.value = "";
    confSenha.value = "";
}

function validarEntrada(){
    if(login.value == ""){
        alert("login inválido!\nCampo vazio")
    }else{
        if(senha.value != confSenha.value){
            alert("Senha inválida!\nSenhas não correspondem")
        }else if(senha.value.length> 8){
            alert("Senha inválida!\nMais de 8 caracteres")
        }else if(senha.value == "" || confSenha.value == ""){
            alert("Senha inválida\nCampo vazio")
        }else{
            alert("Acesso realizado com sucesso!")
        }
    }
}

