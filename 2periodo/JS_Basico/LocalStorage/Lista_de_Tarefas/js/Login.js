const userNameLogin = document.getElementById("usuarioLogin");
const userPassLogin = document.getElementById("senhaLogin");
const txtLogin = document.getElementById("txtLogin");

const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", logarUsuario);

function logarUsuario(){
    userLogin = userNameLogin.value;
    senhaLogin = userPassLogin.value;
    if(userLogin == "" || senhaLogin == ""){
        txtLogin.innerHTML = "Acesso negado!<br>Preencha todos os Campos"
        txtLogin.style.color = "Red";
        return;
    }else{
        usuariosLocal = localStorage.getItem("usuariosLDT");
        if(usuariosLocal === null){
            txtLogin.innerHTML = "Acesso inválido!<br>Nenhum usuario cadastrado"
            txtLogin.style.color = "Red";
        }else{
            dadosLocal = JSON.parse(localStorage.getItem("usuariosLDT"));
            
            resultadoLogin = null;
            for(let i = 0; i<dadosLocal[i].length; i++){
                
                if(dadosLocal[i].name == userLogin && dadosLocal[i].pass == senhaLogin){
                    let usuarioLogado = dadosLocal[i];
                    resultadoLogin = true;
                    break; 
                }
            }
            if(resultadoLogin == false){
                txtLogin.innerHTML = "Acesso negado!<br>Usuario ou Senha errados";
                txtLogin.style.color = "Red";
                return;
            }else{
                usuarioLogado = {name:userLogin, pass:senhaLogin};
                localStorage.setItem("usuarioLogadoLDT", JSON.stringify(usuarioLogado));

                txtLogin.innerHTML = "Acesso autorizado!<br>Aguarde enquanto te redirecionamos"
                txtLogin.style.color = "Green";

                redirecionaPagina();
            }
        }
    }


}