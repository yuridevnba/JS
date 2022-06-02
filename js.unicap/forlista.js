
let numero=parseInt(prompt("Digite um número 1 a 20")); //prompt recebe string, por isso o parseInt.
//let listas=document.getElementById("lista")
while(isNaN(numero<1||numero>20)){ // (isNaN) serve para identifica se o parâmetro são n númericos.
   ////prompt("Digite um número de 1 a 20");// iria ficar se repetindo pra sempre, pois o número que será digitado n iria ser salvo em uma variável.
    numero=parseInt(prompt("Digite um número 1 a 20"));
}


const listas=document.getElementById("listas");
 for(let i=1;i<=numero;i++){
     listas.innerHTML+=`<li>${i}</li>`; //`<li>>${nome}<</li>`; n declarei a variável nome, tinha que trocar pela variável "i".
     

 }
    




