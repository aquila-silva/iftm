nome = prompt("Digite seu nome completo").trim();

if(nome != null){
    while(nome == ""){
        nome = prompt("Nome inválido! Digite novamente:").trim();
    }

    document.write(`<h2>${nome} (seu nome possui ${nome.length} letras)</h2>`);

}