const numeros = [12, 5, 20, 8, 3, 17];

let maior = 0;
for (let i = 0; i < numeros.length; ++i) {
  if (maior < numeros[i]) {
    maior = numeros[i];
  }
}

console.log(maior);
