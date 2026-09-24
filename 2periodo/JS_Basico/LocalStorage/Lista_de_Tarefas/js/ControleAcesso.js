
const paginaAtual = window.location.pathname;

redirecionaPagina();

function redirecionaPagina(){

    usuarioLogado = localStorage.getItem("usuarioLogadoLDT");

    if(usuarioLogado === null){

        if(paginaAtual.includes("index.html") || paginaAtual === "/"){
            window.location.href = "login.html";
        }else if(paginaAtual.includes("login.html")){
            return;
        }
        
    }else{
      
            if(paginaAtual.includes("login.html"))
                window.location.href = "index.html";
  
        
    }
   
}