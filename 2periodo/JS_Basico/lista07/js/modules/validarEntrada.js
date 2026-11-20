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

    const padrao = /^[Mm][Tt]\-\d{2}\.\d{3}\-[Ii][Ff][Tt][Mm]$/;
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

    const padrao = /^(MT)\-\d{2}\.\d{3}\-([Ii][Ff][Tt][Mm])$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Código válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: MT-xx.xxx-iftm";
        retorno.style.color = "Red";
    } 

}

function validaDisciplina3(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^[Mm]\s?[Tt]\-\d{2}\.\d{3}\-[Ii]\s?[Ff]\s?[Tt]\s?[Mm]$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Código válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "inválido! formato esperado: M T-xx.xxx-i f t m";
        retorno.style.color = "Red";
    } 

}


function validaCampus(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^IFTM campus Uberlândia( Centro)?$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Campus válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Campus inválido! formato esperado: IFTM campus Uberlândia ou IFTM campus Uberlândia Centro";
        retorno.style.color = "Red";
    } 

}


function validaTelefone1(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^\+\d{2}\(\d{2}\)\d{5}\-\d{4}$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Telefone válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Telefone inválido! formato esperado: +yy(xx)xxxxx-xxxx";
        retorno.style.color = "Red";
    } 

}


function validaTelefone2(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^\(\d{2,3}\)\s?\d{4,5}\-\d{4}$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Telefone válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Telefone inválido! formato esperado: (xx) yyyyy-wwww";
        retorno.style.color = "Red";
    } 

}


function validaAltura(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^(1[.,](3\d?|[4-9]\d?)|2[.,]([0-4]\d?|50?))$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Altura válida!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Altura inválida! intervalo permitido: 1,3 a 2,5 (ou 1.3 a 2.5)";
        retorno.style.color = "Red";
    } 
}

function validaFaturamento(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^R\$\d{1,3}(\.\d{3}){0,3},\d{1,2}$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Faturamento válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Faturamento inválido! formato esperado: R$0,00 até R$999.999.999.999,99";
        retorno.style.color = "Red";
    } 

}


function validaCronometro(elementoEntrada, elementoRetorno){
    
    let entrada = document.getElementById(elementoEntrada);
    let retorno = document.getElementById(elementoRetorno);

    const padrao = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;
    if(padrao.test(entrada.value)){
        retorno.innerHTML = "Tempo válido!";
        retorno.style.color = "Green";
    }else{
        retorno.innerHTML = "Tempo inválido! formato esperado: HH:MM:SS:CC (00:00:00:00 a 23:59:59:99)";
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