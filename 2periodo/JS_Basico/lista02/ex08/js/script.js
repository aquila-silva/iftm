let texto = prompt("Digite um texto qualquer", "amor aranha bola bexiga carro caminhão pastel");

if (texto != null) {
    let textoVet = texto.split(" ");

    
    for (let i = 97; i <= 122; i++) {
        let letraAtual = String.fromCharCode(i);
        let palavrasDaLetra = "";

        
        for (let j = 0; j < textoVet.length; j++) {
            if (textoVet[j].charAt(0).toLowerCase() == letraAtual) {
                palavrasDaLetra += `<li>${textoVet[j]}</li>`;
            }
        }

        
        if (palavrasDaLetra != "") {
            document.write(`<p>Palavras iniciadas com a letra ${letraAtual}:</p>`);
            document.write(`<ul>${palavrasDaLetra}</ul>`);
        }
    }
}