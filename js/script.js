let correctas = [3,2,1,3,1,3];

let opcionesElegidas=[];

let cantidadCorrectas= 0;

function respuesta(numPregunta, seleccionada){
    opcionesElegidas[numPregunta] = seleccionada.value;

    id="capital" + numPregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "azure";
    labels[5].style.backgroundColor = "azure";
    labels[7].style.backgroundColor = "azure";

    seleccionada.parentNode.style.backgroundColor = "green";
}

function corregir(){
    cantidadCorrectas=0;
    for(i=0; i< correctas.length; i++){
        if(correctas[i]== opcionesElegidas[i]){
            cantidadCorrectas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidadCorrectas;
}