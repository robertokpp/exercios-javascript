const carrinho = [
  { nome: "Pão", preco: 5, qtd: 4 },
  { nome: "Bolo", preco: 20, qtd: 1 },
  { nome: "Café", preco: 8, qtd: 3 },
  { nome: "Suco", preco: 6, qtd: 2 },
];

let total = 0;
const nome = [];
let maior = carrinho[0];
carrinho.forEach((item) => {
  total += item.preco * item.qtd;
});

carrinho.forEach((item) => {
  nome.push(item.nome);
});

carrinho.forEach((item) => {
  if (item.qtd > maior.qtd) {
    maior = item;
  }
});

console.log(`Total: ${total}`);
console.log(`Nomes: ${nome}`);
console.log(`Mais quantidade: ${maior.nome}`)
