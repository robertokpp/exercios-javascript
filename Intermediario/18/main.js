<<<<<<< HEAD
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
=======
let frase = prompt("Informe a frase ");

function fraseInvertida(fraseParaInverte){
    const fraseArray =  fraseParaInverte.split(" ")
    console.log(fraseArray)
}
>>>>>>> 2c1258b8ee78be5cd1dadafb04f859bb652fa6fb
