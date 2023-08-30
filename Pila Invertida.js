class Pila {
    constructor() {
      this.numeros = [];
    }
  
    push(numero) {
      this.numeros.push(numero);
    }
  
    pop() {
      return this.numeros.pop();
    }
  
    peek() {
      return this.numeros[this.numeros.length - 1];
    }
  
    size() {
      return this.numeros.length;
    }
  
    isEmpty() {
      return this.numeros.length === 0;
    }
  
    reverse() {
      const pilaInvertida = new Pila();
  
      while (!this.isEmpty()) {
        pilaInvertida.push(this.pop());
      }
  
      return pilaInvertida;
    }
  }
  
  const pila = new Pila();
  
  pila.push(1);
  pila.push(2);
  pila.push(3);
  pila.push(4);
  pila.push(5);
  
  const pilaInvertida = pila.reverse();
  
  console.log(pilaInvertida.numeros);
  