import { criaElemento } from "./criarTasks.js";

export default function alterarTasks( tarefas, tarefali){
    
    tarefali.addEventListener("dblclick", () => {
        const att = document.createElement("input");
        att.type = "text";
        att.value = tarefas;
        tarefali.innerHTML = "";
        tarefali.appendChild(att);
        att.classList.add("campo")
        att.select();
        att.addEventListener("blur", () => {
            const attItem = att.value;
            if (!attItem) {
                tarefali.remove();
                return;
            }
            let itens = JSON.parse(localStorage.getItem("Tasks")) || [];
            itens = itens.map((i) => (i === tarefas ? attItem : i));
            localStorage.setItem("Tasks", JSON.stringify(itens))
            criaElemento(attItem)
            tarefali.remove()

            atualizarLista(itens)
        })
    
    })
}

function atualizarLista(itens) {
    const lista = document.querySelector(".lista");
    lista.innerHTML = ""; 

    itens.forEach((tarefa) => {
        criaElemento(tarefa); 
    });
}

