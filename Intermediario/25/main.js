const span = document.querySelector("span");

const btnAdd = document.getElementById("add");
const btnDim = document.getElementById("dim");
let contador = 1;
span.textContent = contador;

btnDim.addEventListener("click", () => {
  if (contador <= 0) {
    alert("Valor nao pode ser negativo");
  } else {
    contador --;
    span.textContent = contador;
  }
});

btnAdd.addEventListener("click", () => {
    contador ++;
    span.textContent = contador;
});

