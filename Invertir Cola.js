class Cola {
    constructor() {
        this.posiciones = [];
    }

    enqueue(posicion) {
        this.posiciones.push(posicion);
    }

    dequeue() {
        if (this.vacio()) {
            return null;
        }
        return this.posiciones.shift();
    }

    vacio() {
        return this.posiciones.length === 0;
    }

    size() {
        return this.posiciones.length;
    }
}

function invertirCola(cola) {
    const colaInvertida = new Cola();

    for (let i = cola.posiciones.length - 1; i >= 0; i--) {
        colaInvertida.enqueue(cola.posiciones[i]);
    }

    return colaInvertida;
}

const cola = new Cola();
cola.enqueue(20);
cola.enqueue(30);
cola.enqueue(40);

const colaInvertida = invertirCola(cola);

console.log(cola.posiciones);
console.log(colaInvertida.posiciones);
