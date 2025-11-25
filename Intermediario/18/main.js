const inputFrase = prompt("Informe uma frase");

function inverterFrase(iF) {
  console.log(iF);
  const arrayFrase = iF.split(" ");
  let ArrayfraseInvertida = [];
  for(i = arrayFrase.length -1; i >= 0 ; i-- ){
    ArrayfraseInvertida.push(arrayFrase[i]);
  }
  const fraseInvertida = ArrayfraseInvertida.join(" ");
  console.log(fraseInvertida)
}

inverterFrase(inputFrase);
