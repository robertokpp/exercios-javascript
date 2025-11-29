const myForm = document.getElementById("my-form");
const buttonSair = document.getElementById("btn-sair")

function welcome() {
  const user = localStorage.getItem("name");
  const idSpan = document.getElementById("logado");

  if (user) {
    myForm.style.display = "none";
    idSpan.style.display = "block";
    buttonSair.style.display="block"
    idSpan.textContent = (`Bem vindo ${user}`)
  } else {
    myForm.style.display = "block";
    idSpan.style.display = "none";
    buttonSair.style.display="none"
  }
}


myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = myForm.querySelector("#name");
  localStorage.setItem("name", userName.value);

  welcome();
});


buttonSair.addEventListener("click", () => {
  localStorage.removeItem("name")
  welcome()
})

welcome();
