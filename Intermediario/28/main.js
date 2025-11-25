const moeda = Number(prompt("Informe um valor para converter"));

let dolar = 0;
if (isNaN(moeda)) {
  alert("valor invalido");
  return;
} else {
  dolar = moeda / 5.15;
}

console.log(dolar);
