const form = document.getElementById("my-form");
const ul = document.querySelector("ul");
const btnRender = document.getElementById("render");
const personas = [];
let ids = 0;

function addItem(name, idade, email) {
  ids++;
  personas.push({
    id: ids,
    nome: name,
    idade: idade,
    email: email,
  });
  localStorage.setItem("arrPersonas", JSON.stringify(personas))
}

function renderList() {
  personas.forEach((item) => {
    const li = document.createElement("li");
    const cod = document.createElement("span");
    const spanName = document.createElement("span");
    const spanAge = document.createElement("span");
    const spanEmail = document.createElement("span");
    const btnDelete = document.createElement("")
    cod.textContent = `Codigo: ${item.id}`;
    spanName.textContent = `Nome: ${item.nome}`;
    spanAge.textContent = `Idade: ${item.idade}`;
    spanEmail.textContent = `E-mail: ${item.email}`;

    li.id = item.id;

    ul.append(li);
    li.append(cod, spanName, spanAge, spanEmail);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameMyForn = form.querySelector("#name");
  const ageMyForn = form.querySelector("#age");
  const emailMyForn = form.querySelector("#email");
  if (nameMyForn.value === "" || ageMyForn.value === "" || emailMyForn == "") {
    alert("Os campos devem ser prencidos");
    return;
  } else {
    addItem(nameMyForn.value, ageMyForn.value, emailMyForn.value);
  }

  nameMyForn.value = "";
  ageMyForn.value = "";
  emailMyForn.value = "";
});

btnRender.addEventListener("click", () => {
  renderList();
});
