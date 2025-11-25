function arrayNoRepet(arrayVlr) {

  console.log(arrayVlr)
  let newArray = [];
  for (i = 0; i < arrayVlr.length ; i++) {
    if (!newArray.includes(arrayVlr[i])) {
      newArray.push(arrayVlr[i]);
    }
  }
  return newArray;
}

console.log(arrayNoRepet([1,2,2,3,4,5,3,2,1,1,3,45,5,3,2]))