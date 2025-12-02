const opcaoMaquina = ["🪨", "📜", "✂️"];
const SelectOption = document.querySelector("select");
const btnEnviar = document.getElementById("jogar");
const span = document.querySelector("span")
const p = document.querySelector("p");

function maquinaPlay(jogador) {
  let random = opcaoMaquina[Math.floor(Math.random() * opcaoMaquina.length)];
  
  
  span.textContent = `${jogador} X ${random}`

  gamePlay(jogador, random);
}

function gamePlay(jogador, maquina) {
  console.log(jogador, maquina);
  if (jogador === "pedra" && maquina === "tesoura") {
    p.textContent = "Voçe venceu"
    return;
  }
  if (jogador === "papel" && maquina === "pedra") {
    p.textContent = "Voçe venceu"
    return;
  }
  if (jogador === "tesoura" && maquina === "papel") {
    p.textContent = "Voçe venceu"
    return;
  }
  if (jogador === maquina) {
    p.textContent = "Empate"
    return;
  } else {
    p.textContent = "Voçe Perdeu"
    return;
  }
}

btnEnviar.addEventListener("click", () => {
  let optionChosen = SelectOption.value;
  p.textContent= "";
  maquinaPlay(optionChosen);
});
