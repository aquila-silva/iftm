
const username = document.getElementById("username");
const userPass = document.getElementById("userPass");
const btnCadastro = document.getElementById("btnCadastro");
const validaMsg = document.getElementById("confirm");

btnCadastro.addEventListener("click", function (){
    cadastrar_usuario(), attLista()
})


/*função que cadastra usuarios */
function cadastrar_usuario(){

    //variavel que verifica conteúdo do Local Storage
    let dadosLocal = localStorage.getItem("usuarios");

    let listaDeUsuarios;

    //* Condição que verifica se já tem usuarios cadastrados
    // e retorna um array vazio se não houver*//
    if(dadosLocal === null){
        listaDeUsuarios = [];
    }else{
        listaDeUsuarios = JSON.parse(dadosLocal);
    }

    //Variaveis que guardam o usuario e senha digitados
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
            //tratamento de condição caso este seja o primeiro usuario cadastrado
            validaMsg.innerHTML= "Cadastro realizado com sucesso!";
            validaMsg.style.color = "Green";
            listaDeUsuarios.push(usr)
            
        }else{
            //variavel boolean que verifica se já existe o mesmo usuario cadastrado//
            let duplicado = false;
            
            //loop que percorre todos os usuarios já cadastrados
            for(i = 0; i<listaDeUsuarios.length; i++){
                
                if(duplicado == true){
                    break;
                    //caso o usuario com mesmo nome seja econtrado o loop é interrompido
                    // e a variavel boolean se torna verdadeira*/
                }else{
                    if(listaDeUsuarios[i].name == name)
                        duplicado = true;
                }
                    
            }

            //se duplicado for verdadeiro o cadastro não é realizado
            if(duplicado == true){
                validaMsg.innerHTML= "Cadastro não realizado!<br>Usuario já cadastrado";
                validaMsg.style.color = "Red";
                return;
            }else{
                validaMsg.innerHTML= "Cadastro realizado com sucesso!";
                validaMsg.style.color = "Green";
                listaDeUsuarios.push(usr);
                
                
            }
        }

    }

    

    localStorage.setItem("usuarios", JSON.stringify(listaDeUsuarios));

}


//variavems que captam elementos do card de login no HTML
const nameLogin = document.getElementById("userLogin");
const passLogin = document.getElementById("userPassLogin");
const btnLogin = document.getElementById("btnLogin");
const validaMsgLogin = document.getElementById("confirmLogin");

btnLogin.addEventListener("click", function (){
    login()
})

function login(){

    //variaveis que guaram nome e senha do usuario
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
const btnLimpar = document.getElementById("btnLimpar");

attLista();
btnLimpar.addEventListener("click", limpar);


function attLista(){
    let dadosLocal = localStorage.getItem("usuarios");
    if(dadosLocal === null){
        list.innerHTML = "";
        return;
    }else{
        let listaDeUsuarios = JSON.parse(dadosLocal);

        list.innerHTML = "";

        for(i = 0; i<listaDeUsuarios.length; i++){
            list.innerHTML += `<li>${i+1}º ${listaDeUsuarios[i].name}</li><br>`
        }
    }

}

function limpar(){
    dadosLista = localStorage.getItem("usuarios");
    if(dadosLista === null){
        return;
    }else{
        let vazio = "";
        localStorage.removeItem("usuarios");
        attLista();
    }
}
