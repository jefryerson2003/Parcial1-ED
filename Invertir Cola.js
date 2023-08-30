class cola {
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
function invertirCola(cola){
    const colaInvertida = new cola();

    while (!cola.vacio()) {
        colaInvertida.enqueue(cola.dequeue());
    }

    return colaInvertida;
}



// Ejemplo 
const Nuevacola = new cola();
Nuevacola.enqueue(20);
Nuevacola.enqueue(30);
Nuevacola.enqueue(40);

const colaInvertida = invertirCola(Nuevacola);
console.log("Nueva Cola:", Nuevacola.posiciones); 
console.log("Cola invertida:", colaInvertida.posiciones); 


