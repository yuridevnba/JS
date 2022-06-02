let numeros=[];
//input
const Inputnum =document.getElementById("num");
const inputnum2=document.getElementById("num2");
// butões
const indice=document.getElementById("indice");
const limparvetor=document.getElementById("limparvetor");
const btinicio  =document.getElementById("btinicio");
const btfim =document.getElementById("btfim");
const btlimpar =document.getElementById("btlimpar");
//lista
const lista =document.getElementById("lista");

function exibirLista(){
lista.innerHTML=" ";
//for(let i=0;i<numeros.length;i++){
    lista.innerHTML+=`<li>${numeros[i]}</li>`; // `<li>>${nome}<</li>`;
}
}
function inserirInicio(){
 const numero=parseInt(Inputnum.value);
 if(!isNaN(numero)){//para verificar se uma determinada string é um número ou não.
numeros.unshift(numero);//O método unshift() adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
Inputnum.value="";
 Inputnum.focus();
exibirLista();
 }else{
     alert("isso não é um número")

 }
}
function inserirFim(){
    const numero=parseInt(Inputnum.value);
    if(isNaN(numero)){
        numeros.push(numero);
        exibirLista();
        Inputnum.value="";
       Inputnum.focus();
    }else{
    alert("isso não é um número")
    }
   
}
function Limpar(){
    
   lista.innerHTML=""; // a lista vai receber um valor vazio, ou seja vai limpar td.
    Inputnum.value="";
    Inputnum.focus();
}
btinicio.onclick=inserirInicio;
btfim.onclick=inserirFim;
btlimpar.onclick=Limpar;
