const tafVazia = document.getElementById("tafVazia");
const tafCadastrada = document.getElementById("tafCadastrada");
const listaTAF = document.getElementById("listaTAF");

atualizaLista();

function atualizaLista(){

        listaGeral = JSON.parse(localStorage.getItem("listaDeTarefas"));
        usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"));
        listaFiltrada = [];

        for(let i = 0; i<listaGeral.length; i++){
            if(listaGeral[i].usuario == usuarioAtual.name){
                listaFiltrada.push(listaGeral[i]);
            }
        }

    if(listaFiltrada.length === 0){
        tafVazia.style.display = "block";
        tafCadastrada.style.display = "none";
        return;
    }else{
        tafCadastrada.style.display = "flex";
        tafVazia.style.display = "none";

        listaTAF.innerHTML = "";
        
        for(let i = 0; i<listaFiltrada.length; i++){
            if(listaFiltrada[i].propriedade == "Alta")
                listaTAF.innerHTML += `<li><b>Tarefa:</b> ${listaFiltrada[i].nome} <b>Prazo: </b> ${listaFiltrada[i].prazo} <b>Prioridade: </b> ${listaFiltrada[i].prioridade}</li>`
        }
        for(let i = 0; i<listaFiltrada.length; i++){
            if(listaFiltrada[i].propriedade == "Moderada")
                listaTAF.innerHTML += `<li><b>Tarefa:</b> ${listaFiltrada[i].nome} <b>Prazo: </b> ${listaFiltrada[i].prazo} <b>Prioridade: </b> ${listaFiltrada[i].prioridade}</li>`
        }
        for(let i = 0; i<listaFiltrada.length; i++){
            if(listaFiltrada[i].propriedade == "Baixa")
                listaTAF.innerHTML += `<li><b>Tarefa:</b> ${listaFiltrada[i].nome} <b>Prazo: </b> ${listaFiltrada[i].prazo} <b>Prioridade: </b> ${listaFiltrada[i].prioridade}</li>`
        }

    }
}