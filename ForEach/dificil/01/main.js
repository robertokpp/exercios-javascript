const numbers = [12, 45, 7, 22, 89, 34, 56];
let maior = numbers[0];

numbers.forEach((element) => {
  if (element > maior) {
    maior = element;
  }
});

console.log(maior)