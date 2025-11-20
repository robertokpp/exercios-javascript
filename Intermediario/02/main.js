function array(list) {
  let maior = list[0];
  for (i = 0; i < list.length; ++i)
    if (list[i] > maior) {
      maior = list[i];
    }
  return maior;
}

console.log(array([5, 10, 3, 8]));
