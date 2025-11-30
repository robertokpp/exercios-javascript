const form = document.getElementById("my-form");
const ul = document.querySelector("ul");
const btnRender = document.getElementById("render");
let renderDisplay = false;
let personas = JSON.parse(localStorage.getItem("arrPersonas")) || [];
let ids = personas.length > 0 ? personas[personas.length - 1].id : 0;

function addItem(name, idade, email) {
  ids++;
  personas.push({
    id: ids,
    nome: name,
    idade: idade,
    email: email,
  });
  localStorage.setItem("arrPersonas", JSON.stringify(personas));
}

function renderList() {
  const pesonasString = localStorage.getItem("arrPersonas");
  const personaRes = JSON.parse(pesonasString);

  if (renderDisplay === true) {
    const lis = ul.querySelectorAll("li");
    lis.forEach((element) => {
      element.remove();
    });
    renderDisplay = false;
  }

  personaRes.forEach((item) => {
    const li = document.createElement("li");
    const cod = document.createElement("span");
    const spanName = document.createElement("span");
    const spanAge = document.createElement("span");
    const spanEmail = document.createElement("span");
    const btnDelete = document.createElement("button");

    cod.textContent = `Codigo: ${item.id}`;
    spanName.textContent = `Nome: ${item.nome}`;
    spanAge.textContent = `Idade: ${item.idade}`;
    spanEmail.textContent = `E-mail: ${item.email}`;
    btnDelete.textContent = "Delete";
    li.id = item.id;
    btnDelete.value = item.id;
    console.log(btnDelete.value);

    btnDelete.addEventListener("click", () => {
      if (confirm("deseja realmente excluir esse item ?")=== false) {
        return;
      } else {
        removeItem(item.id);
      }
    });

    ul.append(li);
    li.append(cod, spanName, spanAge, spanEmail, btnDelete);
  });
  renderDisplay = true;
}

function removeItem(idRemover) {
  let arr = JSON.parse(localStorage.getItem("arrPersonas"));
  arr = arr.filter((p) => p.id !== idRemover);
  personas = arr;
  localStorage.setItem("arrPersonas", JSON.stringify(personas));
  renderList();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameMyForn = form.querySelector("#name");
  const ageMyForn = form.querySelector("#age");
  const emailMyForn = form.querySelector("#email");

  if (
    nameMyForn.value.trim() === "" ||
    ageMyForn.value.trim() === "" ||
    emailMyForn.value.trim() == ""
  ) {
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
