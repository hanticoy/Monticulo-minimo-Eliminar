
function genMonticuloMinimo(Arreglo, valor) {

    //Comprueba si el array está vacío y que nunca se ha colocado nada en el índice 0.   
    if (Arreglo.length == 0) { Arreglo.push(undefined); }

    //Empuja el valor nuevo en el array.
    Arreglo.push(valor)

    let indice = Arreglo.length - 1;
    let indicepadre = Math.trunc(indice / 2);

    while (Arreglo[indicepadre] > Arreglo[indice]) {
        Arreglo[indice] = Arreglo[indicepadre];
        Arreglo[indicepadre] = valor;
        indice = indicepadre;
        indicepadre = Math.trunc(indice / 2);
    }

    return Arreglo;
}

let myArr = [];

for (var i = 50; i < 60; i++) {
    valor = Math.floor(Math.random() * i);
    if (valor > 0) {
        genMonticuloMinimo(myArr, valor)
    }
}





function eliminaMinimo(Arr) {


    let posMinimo = 1
    let posUltimo = Arr.length - 1

    //saco el valor minimo
    let valorMinimo = Arr[posMinimo];
    console.log('valor minimo:' + valorMinimo);

    Arr[posMinimo] = Arr[posUltimo];
    Arr.pop() //elimino el valor minimo actual del array

    //recalculamos el valor minimo del array, extrayendolo de la primera posición para validar si debe estar ahi
    let valor = Arr[posMinimo];
    child1_index = posMinimo * 2
    child2_index = posMinimo * 2 + 1
    let paso ;
    //mientras el valor minimo sea mayor que ambos hijos
    while ((Arr[posMinimo] > Arr[child1_index]) && (Arr[posMinimo] > Arr[child2_index])) {
       
        paso = (Arr[child1_index] < Arr[child2_index])
        
        if (Arr[child1_index] < Arr[child2_index]) {
            //intercambiamos por el hijo 1
            Arr[posMinimo] = Arr[child1_index];
            Arr[child1_index] = valor;
            posMinimo = child1_index;
        }else if (Arr[child2_index] < Arr[child1_index]) {
            //intercambiamos por el hijo 1
            Arr[posMinimo] = Arr[child2_index];
            Arr[child2_index] = valor;
            posMinimo = child2_index;
        }else if (Arr[child2_index] = Arr[child1_index]) {
            break;
        }


        if (posMinimo >= Arr.length) {
            break;
        }

        child1_index = posMinimo * 2
        child2_index = posMinimo * 2 + 1
        valor = Arr[posMinimo];
    }

    

    return Arr ;
}

console.log('Monticulo Minimo:' + myArr);

console.log('Nuevo Arreglo:' + eliminaMinimo(myArr))


