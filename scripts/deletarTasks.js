

function deletarTasks(tarefali, tarefas){
    
    let botaoDel = tarefali.querySelector(".delete");

    botaoDel.addEventListener("click", () => {
        tarefali.remove();

        let itens = JSON.parse(localStorage.getItem("Tasks")) || [];
        itens = itens.filter((i) => i !== tarefas);
        localStorage.setItem("Tasks", JSON.stringify(itens))
    })
}

export default deletarTasks;