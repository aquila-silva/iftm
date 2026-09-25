const userNameLogin = document.getElementById("usuarioLogin");
const userPassLogin = document.getElementById("senhaLogin");
const txtLogin = document.getElementById("txtLogin");

const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", logarUsuario);

userPassLogin.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        logarUsuario();
    }
});

userNameLogin.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        logarUsuario();
    }
});

function logarUsuario(){

    userLogin = userNameLogin.value;
    senhaLogin = userPassLogin.value;

    let usuarioLogado = {name: userLogin, pass: senhaLogin};

    if(userLogin == "" || senhaLogin == ""){
        txtLogin.innerHTML = "Acesso negado!<br>Preencha todos os Campos"
        txtLogin.style.color = "Red";
        return;
    }else{
        usuariosLocal = localStorage.getItem("usuariosLDT");
        if(usuariosLocal === null){
            txtLogin.innerHTML = "Acesso inválido!<br>Nenhum usuario cadastrado"
            txtLogin.style.color = "Red";
            return;
        }else{
            dadosLocal = JSON.parse(localStorage.getItem("usuariosLDT"));
            
            let resultadoLogin = false;

            for(let i = 0; i<dadosLocal.length; i++){
                
                if(dadosLocal[i].name == usuarioLogado.name && dadosLocal[i].pass == usuarioLogado.pass ){
                    usuarioLogado = dadosLocal[i];
                    resultadoLogin = true;
                    break; 
                }
            }

            if(resultadoLogin == false){
                txtLogin.innerHTML = "Acesso negado!<br>Usuario ou Senha errados";
                txtLogin.style.color = "Red";
                return;
            }else{

                localStorage.setItem("usuarioLogadoLDT", JSON.stringify(usuarioLogado));

                txtLogin.innerHTML = "Acesso autorizado!<br>Aguarde enquanto te redirecionamos"
                txtLogin.style.color = "Green";

                redirecionaPagina();
            }
        }
    }


}