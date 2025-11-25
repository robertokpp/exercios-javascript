function numerosPares(pares) {
  let numPares = [];
  for (i = 0; i < pares.length; ++i) {
    if (pares[i] % 2 === 0) {
      numPares.push(pares[i]);
    }
  }
  return (numPares);
}

console.log(numerosPares([1, 2, 3, 4, 5, 6]));
