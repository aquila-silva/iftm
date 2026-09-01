const nota1 = document.getElementById("n1");
const nota2 = document.getElementById("n2");
const btn = document.getElementById("btnResultado");


btn.addEventListener("click", exibir);

function exibir(){
    n1 = parseFloat(nota1.value);
    n2 =  parseFloat(nota2.value);
    if(nota1.vale == "" || nota2.value == ""){
        alert("Valor de notas inválido\nCampo vazio.")
    }else{
        if(n1 > 60 || n2 > 60 || n1 < 0 || n2 < 0){
        alert("Valor de notas inválido!\nCada nota deve estar entre 0 e 60\nPor favor digite novamente")
        }else{
            
            if((n1+n2) >= 60)
                alert("Aluno aprovado!\nNota final = " + (n1+n2));
            else{
                reprovado = 60-(n1+n2);
                alert("Aluno reprovado!\nFaltaram = " + reprovado + " pontos")
            }
        }
    }

}