const body = document.getElementById("body");

const link1 = document.getElementById("ex1");
const link2 = document.getElementById("ex2");
const link3 = document.getElementById("ex3");
const link4 = document.getElementById("ex4");
const link5 = document.getElementById("ex5");
const link6 = document.getElementById("ex6");
const link7 = document.getElementById("ex7");


link1.addEventListener("mouseenter", function (){mudaCor(1)});
link2.addEventListener("mouseenter", function (){mudaCor(2)});
link3.addEventListener("mouseenter", function (){mudaCor(3)});
link4.addEventListener("mouseenter", function (){mudaCor(4)});
link5.addEventListener("mouseenter", function (){mudaCor(5)});
link6.addEventListener("mouseenter", function (){mudaCor(6)});
link7.addEventListener("mouseenter", function (){mudaCor(7)});


function mudaCor(cont){

    if(cont == 1){
       
        vermelho();

    }else if(cont == 2){

        roxo();

    }else if(cont == 3){

        azul();

    }else if(cont == 4){

        verde(); 

    }else if(cont == 5){
        
        amarelo();

    }else if(cont == 6){

        lilas();

    }else if(cont == 7){

        cinza();
        
    }

}

function vermelho(){
    body.style.backgroundColor = "rgba(66, 0, 0, 0.99)"; 
}

function roxo(){
    body.style.backgroundColor = "rgba(41, 0, 75, 0.99)"; 
}

function azul(){

    body.style.backgroundColor = "rgba(0, 28, 70, 0.99)"; 
}
function verde(){

    body.style.backgroundColor = "rgba(0, 56, 3, 0.99)";
}
function amarelo(){
    body.style.backgroundColor = "rgb(68, 44, 0)";
}
function lilas(){
    body.style.backgroundColor = "rgba(73, 0, 73, 0.99)";
}
function cinza(){
    body.style.backgroundColor = "rgba(22, 21, 31, 0.99)";
}
