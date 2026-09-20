
const username = document.getElementById("username");
const userPass = document.getElementById("userPass");
const btnCadastro = document.getElementById("btnCadastro");
const validaMsg = document.getElementById("confirm");

btnCadastro.addEventListener("click", function (){
    cadastrar_usuario(), attLista()
})


/*função que cadastra usuarios */
function cadastrar_usuario(){


    let dadosLocal = localStorage.getItem("usuarios");

    let listaDeUsuarios;
    //* verifica se já tem usuarios cadastrados
    // e retorna um array vazio se não houver*//
    if(dadosLocal === null){
        listaDeUsuarios = [];
    }else{
        listaDeUsuarios = JSON.parse(dadosLocal);
    }

    let name = username.value;
    let pass = userPass.value;

    let usr = {name: name, pass: pass}

    if(name == "" || pass == ""){
        validaMsg.innerHTML= "Cadastro não realizado!<br>Preencha todos os campos";
        validaMsg.style.color = "Red";
        return;
        /*Se algum campo estiver vazio a função é interrompida
        e exibe mensagem de erro */
    }else{
        if(listaDeUsuarios.length<=0){
            validaMsg.innerHTML= "Cadastro realizado com sucesso!";
            validaMsg.style.color = "Green";
            listaDeUsuarios.push(usr)
            
        }else{
            let duplicado = false;

            for(i = 0; i<listaDeUsuarios.length; i++){
                if(duplicado == true){
                    break;
                }else{
                    if(listaDeUsuarios[i].name == name)
                        duplicado = true;
                }
                    
            }

            if(duplicado == true){
                validaMsg.innerHTML= "Cadastro não realizado!<br>Usuario já cadastrado";
                validaMsg.style.color = "Red";

            }else{
                validaMsg.innerHTML= "Cadastro realizado com sucesso!";
                validaMsg.style.color = "Green";
                listaDeUsuarios.push(usr);
                
                
            }
        }

    }

    

    localStorage.setItem("usuarios", JSON.stringify(listaDeUsuarios));

}

const nameLogin = document.getElementById("userLogin");
const passLogin = document.getElementById("userPassLogin");
const btnLogin = document.getElementById("btnLogin");
const validaMsgLogin = document.getElementById("confirmLogin");

btnLogin.addEventListener("click", function (){
    login()
})

function login(){

    let name = nameLogin.value;
    let pass = passLogin.value;

    if(name == "" || pass == ""){
        validaMsgLogin.innerHTML= "Login não realizado!<br>Preencha todos os campos";
        validaMsgLogin.style.color = "Red";
        return;
    }else{
        let dadosLocal = localStorage.getItem("usuarios");

        if(dadosLocal === null){
            validaMsgLogin.innerHTML= "Nenhum usuario cadastrado!<br>Cadastre-se";
            validaMsgLogin.style.color = "Red";
            return;
        }else{
            let listaDeUsuarios = JSON.parse(dadosLocal);

            let validaLogin = false;

            for(i = 0; i<listaDeUsuarios.length; i++){
                if(name == listaDeUsuarios[i].name && pass == listaDeUsuarios[i].pass){
                    validaLogin = true;
                    break;
                }
            }

            if(validaLogin == true){
                alert("Login realizado com sucesso!")
                validaMsgLogin.innerHTML= "Login realizado com sucesso!";
                validaMsgLogin.style.color = "Green";
                return;
            }else{
                validaMsgLogin.innerHTML= "Login não realizado! <br>Login ou senha incorretos";
                validaMsgLogin.style.color = "Red";

            }
        }
    }

}

const list = document.getElementById("uList");

attLista();

function attLista(){
    let dadosLocal = localStorage.getItem("usuarios");
    if(dadosLocal === null)
        return;
    else{
        let listaDeUsuarios = JSON.parse(dadosLocal);

        list.innerHTML = "";

        for(i = 0; i<listaDeUsuarios.length; i++){
            list.innerHTML += `<li>${i+1}º ${listaDeUsuarios[i].name}</li><br>`
        }
    }

}
