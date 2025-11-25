const ul = document.querySelector("ul");
const li = document.createElement("li");
const info = prompt("Informe algo")

li.textContent = info;

ul.appendChild(li);
