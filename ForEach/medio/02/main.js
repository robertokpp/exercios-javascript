const numbers = [2, 7, 8, 13, 4, 25, 30];

const paresArray = [];

numbers.forEach((item) => {
  if (item % 2 === 0) {
    paresArray.push(item);
  }
});
console.log(paresArray)
