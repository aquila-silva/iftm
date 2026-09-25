const nomeTAF = document.getElementById("nomeTAF");
const prazoTAF = document.getElementById("prazo");
const prioridadeTAF = document.getElementById("prioridade");
const btnCadastrarTAF = document.getElementById("BtnCadastrarTAF");

const txtConCadastro = document.getElementById("txtConCadastro");

btnCadastrarTAF.addEventListener("click", cadastroTarefa);

function cadastroTarefa(){

    nomeV = nomeTAF.value;
    prazoV = prazoTAF.value;
    prioridadeV = prioridadeTAF.value;

    if(nomeV == "" || prazoV == "" || prioridadeV == ""){
        txtConCadastro.innerHTML = "Cadastro Invalido!<br>Preencha todos os campos"
        txtConCadastro.style.color = "Red";
        txtConCadastro.style.fontSize = "12px";
        return;
    }else{
        tarefasCadastradas = localStorage.getItem("listaDeTarefas");
        if(tarefasCadastradas === null){
            tarefasCadastradas = [];
        }else{
            tarefasCadastradas = JSON.parse(localStorage.getItem("listaDeTarefas"));
        }

        usuarioAtual = JSON.parse(localStorage.getItem("usuarioLogadoLDT"));

        tarefaAtual = {nome: nomeV, prazo: prazoV, prioridade: prioridadeV, usuario: usuarioAtual.name};

        tarefasCadastradas.push(tarefaAtual);

        localStorage.setItem("listaDeTarefas", JSON.stringify(tarefasCadastradas));

        txtConCadastro.innerHTML = "Tarefa cadastrada Com sucesso"
        txtConCadastro.style.color = "Green";
        txtConCadastro.style.fontSize = "12px";

        atualizaLista();
        
    }

}