import validarEntrada from "./modules/validarEntrada.js";

document.getElementById("btnValidaData").addEventListener("click", function(){
    validarEntrada.validaData("Data", "txtRetorno1");
});