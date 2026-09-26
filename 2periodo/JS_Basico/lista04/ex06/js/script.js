usuarioVet = [{usuario: "Aquila", senha:"123"}, {usuario:"nome", senha: "senha"}]

localStorage.setItem("usuarioEx06", JSON.stringify(usuarioVet));

const listaUsuarios = JSON.parse(localStorage.getItem("usuarioEx06"));

const lista = document.getElementById("listaUsuarios");
lista.innerHTML = "";
for(let i = 0; i<listaUsuarios.length; i++){
    lista.innerHTML += `<li>Usuario: ${listaUsuarios[i].usuario} Senha: ${listaUsuarios[i].senha}</li> <br>` 
}