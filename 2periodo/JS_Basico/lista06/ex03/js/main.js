let nome = prompt("Digite seu nome completo");

while(nome == "" || nome.split(" ").length < 2){
    alert("Digite um nomve válido.")
    nome = prompt("Digite seu nome completo");

}

let i = 14;

document.getElementById("txtNome").style.fontSize = i;
document.getElementById("txtNome").innerHTML = nome;




setInterval(incrementarTexto, 500);

function incrementarTexto(){
    if( i < 40);
    i += 2;
    document.getElementById("txtNome").style.fontSize = i;
    
}