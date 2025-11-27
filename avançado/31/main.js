const product = [
  {
    name: "Mouse",
    price: 156.5,
    amount: 9,
  },
  {
    name: "Teclado",
    price: 556.5,
    amount: 10,
  },
  {
    name: "Fone",
    price: 600.0,
    amount: 6,
  },
  {
    name: "iphone",
    price: 3500.0,
    amount: 5,
  },
];

function addIten(productList) {
  const listIten = document.getElementById("list-item");

  productList.forEach((item, index) => {
    const li = document.createElement("li");
    const spanName = document.createElement("span");
    const spanPrice = document.createElement("span");
    const select = document.createElement("select");
    const button = document.createElement("button");

    spanName.textContent = item.name;
    spanPrice.textContent = `Preço: ${item.price}`;
    button.textContent = "Adicionar ao carrinho";

    for (let j = 1; j <= item.amount; j++) {
      const option = document.createElement("option");
      option.textContent = j;
      option.value = j;
      select.append(option);
    }

    button.addEventListener("click", () => {
      addcarrinho(index, select.value);
    });

    li.append(spanName);
    li.append(spanPrice);
    li.append(select);
    li.append(button);
    listIten.append(li);
  });
}

addIten(product);

function addcarrinho(item, qtd) {
  const aside = document.querySelector("aside");
  const lisCar = document.getElementById("list-car");

  const li = document.createElement("li");
  const spanName = document.createElement("spam");
  const spanPrice = document.createElement("span");
  const spanQtd = document.createElement("span")

  spanName.textContent = product[item].name;
  spanPrice.textContent = product[item].price;
  spanQtd.textContent = qtd;


  aside.append(lisCar);
  lisCar.append(li);
  li.append(spanName,spanPrice, spanQtd)

  console.log(product[item]);
  console.log(qtd);
}
