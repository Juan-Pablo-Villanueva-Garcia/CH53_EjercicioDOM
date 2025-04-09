//Accediendo a la etiqueta con encabezado1

let btnMostar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let lista =document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");

let primerElemento = document.querySelector("ul>li");

let todosLosElementos = document.querySelectorAll("ul>li");

console.log("todosLosElementos",todosLosElementos.length);

console.log("primerElemento",primerElemento);  //primero



console.log(lista.length);//2
console.log(lista.item(1));

console.log(elementos.item(2));
console.log(elementos.length);

let contador=0;
function modifica() {
    //encabezado1.innerHTML = "Ejercicio DOM";
    encabezado1.innerHTML = "<em>Ejercicio<em> DOM";
    encabezado1.innerText = ++contador;
}

//console.log(encabezado1.innerText);

btnMostrar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("botón btnModificar presionado");
});