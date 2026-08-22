let texto = prompt("Digite um texto ou palavra:", "arara");

if (texto != null) {
    
    let textoLimpo = texto.toLowerCase().split(" ").join("");
    
   
    let textoInvertido = textoLimpo.split("").reverse().join("");

    if (textoLimpo === textoInvertido && textoLimpo !== "") {
        alert("O texto informado É um palíndromo!");
    } else {
        alert("O texto informado NÃO é um palíndromo.");
    }
}