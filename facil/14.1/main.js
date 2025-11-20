const p = prompt("informe uma palavra");

let inv = "";
for (i = p.length - 1; i >= 0; i--) {
  inv += p[i];
}

console.log(inv);
