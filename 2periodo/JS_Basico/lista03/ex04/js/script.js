const nota1 = document.getElementById("n1");
const nota2 = document.getElementById("n2");
const btn = document.getElementById("btnResultado");


btn.addEventListener("click", exibir);

function exibir(){
    n1 = parseFloat(nota1.value);
    n2 =  parseFloat(nota2.value);

    if((n1+n2) >= 60){
        alert("Aluno aprovado!");
    }else{
        alert("Aluno reprovado!");
    }
}