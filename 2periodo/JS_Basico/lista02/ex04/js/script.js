nomeCompleto = prompt("Digite seu nome completo: ", "Aquila Fernando Alves Silva")
if(nomeCompleto != null){
    while(nomeCompleto == ""){
        nomeCompleto = prompt("Nome inválido, digite novamente: ", "Aquila Fernando Alves Silva")
    }

    nomeCompleto = nomeCompleto.toLowerCase();
    nomeVet = nomeCompleto.split(" ");
    nomeVet[0] = nomeVet[0].toUpperCase();
    nomeCompleto = nomeVet.join(' ');
    alert(nomeCompleto);

}

