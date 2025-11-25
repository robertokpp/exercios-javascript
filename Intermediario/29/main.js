function selectionSort(array) {
  
  for (i = 0; i <= array.length - 1; i++) {
    let min = i;
    for (j = i + 1; j <= array.length - 1; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const x = array[min];
    array[min] = array[i];
    array[i] = x;
  }
  return array;
}

console.log(selectionSort([9, 5, 6, 7, 1, 8, 2, 4, 3]));
