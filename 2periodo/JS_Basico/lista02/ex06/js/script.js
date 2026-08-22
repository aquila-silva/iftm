texto = prompt("Digite um texto qualquer: ")

vetTexto = texto.split(" ")
primeira = vetTexto[0] 
ultima = vetTexto[vetTexto.length - 1]

document.write(`<p>A primeira palavra é: "${primeira}" e a ultima é: "${ultima}". <br>Juntas ficaram: ${primeira} ${ultima}</p> `)