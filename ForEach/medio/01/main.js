const words = ["padaria", "sol", "javascript", "copo", "bolo"];

const newArray = []

words.forEach((item) => {
  newArray.push(item.toUpperCase())
});
console.log(`Novo Array: ${newArray}`)