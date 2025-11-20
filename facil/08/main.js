const grausCelsius = Number(
  prompt("Informe o valor que deseja converte para fahrenheit")
);

const grausFrahrenheit = ((grausCelsius * 9) / 5) + 32;

console.log(grausFrahrenheit)