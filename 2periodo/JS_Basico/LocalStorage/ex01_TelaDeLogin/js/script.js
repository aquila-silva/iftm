const tituloLogin = document.getElementById("tituloLogin");
const textoLogin = document.getElementById("textoLogin");
const btnSair = document.getElementById("btnSair");

const btnIcon = document.getElementById("btnIcon");
const imgIcon = document.getElementById("icon");

//variavel principal que carrega dados do usuario logado em forma de objeto
let usuarioAtual = null;


usuarioLogado();

//funcao que verifica se há um usuario logado
function usuarioLogado(){

    let user = localStorage.getItem("usuarioLogado")

    if(user === null){

        tituloLogin.innerHTML = "Bem - vindo";
        textoLogin.innerHTML = "Faça o login ou cadastre-se para continuar";
        btnSair.style.border = "none"
        btnSair.style.value = "";
        btnSair.style.display = "none";

        btnIcon.style.display = "none";
        exibeIcon();

        usuarioAtual = null;

    }else{
         
        user = JSON.parse(localStorage.getItem("usuarioLogado"));
        usuarioAtual = user;

        tituloLogin.innerHTML = "Bem - vindo(a) <br>" + user.name;
        textoLogin.innerHTML = "Que bom ver você por aqui :)";

        btnSair.type = "button";
        btnSair.style.width = "120px";
        btnSair.value = "Sair";
        btnSair.style.display = "block";
        btnSair.style.backgroundColor = "Red";
        btnSair.addEventListener("click", sair)

        btnIcon.type = "button";
        btnIcon.style.width = "120px"
        btnIcon.value = "Trocar Avatar"

        btnIcon.style.display = "block";

        exibeIcon();
        

    }
}

//variaveis constantes que capturam elementos do html
const selecionaIcon = document.getElementById("selecionaIcon");

const icon1 = document.getElementById("icon0");
const icon2 = document.getElementById("icon1");
const icon3 = document.getElementById("icon2");
const icon4 = document.getElementById("icon3");

const btnComIcon = document.getElementById("btnConfirmIcon");

//evento de abrir menu de troca de icone de avatar
btnIcon.addEventListener("click", exibealteraIcon);

//função que exibe o menu do de alteração de icone
function exibealteraIcon(){
    selecionaIcon.style.display = "block";
    selecionaIcon.style.display = "visible";
}
// variavel que controla o icone selecionado
let nmr = null;

//EVENTO DE CLICK NO ICONE DESEJADO PARA SELEÇÃO
icon1.addEventListener("click", function() {
    SelecionaIcon(0);
});
icon2.addEventListener("click", function() {
    SelecionaIcon(1);
});
icon3.addEventListener("click", function() {
    SelecionaIcon(2);
});
icon4.addEventListener("click", function() {
    SelecionaIcon(3);
});


// função que seleciona o icone visualmente apenas
function SelecionaIcon(n){

    nmr = n;

    for(let i = 0; i<4; i++){
        if(i == n){
            document.getElementById("icon"+i).style.backgroundColor = "Green";
        }else if(i != n){
           document.getElementById("icon"+i).style.backgroundColor = ""; 
        }
    }

}
//evento de botao para confirmar a troca de icone e setar no local 
btnComIcon.addEventListener("click", confirmIcon);

// função que seleciona o caminho do icone de fato e seta no local
function confirmIcon(){
    
    userIcon = null;
    
    if(nmr == 0){
        userIcon ="img/gatinho1.webp";
    }else if(nmr == 1){
        userIcon = "img/gatinho2.webp";
    }else if(nmr == 2){
        userIcon = "img/gatinho3.webp";
    }else if(nmr == 3){
        userIcon = "img/gatinho4.webp";
    }

    usuarioAtual.icon = userIcon;

    dadosLocal = JSON.parse(localStorage.getItem("usuarios"));

    for(let i = 0; i<dadosLocal.length; i++){
        if(dadosLocal[i].name == usuarioAtual.name){
            dadosLocal[i] = usuarioAtual;
            break;
        }
    }

    localStorage.setItem("usuarios", JSON.stringify(dadosLocal));
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtual));
    exibeIcon();
    selecionaIcon.style.display = "none";
}

//função que atualiza o icone exibido na tela
function exibeIcon(){
  
    if(usuarioAtual == null){
        imgIcon.src = "img/gatinhodefault.webp";
        return;
    }else{
        if(usuarioAtual.icon){
            imgIcon.src = usuarioAtual.icon;
        }else{
            imgIcon.src = "img/gatinhodefault.webp";
        return;
        }

    }

}

//funcao para sair 
function sair(){
    localStorage.removeItem("usuarioLogado")
    if(confirm("Tem certeza que deseja sair?")){
        usuarioLogado();
        exibeIcon();
    }else
        return;
}

const list = document.getElementById("uList");
const btnLimpar = document.getElementById("btnLimpar");

attLista();
btnLimpar.addEventListener("click", limpar);


function attLista(){
    dadosLocal = localStorage.getItem("usuarios");
    
    if(dadosLocal === null){
        list.innerHTML = "";
        return;
    }else{
        let listaDeUsuarios = JSON.parse(dadosLocal);

        list.innerHTML = "";

        for(let i = 0; i<listaDeUsuarios.length; i++){
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



//CADASTROOOOOOO
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
    dadosLocal = localStorage.getItem("usuarios");

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
            for(let i = 0; i<listaDeUsuarios.length; i++){
                
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


//LOOOOOGINNNNNNNNN
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
        dadosLocal = localStorage.getItem("usuarios");

        if(dadosLocal === null){

            validaMsgLogin.innerHTML= "Nenhum usuario cadastrado!<br>Cadastre-se";
            validaMsgLogin.style.color = "Red";
            return;

        }else{

            let listaDeUsuarios = JSON.parse(dadosLocal);
            let usuario;
            let validaLogin = false;

            for(let i = 0; i<listaDeUsuarios.length; i++){

                if(name == listaDeUsuarios[i].name && pass == listaDeUsuarios[i].pass){
                    validaLogin = true;
                    usuario = listaDeUsuarios[i];
                    break;
                }
            }

            if(validaLogin == true){

                validaMsgLogin.innerHTML= "Login realizado com sucesso!";
                validaMsgLogin.style.color = "Green";
                localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
                usuarioLogado();
                return;

            }else{

                validaMsgLogin.innerHTML= "Login não realizado! <br>Login ou senha incorretos";
                validaMsgLogin.style.color = "Red";

            }
        }
    }

}

