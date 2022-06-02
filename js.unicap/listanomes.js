
const listas = document.getElementById("listas");
const inputNome = document.getElementById("inputNome");
const btInserir= document.getElementById("btInserir");
//const btCriarLista= document.getElementById("btCriarLista");


function inserir(){
    //const listas = document.getElementById("listas");
   // const inputNome = document.getElementById("inputNome");
const nome= inputNome.value.trim(); 
if(nome){  
    const nodeLi = document.createElement("li");
    const nodeText = document.createTextNode(nome);
    nodeLi.appendChild(nodeText);
    listas.appendChild(nodeLi);
//listas.innerHTML+= `<li>>${nome}<</li>`; 
inputNome.value= " ";// toda vez que for digitado um nome, ele retorna com o inputNome vázio, ou seja, com o input Nome em branco.
}
inputNome.focus();
//console.log(document.location);
//location.assign("https://www.google.com");
//console.log(history)

}

function Limpar(){
    //const listas = document.getElementById("listas");
//const inputNome = document.getElementById("inputNome");
    //const btLimpar=document.getElementById("btLimpar");
   listas.innerHTML=""; // a lista vai receber um valor vazio, ou seja vai limpar td.
    inputNome.value="";
    inputNome.focus();
}
function capturarEnter(event){ // evento do teclado
    if(event.keyCode===13){ // numero 13= botão "Enter"
        btInserir.click();
        //document.getElementById("btInserir").click(); /// apertou e soltou é um click.
    }
}
    function criarLista(){
        listas.innerHTML="";
    for(let i=0;i<=10;i++){
            listas.innerHTML+= `<li>${i}</li>`;
        }
    }
    function inputNomeOnFocus() {
        console.log("Entrou no input nome");
      }
      
      function inputNomeOnBlur(event) {
        console.log("Saiu do input nome");
        if (!inputNome.value) { // saiu e n preencheu nada no input.
          alert("Precisa digitar o nome!");
        }
      }
       function inputNomeOnMouseOver(){ // handleListaMouseOuver
           console.log("on mouse over");
       }
          function inputNomeonMouseEnter(){
              console.log("on mouse Enter");
          }
          function handleInputNomeChange(Event){
              console.log(Event)
              console.log("valor atual=",Event.target.value)
              console.log("onChange");

          }
btInserir.onclick = inserir; // id=btInserir.onclick(html-Js)= inserir (função)
//document.getElementById("btInserir").onclik=inserir; não dá certo se fizer do mesmo jeito que limpa.
document.getElementById("btLimpar").onclick=Limpar;
inputNome.onkeyup=capturarEnter;
inputNome.onfocus = inputNomeOnFocus;  //quando entra no input(campo).
inputNome.onblur = inputNomeOnBlur; // quando sai do input (campo).
listas.onmouseover=inputNomeOnMouseOver;   //pega nos elementos e nos filhos.
listas.onmouseenter=inputNomeonMouseEnter; // pega só em um elemento.
btcriarLista.onclick=criarLista;
inputNome.onchange=handleInputNomeChange;

//onclick="Limpar()" / peguei do html
//onkeyup="capturarEnter(event)"/ peguei do html
//onclick="Inserir()"; / peguei do html

