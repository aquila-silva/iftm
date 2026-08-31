const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");

const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const mult = document.getElementById("mult");
const div = document.getElementById("div");

const resultado = document.getElementById("resultado")

mais.addEventListener("click", function () {op(1)});
menos.addEventListener("click", function () {op(2)});
mult.addEventListener("click", function () {op(3)});
div.addEventListener("click", function () {op(4)});

function op(n){
    if(n1.value == "" || n2.value == ""){
        resultado.value = "Operação inválida";
    }else{
        a = parseFloat(n1.value);
        b = parseFloat(n2.value);
        if(n == 1){
            resultado.value = a+b;
        }else if(n == 2){
            resultado.value = a-b;
        }else if(n == 3){
            resultado.value = a*b;
        }else if(n == 4){
            if(a == 0 || b== 0)
                resultado.value = "Operação inválida";
            else{
                resultado.value = a/b;
            }
        }
    }


}