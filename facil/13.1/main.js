const numeros = [4, 12, 7, 15, 3, 22, 9, 11];

let contador = 0;
for (let i = 0; i < numeros.length; ++i) {
  if (numeros[i] > 10) {
    contador++;
  }
}

console.log(contador);
