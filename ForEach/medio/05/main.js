const ul = document.querySelector("ul");

const tasks = ["Estudar", "Treinar", "Trabalhar", "Dormir"];

tasks.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.append(li);
});
