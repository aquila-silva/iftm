nomeCompleto = prompt("Digite seu nome completo")
if (nomeCompleto != null){
    while(nomeCompleto == " ")
        nomeCompleto = prompt("Nome inválido, digite novamente")   
    
    let iniciais = "";
    
    vetNome = nomeCompleto.split(" ")

    for(i = 0; i<vetNome.length; i++)

        if(vetNome[i].length > 2)
        iniciais += vetNome[i].charAt(0)

    alert(iniciais)
    document.write(`As iniciais do texto são: ${iniciais.toUpperCase()}`)
}