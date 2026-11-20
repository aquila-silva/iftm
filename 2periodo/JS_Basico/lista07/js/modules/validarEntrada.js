

function validaData(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^([0-2]\d|3[0-1])\/(0\d|1[0-2])\/(19\d\d|20[0-1]\d|202[0-6]|9\d|0\d|1\d|2[0-6])$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Data válida!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Data inválida! formato esperado: DD/MM/AAAA";
        retorno.style.color = "Red";
    } 

}

function validaCPF(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "CPF válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "CPF inválido! formato esperado: xxx.xxx.xxx-xx";
        retorno.style.color = "Red";
    } 

}

function validaMatricula(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Matricula válida!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Matricula inválida! formato esperado: IFTM-000/000-xx";
        retorno.style.color = "Red";
    } 

}

function validaDisciplina1(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^[Mm][Tt]-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Código válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: MT-xx.xxx-IFTM";
        retorno.style.color = "Red";
    } 

}

function validaDisciplina2(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}

function validaDisciplina3(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^M\s?T{2}-\d{2}\.\d{3}-I\s?F\s?T\s?M$i/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}

function validaCampus(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}

function validaTelefone1(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}

function validaTelefone2(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}

function validaAltura(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}

function validaFaturamento(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}

function validaCronometro(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = " válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: ";
        retorno.style.color = "Red";
    } 

}
export default{
    validaData,
    validaCPF,
    validaMatricula,
    validaDisciplina1,
    validaDisciplina2,
    validaDisciplina3,
    validaCampus,
    validaTelefone1,
    validaTelefone2,
    validaAltura,
    validaFaturamento,
    validaCronometro

}
