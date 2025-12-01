let lista = [];
let copiaLista = [];
const btnEnviar = document.getElementById("enviar");
const lifo = document.getElementById("lifo");
const fifo = document.getElementById("fifo");

const inputList = document.getElementById("lista");
const ol = document.querySelector("ol");

function pilha(item) {
  copiaLista = [...item];
  ol.innerHTML = "";
  let itemRemovido = "";
  while (copiaLista.length > 0) {
    itemRemovido = copiaLista.pop();
    let li = document.createElement("li");
    li.textContent = itemRemovido;
    ol.append(li);
  }
}

function fila(item) {
  copiaLista = [...item];
  ol.innerHTML = "";
  let itemRemovido = "";
  while (copiaLista.length > 0) {
    itemRemovido = copiaLista.shift();
    let li = document.createElement("li");
    li.textContent = itemRemovido;
    ol.append(li);
  }
}

btnEnviar.addEventListener("click", () => {
  if (inputList.value.trim() === "") {
    alert("informe um valor");
  } else {
    lista.push(inputList.value);
    inputList.value = "";
  }
});

lifo.addEventListener("click", () => {
  pilha(lista);
});

fifo.addEventListener("click", () => {
  fila(lista);
});
