nome = prompt("Digite seu nome completo")
while(nome == ""){
    nome = prompt("Nome inválido, digite novamente:")

}
alert(nome.toUpperCase());