const URL = "https://api.adviceslip.com/advice";

async function chamadar() {
  const resp = await fetch(URL);
  if (resp.status === 200) {
    const data = await resp.json();
    let m = data.slip;

    const spanMessage = document.getElementById("span-message");
    spanMessage.textContent = m.advice;
  }
}

chamadar();
