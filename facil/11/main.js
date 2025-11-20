const p = prompt("informe uma palavra");

let c = 0;
for (let i = 0; i < p.length; ++i) {
  if ("aeiou".includes(p[i])) {
    c++;
  }
}

console.log(c);
