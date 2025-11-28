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

      if (select.value === "") {
        select.remove();
        button.remove();
        const spanIndisponivel = document.createElement("span");
        spanIndisponivel.textContent = "Produto indisponivel";
        li.append(spanIndisponivel);
      }
    });

    li.id = `list-id-${item.name}`;

    li.append(spanName);
    li.append(spanPrice);
    li.append(select);
    li.append(button);
    listIten.append(li);
  });
}

addIten(product);

function atualizarSelect(optionQtd) {
  let select = document.createElement("select");
  for (let j = 1; j <= optionQtd; j++) {
    const option = document.createElement("option");
    option.textContent = j;
    option.value = j;
    select.append(option);
  }
  return select;
}

const arrayCar = [];
function addcarrinho(item, qtd) {
  const produto = product[item];
  const aside = document.querySelector("aside");
  const lisCar = document.getElementById("list-car");

  let existente = arrayCar.find((p) => p.name === produto.name);
  let vlrTotal = qtd * produto.price;

  if (existente) {
    existente.qtd += Number(qtd);
    vlrTotal = existente.qtd * produto.price;
    const spanQtd = document.getElementById(`qtd-${produto.name}`);
    const spanTotal = document.getElementById(`price-${produto.name}`);
    spanQtd.textContent = existente.qtd;
    spanTotal.textContent = vlrTotal;
    return;
  }

  const novoItem = {
    name: produto.name,
    price: produto.price,
    qtd: Number(qtd),
    total: vlrTotal,
  };

  arrayCar.push(novoItem);

  const li = document.createElement("li");
  const spanName = document.createElement("span");
  const spanPrice = document.createElement("span");
  const spanQtd = document.createElement("span");
  const spanTotal = document.createElement("span");
  const buttonExcliur = document.createElement("button");

  spanName.textContent = produto.name;
  spanPrice.textContent = produto.price;
  spanQtd.textContent = qtd;
  spanTotal.textContent = novoItem.total;
  buttonExcliur.textContent = "DELETE";

  spanTotal.id = `price-${novoItem.name}`;
  spanQtd.id = `qtd-${novoItem.name}`;

  aside.append(lisCar);
  lisCar.append(li);
  li.append(spanName, spanPrice, spanQtd, spanTotal, buttonExcliur);

  buttonExcliur.addEventListener("click", () => {
    li.remove();

    const indexToRemove = arrayCar.findIndex((p) => p.name === produto.name);
    const returnLi = document.getElementById(`list-id-${produto.name}`);
    const options = returnLi.querySelectorAll("select option");
    const lastOption = options[options.length - 1];

    console.log(Number(lastOption.value));
    console.log(quantidadeAtual.value);
    // if (quantidadeAtual > 0) {
    //   console.log("deu certo");
    // }
    // const totalOption = Number(lastOption.value) + existente.qtd + arrayCar.qtd;
    // console.log(totalOption)
    atualizarSelect(arrayCar[indexToRemove].qtd);

    if (indexToRemove !== -1) {
      arrayCar.splice(indexToRemove, 1);
    }
  });
}
