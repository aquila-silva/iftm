const btnLimpar = document.getElementById("btnLimpar");

btnLimpar.addEventListener("click", limparTarefas);

function limparTarefas(){
    if(confirm("Tem certeza que deseja apagar todas as suas tarefas?")){
        tarefasTotal = JSON.parse(localStorage.getItem("listaDeTarefas"))
        usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"))
        tarefasFiltradas = [];
        for(let i = 0; i<tarefasTotal; i++){
            if(tarefasTotal[i].usuario != usuarioAtual.name){
                tarefasFiltradas.push(tarefasTotal[i]);
            }
        }
        alert("Todas as tarefas foram apagadas!")
        localStorage.setItem("listaDeTarefas", JSON.stringify(tarefasFiltradas));
        atualizaLista();
    }
}
function btnExcluirTarefas(){

    tarefasTotal = JSON.parse(localStorage.getItem("listaDeTarefas"))
        usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"))
        tarefasFiltradas = [];
        for(let i = 0; i<tarefasTotal; i++){
            if(tarefasTotal[i].usuario != usuarioAtual.name){
                tarefasFiltradas.push(tarefasTotal[i]);
            }
        }
        localStorage.setItem("listaDeTarefas", JSON.stringify(tarefasFiltradas));
        atualizaLista();

}