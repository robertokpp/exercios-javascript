const palavra = prompt("Informe uma palavra");

let palavraInvertida = "";
for (i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += (palavra[i]);
}

if (palavra === palavraInvertida){
  console.log("sim")
}else{
  console.log("Nao")
}