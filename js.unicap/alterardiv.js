let salvarDiv;
function alterarTítulo(){
 const elemTitulo= document.getElementById("título");
 elemTitulo.innerText=" Novo título!!!";

}
function alterarDiv(){
    const elemDiv= document.getElementById("minhadiv");
    salvarDiv= elemDiv.innerHTML; // recebe o elemento q recebe o get q manipula o id, ou seja salva tudo do id no salvar div.
    elemDiv.innerText=" Novo valor da minha div !!!";
}



function RestaurarDiv(){
    if(salvarDiv){ // se tiver algo em salvardiv
    const elemDiv= document.getElementById("minhadiv");
    elemDiv.innerHTML=salvarDiv;
    }else{
    alert("Nada a restaurar")
    
}
}
