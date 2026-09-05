vetVotos = [0, 0, 0, 0];

document.getElementById("votoCand1").innerHTML = vetVotos[0];
document.getElementById("votoCand2").innerHTML = vetVotos[1];
document.getElementById("votoCand2").innerHTML = vetVotos[2];
document.getElementById("votoCand2").innerHTML = vetVotos[3];


document.getElementById("incrementar1").addEventListener("click", function () 
{incrementarVoto(1)}
);

document.getElementById("incrementar2").addEventListener("click", function () 
{incrementarVoto(2)}
);

document.getElementById("incrementar3").addEventListener("click", function () 
{incrementarVoto(3)}
);

document.getElementById("incrementar4").addEventListener("click", function () 
{incrementarVoto(4)}
);

function incrementarVoto(candidato){
    vetVotos[candidato-1]++; 
    document.getElementById("votoCand"+candidato).innerHTML = vetVotos[candidato-1];
}

document.getElementById("limpar2").addEventListener("click", limparCampos);

function limparCampos(){
    // console.log("oi");
    for(i = 0; i < vetVotos.length; i++){
        vetVotos[i] = 0;
        document.getElementById("votoCand"+(i+1)).innerHTML = vetVotos[i];
    }
}
