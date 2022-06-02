const input = document.getElementById("input");
const input2 = document.getElementById("input-2");
//Botões
const buttonEnd = document.getElementById("btn");
const buttonStart = document.getElementById("btn-2");
const buttonClean = document.getElementById("btn-3");
const showList = document.getElementById("btn-5");
const deleteIndex = document.getElementById("btn-4");
const list = document.getElementById("lista");

let array = [];

function InsertStart(){
    let value = parseInt(input.value);
    if(value){
        array.unshift(value);
        input.value = "";
        input.focus();
        List();
        
    }else{
        alert("Digite um Número!")
    }
}

function InsertEnd(){
    let value = parseInt(input.value);
    if(value){ 
        array.push(value);
        input.value = "";
        input.focus()
        List();
    }else{
        alert("Digite um Número!")
    }
}

function Clean(){
    array = [];
    input.value = "";
    List();
}

function List(){
    list.innerText = '';
    array.forEach(n=>{
        item = document.createElement('li')
        item.textContent = n
        list.appendChild(item)
      })
}

function DeleteIndex(){
    let valueIndex = parseInt(input2.value);

    if(array[valueIndex]){
        array.splice(valueIndex,1);
        input2.value = "";
        input2.focus();
        List();
    }else{
        alert("Digite um Indice válido");
        input2.value = "";
    }
}

buttonEnd.onclick = InsertEnd;
buttonStart.onclick = InsertStart;
buttonClean.onclick = Clean;
deleteIndex.onclick = DeleteIndex;