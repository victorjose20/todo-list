 
var botaoAdic = document.querySelector(".caixa-botao");
var form = document.querySelector("form");
var trs = document.querySelector("ul")
var lista =  document.querySelector (".lista")




let itens = JSON.parse(localStorage.getItem("Tasks")) || [];
 itens.forEach((tarefas) => {
    criaElemento(tarefas)
 })


botaoAdic.addEventListener("click",function(event){
    event.preventDefault();

    const tarefas = form.texto.value;

   



    if(!tarefas){
        return
    }
    criaElemento(tarefas)
    itens.push(tarefas);
    localStorage.setItem("Tasks", JSON.stringify(itens))
    
  
    form.reset();

})




function criaElemento(tarefas){
    if(tarefas == "")return

   

    var tarefali = document.createElement("li")
    var del = document.createElement("button")
    var x = document.createElement("p")
    x = document.createTextNode("🗑️")
    del.classList.add("delete")
    tarefali.textContent = tarefas;
    tarefali.classList.add("tarefas")
    trs.appendChild(tarefali)

    tarefali.appendChild(del)
    

    del.appendChild(x)
   

    tarefali.querySelector(".delete").addEventListener("click", () =>{
        tarefali.remove();
        itens = itens.filter((i) => i!== tarefas);
        localStorage.setItem("Tasks", JSON.stringify(itens))
    })
    lista.addEventListener("dblclick", () =>{
        const att = document.createElement("input");
        att.type = "text";
        att.value = tarefas;
        tarefali.innerHTML = "";
        tarefali.appendChild(att);
        att.classList.add("campo")
        att.select();
        att.addEventListener("blur", () =>{
            const attItem = att.value;
            if(!attItem){
                tarefali.remove();
                return;
            }
            itens = itens.map((i) => (i === tarefas ? attItem : i));
            localStorage.setItem("Tasks", JSON.stringify(itens))
            criaElemento(attItem)
            tarefali.remove()
    })
       
    })
}






  
