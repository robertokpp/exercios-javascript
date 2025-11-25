const user = document.getElementById("user");
const key = document.getElementById("key");
const span = document.querySelector("span");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (user.value === "admin" && key.value === "123") {
    span.textContent = "Acesso permitido";
  } else {
    span.textContent = "Acesso negado";
  }
  user.value = "";
  key.value = "";
});
