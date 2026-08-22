let texto = prompt("Digite um texto qualquer", "Abacate bola carro dado amor bala café dedo");

if (texto != null) {
    let textoVet = texto.split(" ");
    let resultado = "";

    
    for (let i = 97; i <= 122; i++) {
        let letraAtual = String.fromCharCode(i);
        
        for (let j = 0; j < textoVet.length; j++) {
            if (textoVet[j].charAt(0).toLowerCase() == letraAtual) {
                resultado += textoVet[j] + " ";
            }
        }
    }

    document.write(resultado);
}