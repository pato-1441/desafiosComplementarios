//
//
//
//
/*
Ejercicio con While

let confirma = confirm("¿Quiere imprimir el triangulo?");
let triangulo = "#";
let contador = "1";

if(confirma){
    while(contador<=7){
        console.log(triangulo);
        triangulo= triangulo + "#";
        contador++;
    }
} else{
    alert("Ha ocurrido un error inesperado. Intente de nuevo aceptando la operacion.");
} 

*/

//Ejercicio con For

let contador = prompt("Digite un numero entre 1 y 20 por favor.");
let triangulo = "#";

for(let i = 0; i<contador; i++){
    console.log(triangulo);
    triangulo = triangulo + "#";
}