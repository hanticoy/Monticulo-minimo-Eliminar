class genMonticuloMinimo {

    Arr = [];

    constructor() { }

    insertValor(valor) {

        //Comprueba si el array está vacío y que nunca se ha colocado nada en el índice 0.   
        if (this.Arr.length == 0) { this.Arr.push(undefined); }

        //Empuja el valor nuevo en el array.
        this.Arr.push(valor)

        let indice = this.Arr.length - 1;
        let indicepadre = Math.trunc(indice / 2);

        while (this.Arr[indicepadre] > this.Arr[indice]) {
            this.Arr[indice] = this.Arr[indicepadre];
            this.Arr[indicepadre] = valor;
            indice = indicepadre;
            indicepadre = Math.trunc(indice / 2);
        }

    }

    obtenerMinimo() {

        let posMinimo = 1
        let posUltimo = this.Arr.length - 1

        //saco el valor minimo
        let valorMinimo = this.Arr[posMinimo];

        this.Arr[posMinimo] = this.Arr[posUltimo];
        this.Arr.pop() //elimino el valor minimo actual del array

        //recalculamos el valor minimo del array, extrayendolo de la primera posición para validar si debe estar ahi
        let valor = this.Arr[posMinimo];

        let child1_index = posMinimo * 2
        let child2_index = posMinimo * 2 + 1
        
        //mientras el valor minimo sea mayor que ambos hijos
        while ((this.Arr[posMinimo] > this.Arr[child1_index]) && (this.Arr[posMinimo] > this.Arr[child2_index])) {

            if (this.Arr[child1_index] < this.Arr[child2_index]) {
                //intercambiamos por el hijo 1
                this.Arr[posMinimo] = this.Arr[child1_index];
                this.Arr[child1_index] = valor;
                posMinimo = child1_index;
            } else if (this.Arr[child2_index] < this.Arr[child1_index]) {
                //intercambiamos por el hijo 1
                this.Arr[posMinimo] = this.Arr[child2_index];
                this.Arr[child2_index] = valor;
                posMinimo = child2_index;
            } else if (this.Arr[child2_index] = this.Arr[child1_index]) {
                break;
            }

            if (posMinimo >= this.Arr.length) {
                break;
            }

            child1_index = posMinimo * 2
            child2_index = posMinimo * 2 + 1

            valor = this.Arr[posMinimo];
        }

        return valorMinimo;
    }

    getArrayMonticulo() {
        return this.Arr
    }
}

let myMMinimo = new genMonticuloMinimo()

for (var i = 50; i < 60; i++) {
    valor = Math.floor(Math.random() * i);
    if (valor > 0) {
        myMMinimo.insertValor(valor);
    }
}

console.log('Arreglo Montigulo Minimo:' + myMMinimo.getArrayMonticulo());

console.log('Obtener Valor Minimo:' + myMMinimo.obtenerMinimo());

console.log('Nuevo Arreglo Montigulo Minimo:' + myMMinimo.getArrayMonticulo());