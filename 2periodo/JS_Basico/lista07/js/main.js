import validarEntrada from "./modules/validarEntrada.js";

document.getElementById("btnValidaData").addEventListener("click", function(){
    validarEntrada.validaData("data", "txtRetorno1");
});

document.getElementById("btnValidaCPF").addEventListener("click", function(){
    validarEntrada.validaCPF("CPF", "txtRetorno2");
});

document.getElementById("btnValidarMatricula").addEventListener("click", function(){
    validarEntrada.validaMatricula("matricula", "txtRetorno3");
});

document.getElementById("btnValidaDisc1").addEventListener("click", function(){
    validarEntrada.validaDisciplina1("disciplina1", "txtRetorno4");
});

document.getElementById("btnValidaDisc2").addEventListener("click", function(){
    validarEntrada.validaDisciplina2("disciplina2", "txtRetorno5");
});

document.getElementById("btnValidaDisc3").addEventListener("click", function(){
    validarEntrada.validaDisciplina3("disciplina3", "txtRetorno6");
});

document.getElementById("btnValidaCampus").addEventListener("click", function(){
    validarEntrada.validaCampus("campus", "txtRetorno7");
});

document.getElementById("btnValidaTel1").addEventListener("click", function(){
    validarEntrada.validaTelefone1("telefone1", "txtRetorno8");
});

document.getElementById("btnValidaTel2").addEventListener("click", function(){
    validarEntrada.validaTelefone2("telefone2", "txtRetorno9");
});

document.getElementById("btnValidaAltura").addEventListener("click", function(){
    validarEntrada.validaAltura("altura", "txtRetorno10");
});

document.getElementById("btnValidaFaturamento").addEventListener("click", function(){
    validarEntrada.validaFaturamento("faturamento", "txtRetorno11");
});

document.getElementById("btnValidaCronometro").addEventListener("click", function(){
    validarEntrada.validaCronometro("cronometro", "txtRetorno12");
});