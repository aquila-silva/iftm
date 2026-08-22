let texto = prompt("Digite um texto Qualquer", "Um texto com varias palavras escritas se torna um texto verboso como um dicionario");
let letra = prompt("Digite uma letra:");
let sub = prompt("Digite a letra a ser substituída no texto:");

let vetTexto = texto.split(" ");
let cont = 0;

for(let i = 0; i < vetTexto.length; i++){
    if (vetTexto[i].charAt(0) == sub.toUpperCase()) {
        let letras = vetTexto[i].split('');
        letras[0] = letra.toUpperCase(); 
        letras = letras.join(''); 
        vetTexto[i] = letras;  
        cont++;
    } else if(vetTexto[i].charAt(0) == sub.toLowerCase()) {
        let letras = vetTexto[i].split('');
        letras[0] = letra.toLowerCase();
        letras = letras.join(''); 
        vetTexto[i] = letras;  
        cont++;   
    }
}

alert(vetTexto.join(" ")); 