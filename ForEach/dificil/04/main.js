const pessoas = [
  { nome: "Roberto", idade: 30 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Ana", idade: 28 }
];

pessoas.forEach(element => {
  console.log(`${element.nome} tem ${element.idade} anos`)
});