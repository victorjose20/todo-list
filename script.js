import { criaElemento } from "./scripts/criarTasks.js";
import deletarTasks from "./scripts/deletarTasks.js";
var botaoAdic = document.querySelector(".caixa-botao");
var form = document.querySelector("form");





let itens = JSON.parse(localStorage.getItem("Tasks")) || [];
itens.forEach((tarefas) => {
    criaElemento(tarefas)
})


botaoAdic.addEventListener("click", function (event) {
    event.preventDefault();

    const tarefas = form.texto.value;

    if (!tarefas) {
        return
    }
    criaElemento(tarefas)
    itens.push(tarefas);
    localStorage.setItem("Tasks", JSON.stringify(itens))

    
    form.reset();

    
    
})

















