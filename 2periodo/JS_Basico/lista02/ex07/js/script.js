texto = prompt("Digite um texto qualquer", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolore blanditiis esse laboriosam unde ipsa minima in laudantium iusto quaerat eveniet illo tenetur, exercitationem asperiores architecto mollitia cum incidunt quae?")
letra = prompt("Digite uma letra: ")

if (letra != null){
    while(letra == " " || letra.length.trim() > 1)
        letra = prompt("Digite uma letra válida:") 

    textoVet = texto.split(" ");
    document.write(`<p>As palavras que começam com a letra: "${letra}" no texto são:</p> <br>`)

    for(i = 0; i<textoVet.length; i++){
        
        if(textoVet[i].charAt(0) == letra)
            document.write(`<p>"${textoVet[i]}"</p><br>`)

    }
}

