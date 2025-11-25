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

const ul = document.querySelector("ul");

function addIten(productList) {
  for (let i = 0; i < productList.length; i++) {
    const li = document.createElement("li");
    const spanName = document.createElement("span");
    const spanPrice = document.createElement("span");

    spanName.textContent = product[i].name;
    spanPrice.textContent = `Preço: ${product[i].price}`;
    const select = document.createElement("select");
    
    for (let j = 0; j <= product.amount; j++) {
      const option = document.createElement("option");
      option.textContent = product[j].amount;
      select.append(option);
    }

    ul.append(li);
    li.append(spanName);
    li.append(spanPrice);
    li.append(select);
  }
}

addIten(product);
