let nome = prompt("Digite o seu nome:");
let quant = parseInt(prompt("Quantas vezes quer imprimir seu nome?"));
for (let i = 0; i < quant; i++) {
    document.getElementById("nome").innerHTML += nome + "<br>";

}
