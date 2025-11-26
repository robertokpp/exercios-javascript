const product = [
  {
    name: "Mouse",
    price: 156.5,
    amount: 15,
  },
  {
    name: "Teclado",
    price: 556.5,
    amount: 12,
  },
  {
    name: "Fone",
    price: 600.0,
    amount: 34,
  },
];

const listIten = document.getElementById("list-item");

function addIten(productList) {
  for (let i = 0; i < productList.length; i++) {
    const li = document.createElement("li");
    const spanName = document.createElement("span");
    const spanPrice = document.createElement("span");

    spanName.textContent = product[i].name;
    spanPrice.textContent = `Preço: ${product[i].price}`;
    // const select = document.createElement("select");

    listIten.append(li);
    li.append(spanName);
    li.append(spanPrice);
    // li.append(select);

    // for (let j = 1; j <= product[i].amount; j++) {
    //   const option = document.createElement("option");
    //   option.textContent = j;
    //   option.value = j;
    //   select.append(option);
    // }

    const button = document.createElement("button");
    button.textContent = "Adicionar ao carrinho";
    li.append(button);
    li.dataset.index = i;
  }
}

addIten(product);

button.addEventListener("click", () => {
  const dialog = document.querySelector("dialog");
  dialog.showModal();

  const itemNoCarrinho = product[li.dataset.index];
});
