const cadastroForm = document.getElementById("cadastroForm");
const loginForm = document.getElementById("loginForm");

const h3Login = document.getElementById("hLogin");
const h3Cadastro = document.getElementById("hCadastro");

exibeform(2)

h3Cadastro.addEventListener("click", () => { 
    exibeform(1)
})

h3Login.addEventListener("click", () => { 
    exibeform(2)
})

function exibeform(n){

    if(n == 1){
        cadastroForm.style.display = "flex";
        loginForm.style.display = "none";

    }else{
        cadastroForm.style.display = "none";
        loginForm.style.display = "flex";
    }
    
}