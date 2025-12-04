let input = document.querySelector("input");
const button = document.querySelector("button");
let cpf = "";







input.addEventListener("input", () => {
  input.value = input.value.replace(/\D+/g, "");
});

button.addEventListener("click", () => {
  cpf = input.value;

  if (cpf.length < 11) {
    console.log("Cpf invalido");
    return;
  }

 cpf.every((num) => num === cpf);

  if ((cpf === true)) {
    console.log("Cpf invalido");
    return;
  }
});


