import carros from "./carro.js";

let i = 0;
let timerSlide;

function exibirCarro(i) {
    document.getElementById("imgCarro").src = carros[i].src;
    document.getElementById("nome").innerHTML = carros[i].nome;
    document.getElementById("potencia").innerHTML = carros[i].potencia;
}

function atualizarCarro(){
    if(i >= carros.length) 
        i = 0;
    else {
        i++;
        exibirCarro(i);
    }
}

function main(){

    exibirCarro(0);
    timerSlide = setInterval(atualizarCarro, 1000);
    document.getElementById("imgCarro").addEventListener("mouseout", function(){
        timerSlide = setInterval(atualizarCarro, 1000);
    })

    document.getElementById("imgCarro").addEventListener("mouseenter", function(){
        clearInterval(timerSlide);
    })


}


main();