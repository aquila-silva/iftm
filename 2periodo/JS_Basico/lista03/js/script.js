const body = document.getElementById("body");
const link = document.getElementById("link");


link.addEventListener("mouseenter", roxo)
link.addEventListener("mouseout", azul)

body.style.backgroundColor = "rgba(32, 44, 83, 0.99)";

function roxo(){
    body.style.backgroundColor = "rgba(45, 0, 75, 0.99)"; 
}

function azul(){
    body.style.backgroundColor = "rgba(32, 44, 83, 0.99)"; 
}
