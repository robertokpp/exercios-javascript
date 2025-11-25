const num = Number(prompt("Informe um numero!!"))

function fatorial(number){
    let acom = 1;
  for(i = number; i >= 1; i--){
    acom *= i; 
  }
  return acom;
}

console.log(fatorial(num))