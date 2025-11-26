const people = [
  { nome: "Roberto", idade: 17 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 15 },
  { nome: "Ana", idade: 30 },
  { nome: "Mário", idade: 19 },
];

let contador = 0;
people.forEach((item) => {
  if (item.idade > 18) {
    contador++;
  }
});

console.log(contador);
