import deletarTasks from "./deletarTasks.js";
import alterarTasks from "./alterarTasks.js";

var trs = document.querySelector("ul")

export function criaElemento(tarefas, tarefali) {
    if (tarefas == "") return



    var tarefali = document.createElement("li");
    var del = document.createElement("button");
    var x = document.createElement("p");
    x = document.createTextNode("🗑️");
    del.classList.add("delete");
    tarefali.textContent = tarefas;
    tarefali.classList.add("tarefas");
    trs.appendChild(tarefali);

    tarefali.appendChild(del);


    del.appendChild(x);

    alterarTasks(tarefas,tarefali);
    deletarTasks(tarefali,tarefas);
}
