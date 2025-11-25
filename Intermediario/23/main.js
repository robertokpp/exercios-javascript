const input1 = document.querySelector("input");
const span = document.querySelector("span");

input1.addEventListener("input", function (){
  span.textContent = input1.value.length;
})

