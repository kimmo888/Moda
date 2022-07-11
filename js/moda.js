let lista1 = [];// array donde se guardan los datos
// let lista1 = [
//     1, 2, 3, 5, 6, 2, 3, 2, 2, 1, 6, 7, 8, 9, 0, 2, 6, 5, 8, 9, 1, 0, 5, 6, 4, 2,
//     3, 8, 9, 7,
// ];


let moda =0;// el que tiene el resultado
// function que calcula la moda
function ordenarCalcularModa(lista){
    let lista1Count = {};
    lista.map((elemento)=>lista1Count[elemento]?lista1Count[elemento] += 1 : lista1Count[elemento] = 1);
    const lista1Array = Object.entries(lista1Count).sort((elementoA,elementoB)=>elementoA[1] - elementoB[1]);
    moda =lista1Array[lista1Array.length - 1];
}
//% esta function captura los datos en el array-----------------
function pushArray(){
    const datosArray = document.getElementById("InputArray").value;

    const convertirValor = parseInt(datosArray);
    lista1.push(convertirValor);
    console.log(lista1);
}
//function que llama el botón para llamar e la function de moda e ingresa el resultado en el html
function calcularModa(){
    ordenarCalcularModa(lista1);
    const resultadoModa = document.getElementById("modaCalculado");
    resultadoModa.innerText = "La moda de los valores es : " + moda[0] + ", y se repite: " +moda[1];
}

//=-------------------------------------------------------------
//? estructura de la clase-----------------------------------
// const lista1 = [1,2,3,1,2,3,4,2,2,2,1,];

// const lista1Count = {};

// lista1.map(function (elemento){
//     if (lista1Count[elemento]){
//         lista1Count[elemento] += 1;
//     }else{
//         lista1Count[elemento] = 1;
//     }
// });
// const lista1Array = Object.entries(lista1Count).sort(
//     function (elementoA, elementoB) {
//     return elementoA[1] - elementoB[1];
//     }
// );
// const moda1 = lista1Array[lista1Array.length - 1];
//?const lista1Array = Object.entries(lista1Count).sort((elementoA,elementoB)=>elementoA[1] - elementoB[1]);
//?-------------------------------------------------------------


//=----------------------------------------------------------------

const lista = [1,2,3,1,2,3,4,2,2,2,1,].sort();

let objetoModa = [];
let contador = 1;
let omc =0;
// mapeo en java--------------------------------------------
// Map map = new HashMap<Int16Array, int>();
// for (int i = 0; i < lista.length; i++) {
//     if (map.get(lista[i]) == null) {
//         map.put(lista[i], 1);
//     } else {
//         valor = map.get(lista[i]) + 1;
//         map.put(lista[i], valor)
//     }
// }

for (let i = 0; i < lista.length; i++){
    if (lista[i+1] === lista[i]){
        contador++;
    }else{
        objetoModa.push({numero: 0,cantidadVeces: 0});
        objetoModa[omc].numero= lista[i];
        objetoModa[omc].cantidadVeces= contador;
        contador =1;
        omc++;
    }
}

function pushArray(){
    const datosArray = document.getElementById("InputArray").value;

    const convertirValor = parseInt(datosArray);
    lista1.push(convertirValor);
    console.log(lista1);
    document.getElementById("InputArray").value = ""; //para que los valores de los inputs se borren
    document.getElementById("table").innerHTML += '<tbody><td>'+ convertirValor ;
}
function submitForm(event){
    event.preventDefault();
}