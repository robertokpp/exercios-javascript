const produtos = [
  { nome: "Pão", categoria: "Padaria" },
  { nome: "Bolo", categoria: "Padaria" },
  { nome: "Café", categoria: "Bebida" },
  { nome: "Suco", categoria: "Bebida" },
  { nome: "Pastel", categoria: "Salgado" },
];

const categorias = {};
produtos.forEach((item) => {
  if (categorias[item.categoria]) {
    categorias[item.categoria] ++;
  }else {
    categorias[item.categoria] = 1;
  }
});

console.log(categorias)