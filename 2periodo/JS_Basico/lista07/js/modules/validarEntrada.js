

function validaData(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^[0-3]\d\/(0\d|1[0-2])\/(19\d\d|20[0-1]\d|202[0-6]|9\d|0\d|1\d|2[0-6])$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Data válida!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Data inválida";
        retorno.style.color = "Red";
    } 

}

export default{
    validaData
}
