//Accediendo a la etiqueta con encabezado1

let btnMostar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let lista =document.getElementByTagName("ul");
let elementos = document.getElementByClassName("list-group.item");

let otroElemento = document.querySelector("ul>li");

let otroElemento = document.querySelectorAll("ul>li");

console.log(otrosElementos.length);

console.log("otroElemento",otroElemento);  //primero



console.log(listas.length);//2
console.log(listas.item(1));

console.log(elementos.item(2));
console.log(elementos.length);

let contador=0;
function modifica() {
    //encabezado1.innerHTML = "Ejercicio DOM";
    encabezado1.innerHTML = "<em>Ejercicio<em> DOM";
    encabezado1.innerText = ++contador;
}

//console.log(encabezado1.innerText);

btnMostrar.addEventListener(click,function(event){
    event.preventDefault();
    console.log("botón btnModificar presionado");
});