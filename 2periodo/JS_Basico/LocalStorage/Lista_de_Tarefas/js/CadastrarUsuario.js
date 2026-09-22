const userName = document.getElementById("usuarioCadastro");
const userPass = document.getElementById("senhaCadastro");
const txtCadastro = document.getElementById("txtCadastro")

const btnCadastrar = document.getElementById("btnCadastro");

btnCadastrar.addEventListener("click", cadastrarUsuario);


function cadastrarUsuario(){
    newUser = userName.value;
    newPass = userPass.value;

    

    if(newUser == "" || newPass == ""){
        txtCadastro.style.color = "Red";
        txtCadastro.innerHTML = "Cadastro Inválido<br>Preencha Todos os Campos"
        return;
    }else{
        cadastrosLocal = localStorage.getItem("usuariosLDT");

        if(cadastrosLocal === null){

            cadastrosLocal = [];

            novoCadastro = {name: newUser, pass: newPass};
            cadastrosLocal.push(novoCadastro);

            localStorage.setItem("usuariosLDT", JSON.stringify(cadastrosLocal));
            
            txtCadastro.innerHTML ="Cadastro Realizado com Sucesso";
            txtCadastro.style.color = "Lightgreen";

            return;

        }else{
            cadastrosLocal = JSON.parse(localStorage.getItem("usuariosLDT"));
            
            duplicado = false;

            for(let i = 0; i<cadastrosLocal.length; i++){
                if(cadastrosLocal[i].name == newUser){
                    
                    duplicado = true;
                }
            }
            if(duplicado == true){
                txtCadastro.innerHTML = "Cadastro Inválido!<br>Usuario já cadastrado"
                txtCadastro.style.color = "Red"
                return;
            }else{
                
                novoCadastro = {name: newUser, pass: newPass};
                cadastrosLocal.push(novoCadastro);

                localStorage.setItem("usuariosLDT", JSON.stringify(cadastrosLocal));
                txtCadastro.innerHTML ="Cadastro Realizado com Sucesso";
                txtCadastro.style.color = "Lightgreen";
            }
            
        }
    }
}
