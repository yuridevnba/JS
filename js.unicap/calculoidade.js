
const inputIdade2=document.getElementById("inputIdade");
const btCalcular2= document.getElementById("btCalcular")
const inputAnoNasc2=document.getElementById("inputAnoNasc")




function Inserir(){

const  idade = parseInt(inputIdade2.value.trim());
const anoNasc= 2022- idade;
inputAnoNasc2.value=anoNasc;

}
btCalcular.onclick= Inserir;
/// n entendi o significado do Inner.
// estudar o significado do parseInt.
// estudar o value.