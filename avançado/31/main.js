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
    const button = document.createElement("button");

    spanName.textContent = item.name;
    spanPrice.textContent = `Preço: ${item.price}`;
    button.textContent = "Adicionar ao carrinho";

    let select = atualizarSelect(item.amount);

    button.addEventListener("click", () => {
      addcarrinho(index, select.value);
      let NewAmount = product[index].amount - select.value;
      product[index].amount = NewAmount;

      if (product[index].amount >= 0) {
        select.remove();
        let newSelect = atualizarSelect(product[index].amount);
        li.insertBefore(newSelect, button);
        select = newSelect;
      }
    });

    li.append(spanName);
    li.append(spanPrice);
    li.append(select);
    li.append(button);
    listIten.append(li);
  });
}

addIten(product);

function atualizarSelect(valorQtd) {
  let select = document.createElement("select");
  for (let j = 1; j <= valorQtd; j++) {
    const option = document.createElement("option");
    option.textContent = j;
    option.value = j;
    select.append(option);
  }
  return select;
}

function addcarrinho(item, qtd) {
  const arrayCar = [];
  const aside = document.querySelector("aside");
  const lisCar = document.getElementById("list-car");
  const li = document.createElement("li");
  const spanName = document.createElement("span");
  const spanPrice = document.createElement("span");
  const spanQtd = document.createElement("span");
  
  if (arrayCar.includes(product[item])) {

    spanQtd.textContent += qtd;

  } else {

    spanName.textContent = product[item].name;
    spanPrice.textContent = product[item].price;
    spanQtd.textContent = qtd;

    aside.append(lisCar);
    lisCar.append(li);
    li.append(spanName, spanPrice, spanQtd);
  }
}
