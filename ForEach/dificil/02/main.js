const estoque = [
  { nome: "Pão", preco: 5, qtd: 12 },
  { nome: "Bolo", preco: 20, qtd: 3 },
  { nome: "Café", preco: 8, qtd: 25 },
  { nome: "Suco", preco: 6, qtd: 2 },
];

let totalPrice = 0;
let MaisCaro = estoque[0];
let estoqueBaixo = [];
estoque.forEach((item) => {
  totalPrice += item.preco * item.qtd;

  if (item.preco > MaisCaro.preco) {
    MaisCaro = item;
  }

  if (item.qtd < 5) {
    estoqueBaixo.push(item.nome);
  }
});

console.log(`Total do estoque: ${totalPrice}`);
console.log(`Produto mais caro: ${MaisCaro.nome}`);
console.log(`Produtos com baixo estoque: ${estoqueBaixo}`);
