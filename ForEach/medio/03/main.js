const products = [
  { nome: "Pão", preco: 5 },
  { nome: "Bolo", preco: 12 },
  { nome: "Café", preco: 8 },
  { nome: "Suco", preco: 6 },
];

let total = 0;
products.forEach((item) => {
  total += item.preco
});

console.log(total)