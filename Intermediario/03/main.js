function array(list) {
  let menor = list[0]
  for (i = 1; i < list.length; i++) {
    if (list[i] < menor) {
      menor = list[i];
    }
  }
  return menor;
}

console.log(array([4, 12, 7, 3, 9]))