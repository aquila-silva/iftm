let texto = prompt("Digite um texto qualquer", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dolore blanditiis esse laboriosam unde ipsa minima in laudantium iusto quaerat eveniet illo tenetur, exercitationem asperiores architecto mollitia cum incidunt quae?");
let letra = prompt("Digite uma letra: ");

if (letra != null){
    while(letra == " " || letra.trim().length > 1)
        letra = prompt("Digite uma letra válida:");

    let textoVet = texto.split(" ");
    let resultado = "";

    for(let i = 0; i < textoVet.length; i++){
        if(textoVet[i].charAt(0) == letra){
            resultado += textoVet[i] + " ";
        }
    }

    document.write(resultado);
}